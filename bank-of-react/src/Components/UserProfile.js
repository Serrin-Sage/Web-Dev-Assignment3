import React, { Component } from 'react';
import Debits from './Debits';
import Credits from './Credits'
import axios from "axios";

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        userName: ''
      },
      debits: [],
      credits: [],
    }
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
   
    //get data from API response
    debits = debits.data
    credits = credits.data

    this.setState({debits, credits});
  } 


  render() {
    const { debits } = this.state;
    const { credits } = this.state;
    const DebitComponent = () => (<Debits debits={debits} />);
    const CreditComponent = () => (<Credits credits={credits} />);
    return (
        <div className='user-page'>
          <div>
            <DebitComponent />
            <CreditComponent />
          </div>
          
          
        </div>
    );
  }

}

export default UserProfile