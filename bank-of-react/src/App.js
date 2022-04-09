
import UserProfile from './Components/UserProfile'
import './App.css';

// import Clock from './Components/Clock';

function App() {
  const LogIn = (LoginInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = LoginInfo.userName
    this.setState({currentUser: newUser})
  }

  return (
    <div className="App">
      <UserProfile />
    </div>   
  );
}

export default App;
