import React, { Component } from 'react'
import DisplaySelectedEffect from './DisplaySelectedEffect.js'
import PingPongDelay from './PingPongDelay.js'
import Vibrato from './Vibrato.js'

class EffectSelection extends Component {
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {value: []}
  }
      handleSelect(e) {
        this.setState({value: e.target.value})
      }




  render() {
    const selectedEffect = this.state.value
    let choice = null
    if (selectedEffect === 'PingPongDelay'){
      choice = <PingPongDelay />
    } else if (selectedEffect === 'Vibrato'){
      choice = <Vibrato />
    } else {
      choice = <div className="noEffect" />
    }
    return (
      <div className="Adder">
        <div className="patchAdder">
          <select id='effects' value={this.state.value} onChange={this.handleSelect} className="select">
           <option value="none"  defaultValue>Select An Effect</option>
           <option value='PingPongDelay'>Ping Pong Delay</option>
           <option value="Vibrato"  >Vibrato</option>
          </select>
        </div>
        {choice}
      </div>
    )
  }
}

  export default EffectSelection
