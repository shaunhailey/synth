import React, { Component } from 'react'
import EffectSelection from './EffectSelection.js'
import Tone from 'tone'


// let synth = new Tone.Synth().chain(`${chain}`Tone.Master)
// var pingPong = new Tone.PingPongDelay(`${PPDdelayTime}`)
// var synth = new Tone.Synth().connect(pingPong)
// var master = '.toMaster()'

class PingPongDelay extends Component {
  constructor(props){
    super(props)
    this.handleDelayTime = this.handleDelayTime.bind(this)
    this.state = {PPDdelayTime: ''}
  }
      handleDelayTime(e) {
        this.setState({PPDdelayTime: e.target.value})
      }

  render() {

    return (
      <div className="effectWrapper">
       <EffectSelection />
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>Ping Pong Delay</p>
              <div className="topBarRight">
                </div>
                <div className="onOff">
                  <button type="button" className="btn" value="Mute">
                    Mute
                  </button>
                </div>
              </div>
            </div>
            <div className="leftEffectBar">
              <div className="effectGainSliderLeft">
                <div className="slider1">
                  <input type="range" value={this.state.value} onChange={this.handleDelayTime} min="0" max="1" step="0.01" className="slider1" id="PPDdelayTime" />
                  <h3>Delay</h3>
                </div>

              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default PingPongDelay
