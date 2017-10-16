import React, { Component } from 'react'

class AutoWah extends Component {
  state = {
    AWFreq: '',
    AWOctaves: ''
  }

  componentDidMount() {
    this.setState({
      AWFreq: this.props.node.baseFrequency,
      AWOctaves: this.props.node.octaves.value
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
            <div className="effectGainSliderLeft">
              <div className="slider1">
                <input
                  type="range"
                  min="20"
                  max="500"
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
                  min="0"
                  max="8"
                  step="1"
                  className="slider1"
                  id="AWOctaves"
                  value={this.state.value}
                  onChange={this.handleAWOctaves}
                />
                <h3>Octave</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AutoWah
