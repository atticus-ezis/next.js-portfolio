
"use client";
import { useEffect, useState } from "react";

import React from 'react'



export const TestAI = () => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

    useEffect(() => {
      console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
      
      const fetchData = async () => {
        setLoading(true); // Assuming there's a setLoading function to manage loading state
      
        try {
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json' // Ensure that you're setting the content type, especially important if sending data in the body
            },
            body: JSON.stringify({
              // Include any necessary body data here, if your API endpoint requires it
            })
          });
      
          // Check if the response is successful (status in the range 200-299)
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`); // Throws an error to jump to the catch block
          }
      
          const data = await res.json(); // Parses JSON response into native JavaScript objects
      
          console.log({res, data}); // Logging the response and data for debugging
      
          if (data.error) {
            throw new Error(data.error); // Throws if the API returned an error in data
          }
      
          setResponse(data.response); // Assuming there's a setResponse function to manage the response state
        } catch (err) {
          console.error({err}); // More detailed error logging
          setError(err.message || 'An unknown error occurred'); // Sets a more descriptive error message, handles cases where err.message is undefined
        } finally {
          setLoading(false); // Ensure loading is set to false even if there is an error
        }
      };
      
        
      fetchData();
    }, []);
        
  return (
    <div>
      <h1>AI Chat Response</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <p>{response}</p>
      )}
    </div>
  );
};