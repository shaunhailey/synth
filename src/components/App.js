import React from 'react'
import Tone from 'tone'
import '../styles/App.css'
import '../styles/noisebox.css'
import AdderGUI from './AdderGUI.js'

class App extends React.Component {
  state = {
    gain: new Tone.Volume(0),
    synth: null,
    effects: []
  }

  componentDidMount() {
    this.setState({
      synth: new Tone.Synth().chain(this.state.gain, Tone.Master)
    })
  }

  addEffect = effect => {
    const effects = [...this.state.effects, effect]
    const nodes = effects.map(ef => ef.node)
    this.setState({
      effects,
      synth: new Tone.Synth().chain(...nodes, this.state.gain, Tone.Master)
    })
  }

  removeEffect = position => {
    this.state.effects.forEach(ef => {
      ef.node.disconnect(0)
    })
    const effects = [...this.state.effects.slice(0, position), ...this.state.effects.slice(position + 1)]
    const nodes = effects.map(ef => ef.node)
    this.setState({
      effects,
      synth: new Tone.Synth().chain(...nodes, this.state.gain, Tone.Master)
    })
  }

  render() {
    return (
      <div className="app">
        <AdderGUI
          gain={this.state.gain}
          effects={this.state.effects}
          addEffect={this.addEffect}
          removeEffect={this.removeEffect}
          synth={this.state.synth}
        />
      </div>
    )
  }
}

export default App
