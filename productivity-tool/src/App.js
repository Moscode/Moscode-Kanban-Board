import React from 'react';
import Devs from './Devs.jsx';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Devs />
      </div>
    );
  }
}

export default App;










/*constructor() {
  super();
  this.state = {
    name: "LinuxJobber"
  }

  this.handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  this.handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name + "submitted this form");
  }

  this.handleCopy = (e) => {
    const alert = document.getElementById("alertme");
    alert.innerHTML = "That's an act of plagiarism";
  }

  this.handleCut = () => {
    const alert = document.getElementById("alertme");
    alert.innerHTML = "Stop trying to cut my content away!";
  }
}


<h1>Hello {this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter Name" onChange={this.handleChange}/>
          <button>Submit</button>
          <p onCopy={this.handleCopy} onCut={this.handleCut}>Don't copy my content.</p>
          <i id="alertme"></i>
        </form>*/