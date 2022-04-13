import React, { useState } from "react";
import UserProfile from './UserProfile'
import { Link } from 'react-router-dom'

function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [message, setMessages] = useState("");

    const submitName = (e) => {
        e.preventDefault();
        const formValid = firstName.length > 0;
        if (!formValid) {
            setMessages('Enter a valid name')
            return;
        }
        setMessages(`Hello, ${firstName}, welcome to the Bank of React!`);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.hitory.push('/userpage')
    }

    return (
        <div className="welcome-page">
            <div className="welcome-container">
                <h1 className="welcome-title">Welcome To The Bank of React!</h1>
                <h2 className="enter-name"> Enter Your Name </h2>
                <form onSubmit={onSubmitHandler} >
                    <div>
                        <input 
                            className="name-input"
                            placeholder="Enter..."
                            value={firstName}
                            onChange={ (e) => setFirstName(e.target.value)}
                        />
                    </div>
                </form>
                
                {message}
            </div>
            
        </div>
    );
}

export default UserForm