import React, { Component } from "react";
import Data from "../../static/data";
import './scrumboard.css';
import tasks from "../tasks/tasks";

class Scrumboard extends Component {
  constructor(){
    super();

    this.state = {
      data: Data,
      isOpen: false,
      task: null
    }
  }

  openModal = () => {
    this.setState({
      isOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    })
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false
    })
  }

  render() {
    console.log("Logged in as", Data.fullname)
    return (
      <div className="scrumboard">
        <nav>
            <h1>Scrumboard</h1>
            <div className="var">
                <p>User Type: {Data.usertype}</p>
                <p>Project Name: {Data.projectname}</p>
            </div>
        </nav>
        <div className="mainboard">
        <p>Hello {Data.fullname}, welcome to your scrumboard</p>
        <tasks />
        <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
          <div className="header">
            <h3> Add a new task</h3>
            <h3 id="close" style={{color:"#000", cursor: "pointer"}} onClick={() => this.closeModal()}>X</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="input-task" placeholder="INPUT YOUR TASK" onChange={this.handleChange}/>
            <button className="popup-btn">CONFIRM</button>
          </form>
        </div>
        <button className="add" onClick={() => this.openModal()}>ADD TASK</button>
        </div>
      </div>
    )
  }
}

export default Scrumboard;