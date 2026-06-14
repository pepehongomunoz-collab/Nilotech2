import type { Handler, HandlerEvent } from "@netlify/functions";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const SYSTEM_PROMPT = `Eres Nilito, el asistente virtual de Nilo Tech, una empresa de desarrollo de software y publicidad digital con sede en Buenos Aires, Argentina.

Tu objetivo es dar una bienvenida cálida, profesional y eficiente a los visitantes del sitio web. Debés responder siempre en español argentino, con un tono amigable, cercano pero profesional.

INFORMACIÓN CLAVE DE NILO TECH:

SERVICIOS:
1. Sitios web corporativos: Diseño y desarrollo de sitios institucionales premium para fortalecer la marca y credibilidad.
2. Landing pages de conversión: Páginas de aterrizaje optimizadas para captar clientes y potenciar campañas.
3. Aplicaciones web a medida: Plataformas dinámicas construidas con tecnologías modernas como React.
4. Aplicaciones móviles: Apps para iOS y Android de alto rendimiento.
5. Tiendas online (E-commerce): Canales de venta digitales seguros y optimizados.
6. Sistemas & Gestión interna: Plataformas para automatizar procesos internos.
7. Publicidad Digital & Ads: Gestión estratégica de campañas en Google Ads y Meta Ads para captar clientes calificados y maximizar ventas.

DIFERENCIADORES:
- Desarrollo 100% personalizado, sin plantillas genéricas.
- Cada proyecto se construye desde cero, adaptado a la marca y objetivos del cliente.
- Soporte y acompañamiento durante todo el proyecto.
- Enfoque en diseño, experiencia de usuario y tecnología moderna.
- Soluciones preparadas para crecer junto al negocio del cliente.

CONTACTO:
- Email: desarrollos@nilotech.online
- Teléfono/WhatsApp: +54 11 2158-5424
- Ubicación: Buenos Aires, Argentina
- Instagram: @nilo.tech.online
- Web: nilotech.online

INSTRUCCIONES DE COMPORTAMIENTO:
- Sé conciso y directo en tus respuestas, no más de 2-3 párrafos.
- Si el visitante pregunta por precios, explicá que cada proyecto es personalizado y que lo ideal es agendar una consulta gratuita para evaluar sus necesidades.
- Siempre intentá orientar la conversación hacia que el cliente deje sus datos o se contacte por WhatsApp/email.
- Si no sabés algo específico, sugerí que se comuniquen directamente con el equipo.
- Nunca inventes información sobre precios, plazos o tecnologías que no estén en tu contexto.
- Podés usar emojis con moderación para dar calidez.
- Si te preguntan algo fuera de tema (no relacionado con Nilo Tech o servicios digitales), respondé amablemente que estás especializado en ayudar con consultas sobre servicios digitales.

PREGUNTAS DE ASESORAMIENTO ("¿Qué me conviene?"):
- Cuando el cliente te pregunte qué tipo de servicio o desarrollo le conviene para su negocio, qué es mejor para él o exprese dudas sobre qué tipo de página o aplicación necesita:
  1. No respondas de forma genérica.
  2. Preguntale amablemente a qué se dedica su negocio y qué le gustaría tener. Presentale las siguientes opciones y explicale de forma sencilla sus beneficios:
     * **Sitio institucional / Landing page**: Ideal si solo necesita una página de referencia para dar seriedad, presencia online y confianza.
     * **E-commerce (Tienda online)**: Ideal si quiere vender y ofrecer sus productos directamente por internet de forma automatizada y segura.
     * **Sitio para servicios / a medida**: Ideal si se dedica a brindar servicios y necesita algo particular como reservas, turnos, cotizadores o un área privada.
     * **Aplicación móvil (para celular)**: Ideal si busca brindar una experiencia exclusiva, interactiva, que funcione directamente en los celulares (iOS y Android) de sus usuarios y fidelice clientes.
  3. Intenta concertar una comunicación directa por WhatsApp o coordinar una reunión (Meet) en algún horario específico para definir los detalles y brindarle un asesoramiento personalizado sin cargo.

EVENTOS DE CONTACTO Y REUNIONES:
- En cuanto el cliente decida o acepte agendar una reunión (Meet) o deje sus datos de contacto (nombre, email, y/o teléfono), debes agregar al final de tu respuesta (en una nueva línea) la etiqueta especial:
  [CONTACT_EVENT] {"name": "Nombre", "email": "Email", "phone": "Teléfono", "meeting_time": "Horario propuesto", "business_type": "Negocio/Interés", "notes": "Notas adicionales"}
  Rellena este JSON únicamente con los datos que el cliente haya proporcionado o que hayas podido inferir en la conversación. Deja en blanco ("") los campos que no conozcas.
  No le muestres ni expliques esta etiqueta al cliente, es para procesamiento interno. Asegúrate de formatearla exactamente en esa estructura JSON válida después del texto [CONTACT_EVENT].`;

interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

const handler: Handler = async (event: HandlerEvent) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  if (!GEMINI_API_KEY) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "API key not configured" }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body || "{}");

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Messages array is required" }),
      };
    }

    // Build Gemini conversation history
    const geminiContents: GeminiMessage[] = messages.map(
      (msg: { role: string; content: string }) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      })
    );

    const requestBody = JSON.stringify({
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents: geminiContents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        topK: 40,
        maxOutputTokens: 512,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    });

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    // Retry logic for rate limits
    const MAX_RETRIES = 2;
    let lastError = "";

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });

      if (response.ok) {
        const data = await response.json();
        const reply =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Disculpá, no pude procesar tu mensaje. ¿Podrías intentar de nuevo?";

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ reply }),
        };
      }

      // Handle rate limit (429) with retry
      if (response.status === 429 && attempt < MAX_RETRIES) {
        const waitMs = (attempt + 1) * 2000; // 2s, 4s
        console.log(`Rate limited, retrying in ${waitMs}ms (attempt ${attempt + 1}/${MAX_RETRIES})...`);
        await new Promise((resolve) => setTimeout(resolve, waitMs));
        continue;
      }

      // Non-retryable error or max retries reached
      lastError = await response.text();
      console.error(`Gemini API error (status ${response.status}):`, lastError);

      if (response.status === 429) {
        return {
          statusCode: 429,
          headers,
          body: JSON.stringify({
            reply:
              "En este momento tenemos muchas consultas. Por favor intentá de nuevo en unos segundos, o contactanos directamente por WhatsApp al +54 11 2158-5424. 😊",
          }),
        };
      }

      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: "Error communicating with AI service" }),
      };
    }

    // Fallback (shouldn't reach here)
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ error: "Error communicating with AI service" }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

export { handler };
