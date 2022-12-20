import React, { Component } from 'react'

class CondRendering extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isLoggedIn : true
      }
    }
  render() 
   { 
 //1.conditional rendering using if else
    /*
    if(this.state.isLoggedIn){
        return <h3>User is logged in</h3>
    }
    else
    {
        return <h3>User is not logged in</h3>
    }
    */


/*
//2.conditional rendering using element variables
    let message 
    if(this.state.isLoggedIn)
    {
        message = <h1>User is logged in</h1>
    }
    else
    {
        message = <h1>User is not logged in</h1>
    }
    return <h1>{message}</h1>
*/

//3.conditional rendering using conditonal operators

/*
 return(
    this.state.isLoggedIn ? <h2> Login success</h2> : <h2> Login Failed</h2>
 )
*/


//4.conditonal rendering using short circuit operator &&
//left side is evaluated first and only if it is true it returns the value in the right side
return (this.state.isLoggedIn && <h2>Login success</h2>)
  }
}

export default CondRendering 
