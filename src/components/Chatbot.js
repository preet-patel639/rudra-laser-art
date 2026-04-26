import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [businessData, setBusinessData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setBusinessData(data))
      .catch(err => console.error('Error loading business data:', err));
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        type: 'bot',
        text: '👋 Welcome to Rudra Laser Art! I\'m your AI assistant. How can I help you today?'
      }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateAIResponse = async (userMessage) => {
    const OPENROUTER_API_KEY = 'YOUR_OPENROUTER_API_KEY'; // Replace with your actual API key
    
    if (!businessData) return 'Loading business information...';

    const context = `You are an AI assistant for Rudra Laser Art, a laser cutting and customization business in Ahmedabad, India.

Business Information:
- Name: ${businessData.businessName}
- Services: ${businessData.services.map(s => s.name).join(', ')}
- Contact: ${businessData.contact.phones.join(', ')}
- Address: ${businessData.contact.address}
- Technology: ${businessData.technology.type}

Answer customer questions professionally and helpfully. Keep responses concise and friendly.`;

    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'meta-llama/llama-3.1-8b-instruct:free',
          messages: [
            { role: 'system', content: context },
            { role: 'user', content: userMessage }
          ]
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('AI Error:', error);
      return getStaticResponse(userMessage);
    }
  };

  const getStaticResponse = (message) => {
    if (!businessData) return 'Please wait while I load the information...';

    const msg = message.toLowerCase();
    
    if (msg.includes('service') || msg.includes('what do you do')) {
      return `We offer: ${businessData.services.map(s => s.name).join(', ')}. Which service interests you?`;
    }
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('call')) {
      return `You can reach us at:\n📞 ${businessData.contact.phones[0]}\n📞 ${businessData.contact.phones[1]}`;
    }
    if (msg.includes('address') || msg.includes('location') || msg.includes('where')) {
      return `We're located at: ${businessData.contact.address}`;
    }
    if (msg.includes('price') || msg.includes('cost')) {
      return 'Pricing depends on your specific requirements. Please call us or use our booking form for a custom quote!';
    }
    if (msg.includes('book') || msg.includes('order')) {
      return 'You can book through our website\'s booking page or call us directly at 7567800813!';
    }
    
    return 'I can help you with our services, contact information, location, and booking. What would you like to know?';
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await generateAIResponse(input);
    
    setMessages(prev => [...prev, { type: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary hover:bg-secondary text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-semibold">Rudra AI Assistant</h3>
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-secondary rounded p-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
