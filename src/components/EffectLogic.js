import React, { Component } from 'react'

let effects = [
  {
    id: 1,
    name: 'PingPongDelay',
    controls: {
      delayTime: 0.25,
      maxDelayTime: 1,
      wet: effect.wet.value
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

export default class EffectLogic extends Component {
  render() {
    state.effects.map(effect => <Effect id={effect.id} />)
  }
}
