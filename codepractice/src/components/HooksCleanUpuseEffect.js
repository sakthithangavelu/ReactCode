import React,{useState,useEffect} from 'react'

function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
      //Clean up the timer at the end of the useEffect Hook
      return() => clearTimeout(timer)  //To clear the timer, we had to name it.
    },[]);
  
    return <h1>I've rendered {count} times!</h1>;
  }

export default Timer