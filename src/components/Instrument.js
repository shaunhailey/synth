import React from 'react'
import '../styles/App.css'
import '../styles/noisebox.css'
import Noisebox from './Noisebox.js'
import EffectGUI from './EffectGUI.js'

const Instrument = () =>
  <div className="app">
    <Noisebox />
    <EffectGUI />
  </div>

export default Instrument
