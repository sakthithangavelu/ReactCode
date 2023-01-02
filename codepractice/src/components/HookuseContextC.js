import React from 'react'
import { UserContext } from '../App'

function HookuseContextC() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return <div>UserContext value {user}</div>
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default HookuseContextC