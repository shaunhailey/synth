import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/noisebox.css'
import Noisebox from './Noisebox.js'

// let synth = new Tone.Synth().connect(effect)

export default class Instrument extends Component {
  render() {
    return (
      <div className="Instrument">
        <Noisebox gain={this.props.gain} synth={this.props.synth} />
      </div>
    )
  }
}
