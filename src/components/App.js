import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import Noisebox from './Noisebox.js'
import Keyboard from './Keyboard.js'
import Tone from 'tone'
// import Navi from './Navi.js'
import '../styles/App.css'
import '../styles/index.css'

let synth = new Tone.Synth().toMaster()

const App = () =>
  <div className="app">
    <Noisebox />
    <Keyboard />
  </div>

export default App
