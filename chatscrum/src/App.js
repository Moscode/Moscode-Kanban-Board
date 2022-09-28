import React from 'react';
import './App.css';
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import Home from './components/home/home';

import Scrumboard from './components/scrumboard/scrumboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/scrumboard" element={<Scrumboard />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
