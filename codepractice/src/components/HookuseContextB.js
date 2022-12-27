import React,{useContext} from 'react'
import { UserContext,NewUserContext } from '../App'
import HookuseContextC from './HookuseContextC'

function HookuseContextB() {

   const use =  useContext(UserContext)
   const newUse =  useContext(NewUserContext)

  return (
    <div>
        {use} - {newUse}
    </div>
  )
}

export default HookuseContextB