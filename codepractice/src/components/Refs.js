import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()        //creating ref
    }

componentDidMount()
{
    this.inputRef.current.focus()               //usecase 1 - focus()
    console.log(this.inputRef)
}

clickHandler = () =>  alert(this.inputRef.current.value)   //usecase 2 - fetching the value
  render() {
    return (
      <div>
        <input type = "text" ref={this.inputRef}/> {/*attaching ref using the ref attribute*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Refs