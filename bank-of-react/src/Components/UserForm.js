import React, { useState } from "react";

function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [message, setMessages] = useState("");

    const submitName = (e) => {
        e.preventDefault();
        const formValid = firstName.length > 0;
        if (!formValid) {
            return;
        }
        setMessages(`Hello, ${firstName}, welcome to the Bank of React!`);
    };

    return (
        <div>
            Welcome! Enter Your Name:
            <form onSubmit={submitName}>
                <div>
                    <label>Enter: </label>
                    <input 
                        value={firstName}
                        onChange={ (e) => setFirstName(e.target.value)}
                    />
                </div>
            </form>
            {message}
        </div>
    );
}

export default UserForm