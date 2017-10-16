import React, { Component } from 'react'
import EffectSelection from './EffectSelection.js'
import RemoverGUI from './RemoverGUI.js'

class EffectGUI extends Component {
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {value: ''}
  }
      handleSelect(e) {
        this.setState({value: e.target.value})
      }
  render() {
    return (
      <div className="effectWrapper">
       <EffectSelection />
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>Effect 1</p>

              <div className="topBarRight">
                <RemoverGUI />
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
                  <input type="range" min="0" max="11" step="0.01" list="tickmarks" className="slider1" id="OSC1" />
                  <h3>OSC1</h3>
                </div>
                <div className="slider1">
                  <input type="range" min="0" max="11" step="0.01" list="tickmarks" className="slider1" id="OSC1" />
                  <h3>OSC2</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default EffectGUI
