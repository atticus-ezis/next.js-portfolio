"use client"

import { useState } from "react"

export const AiChat = () => {
    const [response, setResponse] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!message) return 
        setLoading(true);
        setResponse("");

        try {

        } catch (error) {

        } finally {
            setLoading(false)
        }

    }
}