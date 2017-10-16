import React, { Component } from 'react'
import Instrument from './Instrument.js'
import EffectSelection from './EffectSelection.js'
import Keyboard from './Keyboard.js'

class AdderButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Instrument gain={this.props.gain} />
        <EffectSelection
          effects={this.props.effects}
          addEffect={this.props.addEffect}
          removeEffect={this.props.removeEffect}
        />
        <Keyboard synth={this.props.synth} />
      </div>
    )
  }
}

export default AdderButton
