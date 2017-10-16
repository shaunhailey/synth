import React, { Component } from 'react'
import Tone from 'tone'
import PingPongDelay from './PingPongDelay.js'
import Vibrato from './Vibrato.js'

// let synth = new Tone.Synth().chain(`${chain}`, Tone.Master)
// let pingpongdelay = new Tone.PingPongDelay(`${PPDdelayTime}`, `${PPDfeedback}`)
// let vibrato = new Tone.Vibrato(`${vibFreq}`, `${vibDepth}`)
//
// let effectArray = []

export default class EffectLogic extends Component {
  constructor(props){
    super(props);

  }
  render() {
    let selectedEffect = this.props.name
    let choice = null
    if (selectedEffect === 'PingPongDelay'){
      choice = <PingPongDelay />
    } else if (selectedEffect === 'Vibrato'){
      choice = <Vibrato />
    } else {
      choice = <div className="noEffect" />
    }
    return (
      <div className='effectLogic'>
        {choice}
      </div>
    )

  }
}
