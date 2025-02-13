'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;
    setLoading(true);
    try {
      const res = await fetch('aiChat/api/hello', {
        method: 'POST',
        headers: { 'Content-type': 'applicaiton/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || 'Tokens for AI client have been exhausted at this time.');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  return (
    <div id="main-block" className="container h-screen w-3/4 mx-auto center">
      {/* top half - response */}
      <div id="response-block" className="w-full flex-1 flex flex-col-reverse items-center overflow-y-auto">
        {/* remeber order is REVERSED! */}
        {!response ? (
          <>
            <div id="loading" className="min-h-[30px] self-start">
              {loading ? 'Thinking...' : ''}
            </div>
            <div className="text-5xl text-center">Nice to Meet you</div>
          </>
        ) : (
          <>
            <div id="response" className="self-start p-2 bg-green-700 rounded-lg">
              {response}
            </div>
            <div id="message" className="self-end p-2 bg-blue-500 rounded-lg">
              {message}
            </div>
          </>
        )}
      </div>

      {/* message - bottom half */}
      <div id="message-block" className="w-full flex-1 flex flex-col items-center mt-6">
        <textarea
          className="w-full bg-[#21212150] text-white rounded-lg p-4"
          value={message}
          placeholder="Ask me about my background..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        ></textarea>
      </div>
    </div>
  );
}
