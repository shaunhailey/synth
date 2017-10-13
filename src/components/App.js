import React from 'react'
import '../styles/App.css'
import '../styles/noisebox.css'
import Noisebox from './Noisebox.js'
import EffectGUI from './EffectGUI.js'
import Instrument from './Instrument.js'
import Keyboard from './Keyboard.js'

const App = () =>
  <div className="app">
    <Instrument />
    <Keyboard />
  </div>

export default App
