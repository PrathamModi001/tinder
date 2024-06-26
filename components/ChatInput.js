import React from 'react'
const { useState } = React

const ChatInput = () => {
    const [textArea, setTextArea] = useState('')

    return (
        <div className='chat-input'>
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className='secondary-button'>Send</button>
        </div>
    )
}

export default ChatInput