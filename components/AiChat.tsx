'use client';

import { useState } from 'react';

export const AiChat = () => {
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;
    setLoading(true);
    setResponse('');
    try {
      const res = await fetch('/aiChat/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || 'response unavailable');
    } catch (error) {
      setResponse('error connecting to api - must replenish tokens');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[50%]">
      <div className="container min-h-5">
        {!response && (
          <div>
            <div className="center text-4xl">Welcome, I'm Atticus</div>
            <div className="center text-lg">Message my personal AI...</div>
          </div>
        )}
        {response && <div>{response}</div>}
      </div>

      <div id="loading" className="min-h-[30px]">
        {loading ? 'Thinking...' : ''}
      </div>

      <textarea
        className="w-full bg-[#21212150] text-white rounded-lg p-4"
        placeholder="Ask about my background!"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      ></textarea>
    </div>
  );
};
