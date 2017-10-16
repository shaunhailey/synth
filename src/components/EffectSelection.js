import React, { Component } from 'react'
import PingPongDelay from './PingPongDelay.js'
import Vibrato from './Vibrato.js'
import EffectLogic from './EffectLogic.js'
import Tone from 'tone'


class EffectSelection extends Component {
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)

    this.state={
      selectedEffect: ''
    }
  }
      handleSelect(e) {
        this.setState({name: e.target.value})
      }
  render() {

    return (
      <div className="Adder">
        <div className="patchAdder">
          <select id='effects' value={this.state.name} onChange={this.handleSelect} className="select">
           <option value="none"  defaultValue>Select An Effect</option>
           <option value='PingPongDelay'>Ping Pong Delay</option>
           <option value="Vibrato"  >Vibrato</option>
          </select>
        </div>
        <EffectLogic name={this.state.name}/>
      </div>
    )
  }
}

  export default EffectSelection