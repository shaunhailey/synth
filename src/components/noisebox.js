import React, { Component } from 'react'
import '../styles/noisebox.css'

class Noisebox extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="wrapper">
        <div className="Adder">
          <div className="patchAdder">
            <button type="button" className="btn">
              Add Patch
            </button>
          </div>
          <div className="stepAdder">
            <button type="button" className="btn">
              Add Stepper
            </button>
          </div>
        </div>
        <div className="synthBox1">
          <div className="outerShell1">
            <div className="topBar">
              <p>Synth Patch1</p>

              <div className="topBarRight">
                <div className="topBarButton">
                  <button type="button" className="btnX">
                    X
                  </button>
                </div>

                <div className="outputSelector">
                  <select id="patchOutput">
                    <option value="value1" value>
                      Output to: Master
                    </option>
                    <option value="value2">Output to: Patch2</option>
                    <option value="value3">Output to: Patch3</option>
                    <option value="value4">Output to: Patch4</option>
                  </select>
                </div>
                <div className="onOff">
                  <button type="button" className="btn">
                    Patch On/Off
                  </button>
                </div>
              </div>
            </div>

            <div className="leftBar">
              <div className="patchGainSliderLeft">
                <input type="range" min="0" max="11" step="0.01" list="tickmarks" className="slider2" id="Gain1" />
                <h3 className="verticalSlider">Gain</h3>
                <h3 className="verticalSliderTicks">| | | | | | | | | | |</h3>
              </div>
            </div>

            <div className="secondBar">
              <div className="slider1">
                <input type="range" min="0" max="11" step="0.01" list="tickmarks" className="slider1" id="OSC1" />
                <datalist id="tickmarks">
                  <option value="0" />
                  <option value="1" />
                  <option value="2" />
                  <option value="3" />
                  <option value="4" />
                  <option value="5" />
                  <option value="6" />
                  <option value="7" />
                  <option value="8" />
                  <option value="9" />
                  <option value="10" />
                  <option value="11" />
                </datalist>
                <h3 className="horizontalSliderTicks">| | | | | | | | | | |</h3>
                <h3>OSC1</h3>
              </div>
              <div className="slider1">
                <input type="range" min="0" max="11" step="0.01" list="tickmarks" className="slider1" id="FMod1" />
                <h3 className="horizontalSliderTicks">| | | | | | | | | | |</h3>
                <h3>FMod</h3>
              </div>
              <div className="slider1">
                <input type="range" min="0" max="11" step="0.01" list="tickmarks" className="slider1" id="OSC2" />
                <h3 className="horizontalSliderTicks">| | | | | | | | | | |</h3>
                <h3>OSC2</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Noisebox
