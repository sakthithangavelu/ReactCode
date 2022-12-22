import React, { Component } from 'react'
import { mainConsumer } from './ContextMain'

class ContextCComp extends Component {
  render() {
    return (
    <mainConsumer>
        {
            (username) =>  {
                return <div>Hi {username}</div>
            }
        }
    </mainConsumer>
    )
  }
}

export default ContextCComp