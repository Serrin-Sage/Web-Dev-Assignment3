import React, {Component} from 'react';
import {Navigate} from 'react-router-dom';


class ChangeUser extends Component {
  constructor () {
    super();
    this.state = {
      user: {
        userName: '',
      },
      navigate: false
    }
  }
  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue
    this.setState({user: updatedUser})
  }
  
  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    this.props.changeUsername(this.state.user)
    this.setState({navigate: true})
  }
  
  render () {
    if (this.state.navigate) {
      return (<Navigate to="/userpage"/>)
    }
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='user-name-form'>
            <label>Change Username: </label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName}/>
            <button className='update-button'>UPDATE</button>
          </div>
          
        </form>
      </div>
    );
  }
}
export default ChangeUser;