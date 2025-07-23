import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-background border border-border rounded-lg shadow-xl z-50">
          {/* Header */}
          <div className="bg-primary p-4 rounded-t-lg">
            <h3 className="text-primary-foreground font-semibold">GigaRev Assistant</h3>
          </div>

          {/* Chat Area */}
          <div className="p-4 h-64 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-secondary/50 p-3 rounded-lg">
                <p className="text-sm text-foreground">
                  Hi there! I'm GigaRev's AI assistant. How can I help you today?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="sm" className="px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;