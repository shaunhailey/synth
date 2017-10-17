import React, { Component } from 'react'

class AutoWah extends Component {
  state = {
    AWFreq: '',
    AWOctaves: '',
    AWSensi: ''
  }

  componentDidMount() {
    this.setState({
      AWFreq: this.props.node.baseFrequency,
      AWOctaves: this.props.node.octaves,
      AWSensi: this.props.node.sensitivity
    })
  }

  handleAWFreq = e => {
    this.props.node.baseFrequency = e.target.value
    this.setState({ AWFreq: e.target.value })
  }

  handleAWOctaves = e => {
    this.props.node.octaves = e.target.value
    this.setState({ AWOctaves: e.target.value })
  }

  handleAWSensi = e => {
    this.props.node.sensitivity = e.target.value
    this.setState({ AWSensi: e.target.value })
  }

  render() {
    return (
      <div className="effectWrapper">
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>AutoWah</p>

              <div className="topBarRight" />
              <div className="onOff">
                <button type="button" className="btn" value="Mute">
                  Mute
                </button>
                <button type="button" className="btnX" value="deleteInstrument" onClick={this.props.removeEffect}>
                  &times;
                </button>
              </div>
            </div>
          </div>
          <div className="leftEffectBar">
            <div className="effectGainSliderLeft3-4item">
              <div className="slider1">
                <input
                  type="range"
                  min="60"
                  max="10000"
                  step="1"
                  className="slider1"
                  id="AWFreq"
                  value={this.state.value}
                  onChange={this.handleAWFreq}
                />
                <h3>Frequency</h3>
              </div>
              <div className="slider1">
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  className="slider1"
                  id="AWOctaves"
                  value={this.state.value}
                  onChange={this.handleAWOctaves}
                />
                <h3>Octave</h3>
                <div className="slider1">
                  <input
                    type="range"
                    min="-40"
                    max="40"
                    step="1"
                    className="slider1"
                    id="AWSensi"
                    value={this.state.value}
                    onChange={this.handleAWSensi}
                  />
                  <h3>Sensitivity</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AutoWah
