import React, { Component } from 'react'
import Noisebox from './Noisebox.js'
import Keyboard from './Keyboard.js'
import toneGenerator from './toneGenerator.js'
import '../styles/App.css'
import '../styles/index.css'

const App = () =>
  <div>
    <Noisebox />
    <Keyboard />
    <toneGenerator />
  </div>

export default App
