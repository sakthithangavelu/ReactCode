//useState


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


         //Declaring multiple state variables - You can use the State Hook more than once in a single component


/*
function ExampleWithManyStates() {
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...
  }
*/


