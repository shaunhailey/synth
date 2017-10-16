import React, { Component } from 'react'
import '../styles/noisebox.css'

// var pingPong = new Tone.PingPongDelay(0.9)
// let vibrato = new Tone.Vibrato(99)
// let masterMute = Tone.Master.mute
// let synth = new Tone.Synth().chain(vibrato, Tone.Master)
// let mainGain = ''

class Noisebox extends Component {
  constructor(props) {
    super(props)
    this.handleGain = this.handleGain.bind(this)
    this.state = { mainGain: '0' }
  }

  componentDidMount() {
    this.setState({ mainGain: this.props.gain.volume.value })
  }

  handleGain(e) {
    this.props.gain.volume.value = e.target.value
    this.setState({ mainGain: e.target.value })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="synthBox1">
          <div className="outerShell1">
            <div className="topBar">
              <p>Instrument</p>

              <div className="topBarRight">
                <div className="topBarButton">
                  <button type="button" className="btnX" value="deleteInstrument">
                    X
                  </button>
                </div>
              </div>
            </div>
            <div className="leftBar">
              <div className="patchGainSliderLeft">
                <h3 className="verticalSlider">Instrument Gain</h3>
                <input
                  type="range"
                  min="0"
                  max="11"
                  step="0.01"
                  className="slider2"
                  id="Gain1"
                  value={this.state.value}
                  onChange={this.handleGain}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Noisebox
