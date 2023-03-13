import React from 'react'
import "./LoadingMessage.scss"

export default function LoadingMessage() {
  return (
    <div className="loading">
        <h1 className="loading__emoji">⭐</h1>
        <h2 className="loading__message">BrainFlix</h2>
    </div>
  )
}
