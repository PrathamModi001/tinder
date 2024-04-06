import React from 'react'
import whiteLogo from '../images/tinder_logo_white.png'
import coloredLogo from '../images/color-logo-tinder.png'

const Nav = ({minimal, authToken, setShowModal, showModal, setIsSignUp}) => {

    const handleModal = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className='logo-container'>
                {/* show WhiteLogo on homePage and show coloredLogo on other page*/}
                <img className='logo' src={minimal ? coloredLogo : whiteLogo}></img>
            </div>

            {/* want to show the button only if we are not logged in */}
            {!authToken && !minimal &&
                <button 
                    className='nav-button'
                    onClick={handleModal}
                    disabled={showModal}
                >Log In</button>
            }

        </nav>
    )
}

export default Nav