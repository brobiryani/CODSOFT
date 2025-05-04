import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { getResponseForMessage } from "@/lib/chatRules";

type Message = {
  id: string;
  content: string;
  isBot: boolean;
};

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "👋 Hi there! I'm a rule-based chatbot. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input.trim(),
      isBot: false,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsProcessing(true);
    
    // Simulate processing time for more natural conversation
    setTimeout(() => {
      const response = getResponseForMessage(userMessage.content);
      
      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          content: response,
          isBot: true,
        },
      ]);
      setIsProcessing(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-md flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-[600px]">
      <div className="bg-blue-600 p-4 text-white flex items-center">
        <Bot className="mr-2" />
        <h2 className="text-xl font-medium">ChatBot</h2>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "mb-4 max-w-[80%] rounded-lg p-3",
              message.isBot
                ? "bg-blue-100 text-blue-900 mr-auto"
                : "bg-gray-100 text-gray-900 ml-auto"
            )}
          >
            {message.content}
          </div>
        ))}
        {isProcessing && (
          <div className="flex space-x-2 bg-blue-100 text-blue-900 rounded-lg p-3 w-16 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        )}
        <div ref={messagesEndRef}></div>
      </div>
      
      <div className="border-t border-gray-200 p-4 flex">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={isProcessing}
          className="flex-grow mr-2"
        />
        <Button 
          onClick={handleSendMessage} 
          disabled={!input.trim() || isProcessing}
          size="icon"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ChatBot;
