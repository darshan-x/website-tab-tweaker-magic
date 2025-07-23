import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div>
      <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
      <p className="text-sm text-muted-foreground mb-4">
        Subscribe to our newsletter for AI insights and industry trends.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="w-full red-button">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;