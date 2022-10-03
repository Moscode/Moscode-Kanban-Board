import React, { Component } from 'react';
import axios from "axios";
import './users.css';

class Users extends Component {
  constructor(){
    super()

    this.state = {
      users: [],
      loading: true
    }
  }

  componentDidMount(){
    axios.get("http://liveapi.chatscrum.com/scrum/api/scrumusers/")
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Users;