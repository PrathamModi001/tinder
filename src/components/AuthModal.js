import React from 'react'

const AuthModal = ({setShowModal}) => {

    const handleClick = () => {
        setShowModal(false);
    }

    const isSignUp = true;

    return (
        <div className='auth-modal'>
            <div className='close-icon' onClick={handleClick}>ⓧ</div>

            <h2>{isSignUp? 'CREATE ACCOUNT': 'LOG IN'}</h2>
            Auth Modal
        </div>
    )
}

export default AuthModal    