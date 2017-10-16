import React, { Component } from 'react'
import Instrument from './Instrument.js'
import EffectSelection from './EffectSelection.js'
import Keyboard from './Keyboard.js'


class AdderButton extends Component {
    constructor(props){
      super(props)
    }

    render() {

    return (
      <div>
        <Instrument />
        <EffectSelection />
        <Keyboard />
      </div>
    )
  }
}

export default AdderButton
