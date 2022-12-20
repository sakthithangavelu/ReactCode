import React, { Component } from 'react'
import Lifecycle2 from './Lifecycle2'

class Lifecycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Sakthivel"
      }
      console.log("lifecycle1 constuctor")
    }

static getDerivedStateFromProps(props,state)    
{
    console.log("lifecycle1 getDerivedStateFromProps")
}

componentDidMount(){
    console.log("lifecycle1 componentDidMount")
}
  render() {
    console.log("lifecycle1 render")
    return (
    <div>
    <div>Lifecycle1</div>
    <Lifecycle2/>
    <h2>Check the console to know the order of execution of methods in mounting phase between parent and child class </h2>
    </div>
    )
}
}

export default Lifecycle1