import React, { useState } from "react"
import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";

const Home = (props) => {
    const [showModal, setShowModal] = useState(false);

    const authToken = false;

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <div className="overlay">
            <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>

            <div className="home">
                <h1 className="primary-title">Swipe Right!</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout': 'Create Account'}
                </button>

                {/* if showModal is true display AuthModal */}
                {showModal && (
                    <AuthModal setShowModal={setShowModal}/>
                )}

            </div>
        </div>
    )
};

export default Home;
