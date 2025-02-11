"use client";

import { useState } from "react";

export const AiChat = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await fetch("/aiChat/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || "response unavailable");
    } catch (error) {
      setResponse("error connecting to api - must replenish tokens");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {response && <div>{response}</div>}
      <div> {loading ? "Thinking..." : ""} </div>
      <input
        className="text-black w-5 rounded"
        placeholder="Ask me anything! Then press 'Enter' "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      ></input>
    </div>
  );
};
