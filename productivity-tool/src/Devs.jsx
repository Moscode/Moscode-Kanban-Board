import React from 'react'
class Devs extends React.Component {
    render() {
        
        const {name, age, skill} = this.props;

        return(
            <div className="Devs">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Skill: {skill}</div>
            </div>
        )
    }
}
export default Devs;