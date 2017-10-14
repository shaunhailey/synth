import React from 'react'
import '../styles/App.css'
import '../styles/noisebox.css'
import AdderGUI from './AdderGUI.js'
import Keyboard from './Keyboard.js'

const App = () =>
  <div className="app">
    <AdderGUI />
    <Keyboard />
  </div>

export default App
