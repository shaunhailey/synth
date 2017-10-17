import React, { Component } from 'react'

class Phaser extends Component {
  state = {
    PFreq: '',
    POctaves: '',
    PBaseFreq: ''
  }

  componentDidMount() {
    this.setState({
      PFreq: this.props.node.frequency,
      POctaves: this.props.node.octaves,
      PBaseFreq: this.props.node.baseFrequency
    })
  }

  handlePFreq = e => {
    this.props.node.baseFrequency = e.target.value
    this.setState({ PFreq: e.target.value })
  }

  handlePOctaves = e => {
    this.props.node.octaves = e.target.value
    this.setState({ POctaves: e.target.value })
  }

  handlePBaseFreq = e => {
    this.props.node.baseFrequency = e.target.value
    this.setState({ PBaseFreq: e.target.value })
  }

  render() {
    return (
      <div className="effectWrapper">
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>Phaser</p>

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
                  min="0.1"
                  max="1000"
                  step="0.1"
                  className="slider1"
                  id="PFreq"
                  value={this.state.value}
                  onChange={this.handlePFreq}
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
                  id="POctaves"
                  value={this.state.value}
                  onChange={this.handlePOctaves}
                />
                <h3>Octave</h3>
                <div className="slider1">
                  <input
                    type="range"
                    min="20"
                    max="10000"
                    step="1"
                    className="slider1"
                    id="PBaseFreq"
                    value={this.state.value}
                    onChange={this.handlePBaseFreq}
                  />
                  <h3>Base Frequency</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Phaser
