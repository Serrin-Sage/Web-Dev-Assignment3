import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Clock from './Clock';

class UserProfile extends Component {
    render() {
    return (
        <div className='user-page'>
          <Clock />
          <div className='name'>
            Welcome! {this.props.userName} to the Bank of React!
          </div>
          <div className='link-to-pages'>
            <Link to='/settings' className='links'>Home</Link>
            <Link to='/debitpage' className='links'>Debits</Link>
            <Link to='/creditpage' className='links'>Credits</Link>
          </div>
        </div>
    );
  }

}

export default UserProfile