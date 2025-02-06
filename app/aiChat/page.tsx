"use client" 

import { useState } from "react"

export default function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/aiChat/api/hello", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || "No response recieved");
    } catch (error) {
      setResponse("error connecting to api");
    } finally {
      setLoading(false); 
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Chat with AI</h1>
      <textarea
          className="w-full max-w-lg p-2 border rounded text-black"
          rows={3}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
      />
      <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={sendMessage}
          disabled={loading}
      >
          {loading ? "Sending..." : "Send"}
      </button>
      {response && (
          <div className="mt-4 p-3 border rounded bg-gray-100 w-full max-w-lg text-black">
              <strong>AI Response:</strong>
              <p>{response}</p>
          </div>
      )}
    </div>
  );
}