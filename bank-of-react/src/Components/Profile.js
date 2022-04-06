import React, { Component } from 'react'
import axios from 'axios'
import Debits from './Debits'

// import Clock from './Components/Clock';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        userName: '',
        debits: []
      }
    }
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")

    debits = debits.data
  }

  render() {
    const {debits} = this.state
    const DebitsList = () => (<Debits debits={debits} />);
    return (
      <div>
        Profile
        
      </div>
    )
  }
}

export default Profile;