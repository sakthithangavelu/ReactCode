//focusing a username text input defaultly when page loads using useRef
import React,{useEffect,useRef} from 'react'


function HookUseRef() {

    const inputRef = useRef(null)
    useEffect(() =>{
        inputRef.current.focus()      //current refers to the corresponding dom node
    },[])
  return (
    <div>
        <input ref={inputRef} type='text' />
    </div>
  )
}

export default HookUseRef