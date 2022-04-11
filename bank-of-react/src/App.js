import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react'
import UserProfile from './Components/UserProfile';
import Debits from './Components/Debits';
import Credits from './Components/Credits';
import Settings from './Components/Settings';
import axios from 'axios';
import './App.css';
import './themes.scss';


class App extends Component { 
  constructor(props) {
  super(props);
  this.state = {
    currentUser: {
      userName: 'Guest',
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

changeUsername = (logInInfo) => {
  const newUser = {...this.state.currentUser}
  newUser.userName = logInInfo.userName
  this.setState({currentUser: newUser})
}


render() {
  const { debits } = this.state;
  const { credits } = this.state;

  return (
    <Router>
    <div className="App">
      <UserProfile userName={this.state.currentUser.userName}/>
      
    
      <Routes>
        <Route exact path='/settings' element={<Settings user={this.currentUser} changeUsername={this.changeUsername} />} />
        <Route exact path='/debitpage' element={<Debits debits={debits} />} />
        <Route exact path='/creditpage' element={<Credits credits={credits} />} />
      </Routes>
      </div>
    </Router>   
  );
}
}

export default App;
