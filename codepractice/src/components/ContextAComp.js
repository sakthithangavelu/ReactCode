import React, { Component } from 'react'
import ContextBComp from './ContextBComp'

export class ContextAComp extends Component {
  render() {
    return <ContextBComp/>
  }
}

export default ContextAComp