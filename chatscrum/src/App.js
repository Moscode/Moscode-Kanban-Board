import React from 'react'
import './App.css';
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       CHATSCRUM
       <SignUp />
       <SignIn />
      </div>
    );
  }
}

export default App;
