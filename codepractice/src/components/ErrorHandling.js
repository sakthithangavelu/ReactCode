import React from 'react'

function ErrorHandling({name}) {
if(name === "Joy"){
    throw new Error('Not my pet')
}
  return (
    <div>{name}</div>
    
  )
}

export default ErrorHandling









// class App extends Component{
//     render(){
//       return(
//       <div className="App">
//         <fieldset>
//         <ErrorHandling name="daisy"/>
//         <ErrorHandling name="blacky"/>
//         <ErrorHandling name="Joy"/>