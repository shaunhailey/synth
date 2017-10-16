import React, { Component } from 'react'
import EffectSelection from './EffectSelection.js'

let vibFreq= ''
let vibDepth= ''

class Vibrato extends Component {
  constructor(props){
    super(props)
    this.handleVibFreq = this.handleVibFreq.bind(this)
    this.handleVibDepth = this.handleVibDepth.bind(this)

    this.state = {vibFreq: '', vibDepth: ''}
  }
      handleVibFreq(e) {
        this.setState({vibFreq: e.target.value})
        console.log(vibFreq)
      }
      handleVibDepth(e) {
        this.setState({vibDepth: e.target.value})
        console.log(vibDepth)
      }
  render() {
    return (
      <div className="effectWrapper">
       <EffectSelection />
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>Vibrato</p>

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
                  <input type="range" min="0" max="11" step="0.01" className="slider1" id="VibFreq" value={this.state.value} onChange={this.handleVibFreq} />

                  <h3>Frequency</h3>
                </div>
                <div className="slider1">
                  <input type="range" min="0" max="11" step="0.01" className="slider1" id="VibDepth" value={this.state.value} onChange={this.handleVibDepth} />
                  <h3>Depth</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Vibrato
