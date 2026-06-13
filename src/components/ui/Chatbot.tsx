import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: '¡Hola! 👋 Soy el asistente virtual de **Nilo Tech**. Estoy acá para ayudarte con cualquier consulta sobre nuestros servicios de desarrollo web, apps y publicidad digital.\n\n¿En qué puedo ayudarte?',
  timestamp: new Date(),
};

// Determine API endpoint based on environment
const CHAT_API_URL = '/.netlify/functions/chat';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const formatMessageContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
  };

  const sendMessage = async (overrideText?: string) => {
    const trimmed = (overrideText || input).trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare messages for API (exclude welcome, send only role + content)
      const apiMessages = updatedMessages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      // Handle both success and rate-limit with friendly message
      if (response.ok || data.reply) {
        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: data.reply,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        if (!isOpen) setHasUnread(true);
      } else {
        throw new Error('API error');
      }
    } catch {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content:
          'Disculpá, tuve un problema al procesar tu mensaje. Podés intentar de nuevo o contactarnos directamente por WhatsApp al +54 11 2158-5424.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 group"
        style={{
          background: 'linear-gradient(135deg, #D4AF37, #AA8C2C)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat con asistente virtual'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-dark-900" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-dark-900" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold animate-bounce">
            1
          </span>
        )}

        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping -z-10"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #AA8C2C)' }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 left-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{
              background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(170,140,44,0.05))',
              }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-500/40"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #AA8C2C)' }}
                >
                  <Bot className="w-5 h-5 text-dark-900" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm">Asistente Nilo Tech</h3>
                <p className="text-green-400 text-xs font-medium">En línea</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                      msg.role === 'assistant'
                        ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-dark-900'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      <Bot className="w-3.5 h-3.5" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-dark-900 rounded-br-md font-medium'
                        : 'bg-white/[0.07] text-gray-200 rounded-bl-md border border-white/5'
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: formatMessageContent(msg.content),
                    }}
                  />
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2"
                >
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-gold-500 to-gold-600 text-dark-900">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/[0.07] border border-white/5 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1.5 items-center">
                      <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick actions - only show at start */}
            {messages.length <= 1 && !isLoading && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {[
                  '¿Qué servicios ofrecen?',
                  'Necesito una web',
                  'Publicidad digital',
                ].map((text) => (
                  <button
                    key={text}
                    onClick={() => sendMessage(text)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-gold-500/10 text-gold-500 border border-gold-500/20 hover:bg-gold-500/20 hover:border-gold-500/40 transition-all"
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/10 bg-dark-900/80">
              <div className="flex items-center gap-2 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2 focus-within:border-gold-500/50 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribí tu mensaje..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-dark-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105"
                  style={{
                    background:
                      input.trim() && !isLoading
                        ? 'linear-gradient(135deg, #D4AF37, #AA8C2C)'
                        : 'rgba(255,255,255,0.1)',
                  }}
                  aria-label="Enviar mensaje"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[10px] text-gray-600 text-center mt-2">
                Asistente con IA · Nilo Tech
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
