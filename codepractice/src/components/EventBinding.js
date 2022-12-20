import React, { Component } from 'react'

//this keyword is undefined in event handler..that is the need we bind events
class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Click and see to check event is binded using bind(this)"
      }
    //   this.ClickEvent = this.ClickEvent.bind(this)           //constructor method of binding...official method in react doc
 }
    // ClickEvent(){
    //     this.setState({
    //         message : "Yes event is Binded"
    //     })
    // }
    ClickEvent = () =>                                       //Class property as arrow function...
    {
        this.setState({
            message: "Yes event is binded..!"
        })
    }
  render() { 
    return (
      <div>
        <h1>EventBinding</h1>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.ClickEvent.bind(this)}>Click</button>    Binding in the render method */}
        {/* <button onClick={()=>this.ClickEvent()}>Click</button>         using arrow function..simplest way */}
        <button onClick={this.ClickEvent}>Click</button>                   
      </div>
    )
  }
}
export default EventBinding
