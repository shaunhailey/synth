import React, { Component } from 'react'

class EffectSelection extends Component {
  render() {
    return (
      <div className="Adder">
        <div className="patchAdder">
          <select name="effectSelect" className="select">
           <option value="None" defaultValue>Select An Effect</option>
           <option value="PingPongDelay">Ping Pong Delay</option>
           <option value="Vibrato">Vibrato</option>
          </select>
        </div>
      </div>
    )
  }
}

  export default EffectSelection
