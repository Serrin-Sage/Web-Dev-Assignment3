import React, {Component} from 'react';
import ColorSwitcher from './ColorSelector';

class Settings extends Component {
  constructor () {
    super();
    this.state = {
      user: {
        userName: '',
        showSettings: false,
      },
      navigate: false
    }
  }

  edit = () => {
    this.setState({showSettings: true})
  }

  cancel = () => {
    this.setState({showSettings: false})
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
  }
  
  render () {
    if (this.state.showSettings) {
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='user-name-form'>
            <label>Change Username: </label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName}/>
            <ColorSwitcher />
            <button className='update-button'>UPDATE</button>
            
          </div>  
        </form>
      </div>
    );
    } else {
      return (
        <div className="settings-container">
            <button id="edit-button" onClick={this.edit}>Customize Profile</button>
        </div>
      );
    }
  }
}
export default Settings;