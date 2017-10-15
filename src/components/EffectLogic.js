import React, { Component } from 'react'

let effects = [
  {
    id: 0
    name: 'Select An Effect'
  }
  {
    id: 1,
    name: 'PingPongDelay',
    controls: {
      delayTime: 0.25,
      maxDelayTime: 1,
    }
  },
  {
    id: 2,
    name: 'Vibrato',
    controls: {
      frequency: 5,
      depth: 0.1
    }
  }
]
let effect = effects.id

export default class EffectLogic extends Component {
  render() {
  }
}
