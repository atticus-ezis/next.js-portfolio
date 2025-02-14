'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<{ question: string; answer: string }[]>([
    { question: 'Hello?', answer: 'Hello how can I help you?' },
    { question: 'Looking for a burger', answer: 'have you tried McDonalds?' },
    {
      question: "Do they have fires? I'd really like to have some fries",
      answer: 'of course man they have fries for sure',
    },
    { question: 'What about ketchup?', answer: 'Yea they come in packets' },
    {
      question: "Nah I don't like the way the packets taste sorry but I'll have to pass",
      answer: "Ok that's reasonable",
    },
    { question: 'What about ketchup?', answer: 'Yea they come in packets' },
  ]);

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
    <div id="main-block" className="container h-screen w-3/4 md:w-1/2 mx-auto center">
      {/* reponse - top half */}

      <div id="response-block" className="w-full h-[75%] flex flex-col justify-end">
        {!response && history.length === 0 ? (
          <>
            {!loading ? (
              <div className="text-5xl text-center mb-8">Nice to Meet you</div>
            ) : (
              <div id="loading" className="flex text-lg">
                Thinking...
              </div>
            )}
          </>
        ) : (
          <>
            <div id="chat-history" className="w-full flex flex-col-reverse overflow-y-auto mt-20">
              {history.map((entry, index) => (
                <div key={index} className="flex flex-col">
                  <div id="message" className="self-end max-w-80 p-2 bg-blue-500 rounded-lg m-2">
                    {entry.question}
                  </div>
                  <div id="response" className="max-w-80 self-start p-2 bg-green-700 rounded-lg m-2">
                    {entry.answer}
                  </div>
                </div>
              ))}
            </div>

            <div id="loading" className="min-h-[30px] self-start">
              {loading ? 'Thinking...' : ''}
            </div>
          </>
        )}
      </div>

      {/* message - bottom half */}
      <div id="message-block" className="w-full flex-1 flex flex-col items-center">
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
