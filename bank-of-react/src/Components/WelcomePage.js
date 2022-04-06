import React, { Component } from "react";
import {Link} from 'react-router-dom';

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
        e.preventDefault();
        this.props.LogIn(this.state.user);
        this.setState({redirect: true})
    }

    render () {

        return (
            <div className="welcome-page">
                <div className="welcome-container">
                    <h1 className="welcome-title">Welcome To The Bank of React!</h1>
                    <h2 className="enter-name"> Enter Your Name </h2>
                    <form onSubmit={this.handleSubmit} >
                    <div>
                        <input 
                            className="name-input"
                            placeholder="Enter..."
                        />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default Welcome