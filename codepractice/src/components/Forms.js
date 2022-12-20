import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            feedback: "",
            skill: "react",
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleFeedbackChange = (event) => {
        this.setState({
            feedback: event.target.value
        })
    }
    handleSkillChange = (event) => {
        this.setState({
            skill: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert("Forms is submitted.!")
        event.preventDefault();
    }
    render() {
        return (
            <>
                <h1>FEEDBACK FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name : </label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </div>
                    <br></br>
                    <div>
                        <label>Feedback : </label>
                        <textarea value={this.state.feedback} onChange={this.handleFeedbackChange}></textarea>
                    </div>
                    <br></br>
                    <div>
                        <label>Skills : </label>
                        <select value={this.state.skill} onChange={this.handleSkillChange}>
                            <option value="react">ReactJs</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Forms