'use client';

import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export const AiChat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<{ question: string; answer: string }[]>([]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sendMessage = async () => {
    if (!message) return;
    setLoading(true);
    try {
      const res = await fetch('/api/aiChat', {
        method: 'POST',
        headers: { 'Content-type': 'applicaiton/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      const aiResponse =
        data.choices?.[0]?.message?.content || 'Tokens for AI client have been exhausted at this time.';
      setHistory((prevHistory) => [{ question: message, answer: aiResponse }, ...prevHistory]);
      setResponse(aiResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  return (
    <div id="main-block" className="center container mx-auto h-screen w-3/4 md:w-1/2">
      {/* reponse - top half */}
      {!response && history.length === 0 ? (
        <div id="response-block" className="flex h-[50%] w-full flex-col justify-end">
          {!loading ? (
            <div className="mb-8 text-center text-5xl">Nice to Meet you</div>
          ) : (
            <div id="loading" className="flex text-lg">
              Thinking...
            </div>
          )}
        </div>
      ) : (
        <div id="response-block" className="flex h-[75%] w-full flex-col justify-end">
          <div id="chat-history" className="flex w-full flex-col-reverse overflow-y-auto">
            {history.map((entry, index) => (
              <div key={index} className="flex flex-col">
                <div id="message" className="m-2 max-w-80 self-end rounded-lg bg-blue-500 p-2 text-white shadow-xl">
                  {entry.question}
                </div>
                <div id="response" className="m-2 max-w-80 self-start rounded-lg bg-green-700 p-2 text-white shadow-xl">
                  {entry.answer}
                </div>
              </div>
            ))}
          </div>

          <div id="loading" className="min-h-[30px] self-start">
            {loading ? 'Thinking...' : ''}
          </div>
        </div>
      )}

      {/* message - bottom half */}

      <div id="message-block" className="flex w-full flex-1 flex-col items-center">
        <div className="relative w-full">
          <textarea
            className="relative w-full rounded-lg p-5 pr-12 text-black shadow-xl dark:bg-[#1a1a1a] dark:text-white"
            value={message}
            placeholder="Ask me about my background..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (!isMobile && e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          ></textarea>
          <div className="absolute bottom-3 right-2">
            <button onClick={sendMessage} className="rounded-full bg-blue-500 px-2">
              <img src="/send.png" alt="" className="h-[35px] w-[20px] object-contain" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
