import React from 'react'

const ChatHeader = () => {
    return (
        <div className='chat-container-header'>
            <div className='profile'>
                <div className='img-container'>
                    <img src='https://randomuser.me/api/portraits'/>
                    <h3>UserName</h3>
                </div>
                <i className='log-out-icon'>⇦</i>
            </div>
        </div>
    )
}

export default ChatHeader