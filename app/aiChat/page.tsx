import React from 'react'
import { TestAI } from '@/app/aiChat/components/test'
import { ChatComp } from '@/app/aiChat/components/chatComp'

export default function aiChat() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center text-5xl"> 
        <TestAI />

      </div>
    </main>
  )
}
