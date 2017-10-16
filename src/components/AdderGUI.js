import React, { Component } from 'react'
import Instrument from './Instrument.js'
import EffectSelection from './EffectSelection.js'
import DisplaySelectedEffect from './DisplaySelectedEffect.js'
import Keyboard from './Keyboard.js'


class AdderButton extends Component {
    constructor(props){
      super(props)
    }
    //   this.state = {effectChain: []}
    //   this.addEffectChain = this.addEffectChain.bind(this)
    // }
    //
    // addEffectChain(){
    //     let effectChain = []
    //     this.setState({effectChain: []})
    //     if (selectedEffect === 'PingPongDelay'){
    //       effectChain.push('pingpongdelay')
    //     } else if (selectedEffect === 'Vibrato'){
    //       effectChain.push('vibrato')
    //     } else {
    //       null
    //     }
    //     console.log(effectChain)
    // }


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
