import React, { Component } from 'react'

import { mainConsumer } from './ContextMain'

class ContextCComp extends Component {
  render() {
    return (
    <mainConsumer>
        {
            (value) =>  {
                return <div>Hi {value}</div>
            }
        }
    </mainConsumer>
    )
  }
}

export default ContextCComp