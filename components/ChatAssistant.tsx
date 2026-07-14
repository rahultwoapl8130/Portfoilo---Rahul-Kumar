"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../app/data";

interface Message {
  role: "bot" | "user";
  content: string;
}

const suggestedQuestions = [
  "Who is Rahul?",
  "Show me your Machine Learning Projects",
  "Give me your LinkedIn",
  "Give me your GitHub",
  "What are your Career Goals?"
];

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm Ask Rahul AI. I can answer questions about Rahul's experience, projects, and skills. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = generateResponse(text);
      setMessages(prev => [...prev, { role: "bot", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("who is") || q.includes("about")) {
      return portfolioData.about;
    }
    
    if (q.includes("machine learning") || q.includes("project")) {
      const mlProjects = portfolioData.projects.map(p => `- ${p.title}: ${p.description}`).join("\n");
      return `Here are some of my featured projects:\n\n${mlProjects}`;
    }
    
    if (q.includes("linkedin")) {
      window.open(portfolioData.hero.socials.linkedin, "_blank");
      return "I've opened Rahul's LinkedIn profile in a new tab! You can also find it here: " + portfolioData.hero.socials.linkedin;
    }
    
    if (q.includes("github")) {
      window.open(portfolioData.hero.socials.github, "_blank");
      return "I've opened Rahul's GitHub profile in a new tab! You can also find it here: " + portfolioData.hero.socials.github;
    }

    if (q.includes("goal") || q.includes("career")) {
      return "Rahul's career objective is to work as a Data Scientist, Machine Learning Engineer, or AI Engineer where he can solve real-world business problems using AI and Data Science.";
    }

    if (q.includes("skill")) {
      return `Rahul's core skills include: ${portfolioData.skills.slice(0, 10).join(", ")} and many more.`;
    }

    if (q.includes("education")) {
      return "Rahul is currently pursuing an MBA in Business Analytics from Uttaranchal University, and holds a B.Sc. in Agriculture.";
    }

    return "I'm still learning! But you can reach out to Rahul directly at rahultwoapl8130@gmail.com for more detailed questions.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] backdrop-blur-xl bg-base/90 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-accent2/20 text-accent2 rounded-lg">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink leading-none">Ask Rahul AI</h3>
                  <span className="text-[10px] text-green-400 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-muted hover:text-ink hover:bg-white/5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={12} className="text-accent2" />
                    </div>
                  )}
                  <div className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-accent2 text-white rounded-tr-sm' 
                      : 'bg-white/5 border border-white/10 text-ink rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={12} className="text-accent2" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10 rounded-tl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white/5 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-3">
                {messages.length === 1 && suggestedQuestions.map((q, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-full text-muted hover:text-accent2 hover:border-accent2/30 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-ink focus:outline-none focus:border-accent2 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2 bg-accent2 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-accent2 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
