import React, { Component } from 'react'

class Vibrato extends Component {
  state = {
    vibFreq: '',
    vibDepth: ''
  }

  componentDidMount() {
    this.setState({
      vibFreq: this.props.node.frequency.value,
      vibDepth: this.props.node.depth.value
    })
  }

  handleVibFreq = e => {
    this.props.node.frequency.value = e.target.value
    this.setState({ vibFreq: e.target.value })
  }

  handleVibDepth = e => {
    this.props.node.depth.value = e.target.value
    this.setState({ vibDepth: e.target.value })
  }

  render() {
    return (
      <div className="effectWrapper">
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>Vibrato</p>

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
                  min="0"
                  max="11"
                  step="0.01"
                  className="slider1"
                  id="VibFreq"
                  value={this.state.value}
                  onChange={this.handleVibFreq}
                />

                <h3>Frequency</h3>
              </div>
              <div className="slider1">
                <input
                  type="range"
                  min="0"
                  max="11"
                  step="0.01"
                  className="slider1"
                  id="VibDepth"
                  value={this.state.value}
                  onChange={this.handleVibDepth}
                />
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
