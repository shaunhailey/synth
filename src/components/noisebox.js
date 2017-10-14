import React, { Component } from 'react'
import '../styles/noisebox.css'

class Noisebox extends Component {
  constructor(props) {
    super(props)
  }
    handleClick = (e) => {
      console.log('clicked')
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

                <div className="outputSelector">
                  <select id="patchOutput">
                    <option value="value1" value>
                      Output to: Master
                    </option>
                    <option value="value2">Output to: Effect 1</option>
                    <option value="value3">Output to: Effect 2</option>
                    <option value="value4">Output to: Effect 3</option>
                  </select>
                </div>
                <div className="onOff">
                  <button type="button" className="btn" value="Mute">
                    Mute
                  </button>
                </div>
              </div>
            </div>

            <div className="leftBar">
              <div className="patchGainSliderLeft">
                <h3 className="verticalSlider">Instrument Gain</h3>
                <input type="range" min="0" max="11" step="0.01" list="tickmarks" className="slider2" id="Gain1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Noisebox
