import React, { Component } from 'react'
import DisplaySelectedEffect from './DisplaySelectedEffect.js'

class EffectSelection extends Component {
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {selectedEffect: ""}
  }
      handleSelect(e) {
        this.setState({selectedEffect: e.target.value})
      }




  render() {
    return (
      <div className="Adder">
        <div className="patchAdder">
          <select name={this.props.value} onChange={this.props.handleSelect} className="select">
           <option value="None"  defaultValue>Select An Effect</option>
           <option value="PingPongDelay"  >Ping Pong Delay</option>
           <option value="Vibrato"  >Vibrato</option>
          </select>
        </div>
        <DisplaySelectedEffect selectedEffect={this.state.selectedEffect} />
      </div>
    )
  }
}

  export default EffectSelection
