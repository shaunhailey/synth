import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/noisebox.css'
import Noisebox from './Noisebox.js'
import Tone from 'tone'


// let synth = new Tone.Synth().connect(effect)

export default class Instrument extends Component {





  render() {
    return (
      <div className="Instrument">
        <Noisebox />
      </div>
    )
  }
}
