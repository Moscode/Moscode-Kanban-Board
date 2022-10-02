import React, { Component } from "react";
import Data from "../../static/data";
import './scrumboard.css';
import Tasks from "../tasks/tasks"
import AddTask from "./addTask";

class Scrumboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: Data,
      isOpen: false,
      tasks: []
    }
  }

  addTask = (task) => {
    task.id = Math.random().toString(36).slice(2, 9)
    const tasks = [...this.state.tasks, task]
    this.setState({
      tasks
    })
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => (
      task.id !==  id
    ))
    this.setState({
      tasks
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
        <Tasks data={this.state.tasks} deleteTask={this.deleteTask}/>
        <AddTask addTask={this.addTask}/>
        </div>
      </div>
    )
  }
}

export default Scrumboard;