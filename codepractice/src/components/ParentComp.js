import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Sakthi"
      }
    }

    componentDidMount() 
    {  //The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.
        setInterval(() => {this.setState({name : "Sakthi"})},2000)
    }

  render() {
    console.log("******Parent Component*******")
    return (
      <div>
            <h1>Parent Component</h1>
            {/* <RegularComp name={this.state.name}></RegularComp>
            <PureComp name={this.state.name}></PureComp> */}
            Memo Comp
            <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp