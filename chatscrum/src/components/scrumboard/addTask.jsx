import React, { Component } from 'react'

class AddTask extends Component {
    state = {
        content: ""
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
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false
        })
        this.props.addTask(this.state)
        this.setState({
            content: ""
        })
    }
    render() {
        return (
            <div className='add-task'>
                <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
                    <div className="header">
                        <h3> Add a new task</h3>
                        <h3 id="close" style={{ color: "#000", cursor: "pointer" }} onClick={() => this.closeModal()}>X</h3>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="input-task" placeholder="INPUT YOUR TASK" onChange={this.handleChange}  value={this.state.content}/>
                        <button className="popup-btn">CONFIRM</button>
                    </form>
                </div>
                <button className="add" onClick={() => this.openModal()}>ADD TASK</button>
            </div>
    )
  }
}

export default AddTask;
