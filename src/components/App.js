import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import Noisebox from './Noisebox.js'
import Keyboard from './Keyboard.js'
// import toneGenerator from './ToneGenerator.js'
// import Navi from './Navi.js'
import '../styles/App.css'
import '../styles/index.css'

const App = () =>
  <div className="app">
    <Noisebox />
    <Keyboard />
  </div>

export default App
