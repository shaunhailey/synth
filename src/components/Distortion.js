import React, { Component } from 'react'

let DDist = ''

class Distortion extends Component {
  constructor(props) {
    super(props)
    this.handleDistortion = this.handleDistortion.bind(this)
    this.state = { DDist: '' }
  }

  componentDidMount() {
    this.setState({ DDist: this.props.node.distortion })
  }

  handleDistortion(e) {
    this.props.node.distortion = e.target.value
    this.setState({ DDist: e.target.value })
  }

  render() {
    return (
      <div className="effectWrapper">
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>Distortion</p>
              <div className="topBarRight" />
              <div className="onOff">
                <button type="button" className="btnX" value="deleteInstrument" onClick={this.props.removeEffect}>
                  &times;
                </button>
              </div>
            </div>
          </div>
          <div className="leftEffectBar">
            <div className="effectGainSliderLeft">
              <div className="slider1">
                <input
                  type="range"
                  value={this.state.value}
                  onChange={this.handleDistortion}
                  min="0"
                  max="1000"
                  step="0.01"
                  className="slider1"
                  id="DDist"
                />
                <h3>Amount</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Distortion
