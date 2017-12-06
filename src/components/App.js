import React from 'react'
import Tone from 'tone'
import '../styles/App.css'
import '../styles/noisebox.css'
import AdderGUI from './AdderGUI.js'
import MidiControl from './MidiControl'

let synth = ''

class App extends React.Component {
  state = {
    gain: new Tone.Volume(0),
    synth: null,
    effects: []
  }

  componentDidMount() {
    this.setState({
      synth: new Tone.PolySynth().chain(this.state.gain, Tone.Master)
    })
  }

  addEffect = effect => {
    synth.releaseAll()
    const effects = [...this.state.effects, effect]
    const nodes = effects.map(ef => ef.node)
    this.setState({
      effects,
      synth: new Tone.PolySynth().chain(...nodes, this.state.gain, Tone.Master)
    })
  }

  removeEffect = position => {
    synth.releaseAll()
    this.state.effects.forEach(ef => {
      ef.node.disconnect(0)
    })
    const effects = [...this.state.effects.slice(0, position), ...this.state.effects.slice(position + 1)]
    const nodes = effects.map(ef => ef.node)
    this.setState({
      effects,
      synth: new Tone.PolySynth().chain(...nodes, this.state.gain, Tone.Master)
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
        <MidiControl synth={this.state.synth} />
      </div>
    )
  }
}

export default App
