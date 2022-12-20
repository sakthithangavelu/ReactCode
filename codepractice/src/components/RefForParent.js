import React, { Component } from 'react'
import RefForwading from './RefForwading'

class RefForParent extends Component {
    constructor(props) {
      super(props)
         this.inputRef = React.createRef()
    }

clickHandler = () => {
    this.inputRef.current.focus()
}
  render() {
    return (
      <div>
        <RefForwading ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus in</button>
      </div>
    )
  }
}

export default RefForParent