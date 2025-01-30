import React from 'react'

const api_key = process.env.NEXT_PUBLIC_OPENAI_API_KEY

export const ChatComp = () => {
  return (
    <div>This is my key {api_key}</div>
  )
}
