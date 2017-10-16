import React, { Component } from 'react'
import Tone from 'tone'
import PingPongDelay from './PingPongDelay'
import Vibrato from './Vibrato'

class EffectSelection extends Component {
  handleSelect = e => {
    if (e.target.value !== 'none') {
      const name = e.target.value
      this.props.addEffect({ name, node: this.newEffectNode(name) })
    }
  }

  newEffectNode(name) {
    switch (name) {
      case 'PingPongDelay':
        return new Tone.PingPongDelay(0.9)
      case 'Vibrato':
        return new Tone.Vibrato(99)
    }
  }

  render() {
    const effects =
      this.props.effects &&
      this.props.effects.map((effect, i) => {
        switch (effect.name) {
          case 'PingPongDelay':
            return <PingPongDelay {...effect} key={i} removeEffect={() => this.props.removeEffect(i)} />
          case 'Vibrato':
            return <Vibrato {...effect} key={i} removeEffect={() => this.props.removeEffect(i)} />
        }
      })

    return (
      <div className="Adder">
        <div className="patchAdder">
          <select id="effects" value="none" onChange={this.handleSelect} className="select">
            <option value="none" defaultValue>
              Select An Effect
            </option>
            <option value="PingPongDelay">Ping Pong Delay</option>
            <option value="Vibrato">Vibrato</option>
          </select>
        </div>
        {effects}
      </div>
    )
  }
}

export default EffectSelection
