useState


import React , {useState} from "react";
function HooksUseState(){
    const [count,setCount] = useState(0); //The only argument to useState is the initial state
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default HooksUseState


           //example 2
import React,{useState} from "react";

function HooksUseState(){
    const [name,setName] = useState("Sakthi")
    return(
        <div>
            <h1>Welcome {name}</h1>
            <button onClick={() => setName("Vel")}>Click</button>
        </div>
    )
}
export default HooksUseState




         //Declaring multiple state variables - You can use the State Hook more than once in a single component

import React , {useState} from "react";
function HooksUseState() {
   
    const [qty, setQty] = useState(2);
    const [fruit, setFruit] = useState('Watermelon');
    const [season, setSeason] = useState({ text: 'Summer' });  //including object
    
    return(
        <div>
            <h1>Order {qty} big {fruit} for this {season.text}</h1>
            <button onClick={() => setSeason({text : "Winter"})}>click</button>
        </div>
    )
  }



  export default HooksUseState