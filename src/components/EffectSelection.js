import React, { Component } from 'react'
import Tone from 'tone'
import PingPongDelay from './PingPongDelay'
import Vibrato from './Vibrato'
import AutoWah from './AutoWah'
import Chebyshev from './Chebyshev'
import BitCrusher from './BitCrusher'

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
        return new Tone.PingPongDelay()
      case 'Vibrato':
        return new Tone.Vibrato()
      case 'AutoWah':
        return new Tone.AutoWah()
      case 'Chebyshev':
        return new Tone.Chebyshev(100)
      case 'BitCrusher':
        return new Tone.BitCrusher(5)
    }
  }

  render() {
    var effects =
      this.props.effects &&
      this.props.effects.map((effect, i) => {
        switch (effect.name) {
          case 'PingPongDelay':
            return <PingPongDelay {...effect} key={i} removeEffect={() => this.props.removeEffect(i)} />
          case 'Vibrato':
            return <Vibrato {...effect} key={i} removeEffect={() => this.props.removeEffect(i)} />
          case 'AutoWah':
            return <AutoWah {...effect} key={i} removeEffect={() => this.props.removeEffect(i)} />
          case 'Chebyshev':
            return <Chebyshev {...effect} key={i} removeEffect={() => this.props.removeEffect(i)} />
          case 'BitCrusher':
            return <BitCrusher {...effect} key={i} removeEffect={() => this.props.removeEffect(i)} />
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
            <option value="AutoWah">AutoWah</option>
            <option value="Chebyshev">Chebyshev</option>
            <option value="BitCrusher">BitCrusher</option>
          </select>
        </div>
        {effects}
      </div>
    )
  }
}

export default EffectSelection
