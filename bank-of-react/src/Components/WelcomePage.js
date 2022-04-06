import React, { Component, useState } from "react";
import {Link, Navigate, Router, Route } from 'react-router-dom';


class Welcome extends Component {
    constructor () {
        super();
        this.state = {
            user: {
                userName: ''
            },
            redirect: false
        }
    }

    handleChange = (e) => {
        const updateUser = {...this.state.user};
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updateUser[inputField] = inputValue;
        this.setState({user: updateUser})
    }

    handleSubmit = (e) => {
        const [message, setMessages] = useState("");
        e.preventDefault();
        this.setState({redirect: true})
        const formValid = this.state.user.length > 0;
        if (!formValid) {
            setMessages('Enter a valid name')
            return;
        }
        setMessages(`Hello, ${this.state.user}, welcome to the Bank of React!`);
    }

    render () {
        if (this.state.redirect) {
            return(<Router>
                    <Navigate to="/userprofile" />
                    </Router>)
        }
        return (
            <div className="welcome-page">
                <div className="welcome-container">
                    <h1 className="welcome-title">Welcome To The Bank of React!</h1>
                    <h2 className="enter-name"> Enter Your Name </h2>
                    <form onSubmit={this.handleSubmit} >
                    <div>
                        <input
                            type="text"
                            name="userName"
                            className="name-input"
                            placeholder="Enter..."
                            onChange={this.handleChange}
                            value={this.state.user.userName}
                        />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
            </div>
        )
    }
}

export default Welcome