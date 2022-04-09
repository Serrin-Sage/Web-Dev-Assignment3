import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react'
import UserProfile from './Components/UserProfile';
import Debits from './Components/Debits';
import Credits from './Components/Credits';
import Welcome from './Components/ChangeUser';
import axios from 'axios';
import './App.css';

// import Clock from './Components/Clock';

class App extends Component { 
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

changeUsername = (logInInfo) => {
  const newUser = {...this.state.currentUser}
  newUser.userName = logInInfo.userName
  this.setState({currentUser: newUser})
}

render() {
  const { debits } = this.state;
  const { credits } = this.state;
  const DebitComponent = () => (<Debits debits={debits} />);
  const CreditComponent = () => (<Credits credits={credits} />);
  const LoginComponent = () => (<Welcome user={this.currentUser} changeUsername={this.changeUsername} />)

  return (
    <Router>
    <div className="App">
      <UserProfile userName={this.state.currentUser.userName}/>
      
    </div>
      <Routes>
        <Route exact path='/settings' element={<LoginComponent />} />
        <Route exact path='/debitpage' element={<DebitComponent />} />
        <Route exact path='/creditpage' element={<CreditComponent />} />
      </Routes>
    </Router>   
  );
}
}

export default App;
