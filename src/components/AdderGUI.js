import React, { Component } from 'react'
import Instrument from './Instrument.js'
import EffectSelection from './EffectSelection.js'
import DisplaySelectedEffect from './DisplaySelectedEffect.js'


class AdderButton extends Component {



  render (){



    return (
      <div>
        <Instrument />
        <EffectSelection />
      </div>
    )
  }
}

export default AdderButton
