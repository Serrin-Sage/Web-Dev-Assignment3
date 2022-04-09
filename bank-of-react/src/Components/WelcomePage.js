import React, { Component, useState } from "react";
import { useNavigate } from 'react-router-dom';



function Welcome() {

    const navigate = useNavigate();
    navigate('/userpage')

        return (
            <div className="welcome-page">
                <div className="welcome-container">
                    <h1 className="welcome-title">Welcome To The Bank of React!</h1>
                    <h2 className="enter-name"> Enter Your Name </h2>
                    <form>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            className="name-input"
                            placeholder="Enter..."
                        />
                    </div>
                    <button onClick={() => {navigate('/userpage')}}>Log In</button>
                </form>
            </div>
            </div>
        )
}

export default Welcome