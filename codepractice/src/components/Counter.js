import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    updateCount(){
        this.setState({                     //Always use setState and never modify the state directly
            count : this.state.count + 1
        })

    }
  render() {
    return (
      <div>
      <h1>Count - {this.state.count}</h1>
      <button onClick={() =>this.updateCount()}>Pess to increase</button>
      </div>
    )
  }
}

export default Counter