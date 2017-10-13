import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/noisebox.css'
import Noisebox from './Noisebox.js'
import EffectGUI from './EffectGUI.js'

export default class Instrument extends Component {
  render() {
    let chosenEffects = effects.map(effect => {
      return <Effect id={effect.id} />
    })
    return (
      <div className="app">
        <Noisebox />
        {chosenEffects}
      </div>
    )
  }
}
