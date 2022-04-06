import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class UserProfile extends Component {
  render() {
    return (
        <div>
           <div className="user">
              <h1>User Profile</h1>
          </div>
          <div className="name">
            Username: {this.props.userName}
          </div>
          <div className="home">
            <Link to="/">Return to Home</Link>
          </div>
        </div>
  
    );
  }
}

export default UserProfile;