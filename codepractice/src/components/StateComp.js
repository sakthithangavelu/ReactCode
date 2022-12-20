import React from "react";


//state and setstate
class StateComp extends React.Component{
constructor(){
    super()
    this.state = {
        message : "Press the button to change the message"
    }
}
changeMessage(){
    this.setState({
        message : "Message is changed"
}) 
} 

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Check</button>
            </div>
        )
            
    }

}

export default StateComp