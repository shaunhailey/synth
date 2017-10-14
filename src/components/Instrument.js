import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/noisebox.css'
import Noisebox from './Noisebox.js'
// import AdderButton from './AdderButton.js'
// import AdderGUI from './AdderGUI.js'
// import EffectLogic from './EffectLogic.js'

export default class Instrument extends Component {





  render() {
    return (
      <div className="Instrument">
        <Noisebox />
      </div>
    )
  }
}
