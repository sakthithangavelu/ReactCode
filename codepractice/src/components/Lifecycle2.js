import React, { Component } from 'react'

class Lifecycle2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Sakthivel"
      }
      console.log("lifecycle2 constuctor")
    }

static getDerivedStateFromProps(props,state)    
{
    console.log("lifecycle2 getDerivedStateFromProps")
}

componentDidMount(){
    console.log("lifecycle2 componentDidMount")
}
  render() {
    console.log("lifecycle2 render")
    return (<div>Lifecycle2</div>)
}
}

export default Lifecycle2