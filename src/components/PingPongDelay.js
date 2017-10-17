import React, { Component } from 'react'

let PPDdelayTime = ''

class PingPongDelay extends Component {
  constructor(props) {
    super(props)
    this.handleDelayTime = this.handleDelayTime.bind(this)
    this.state = { PPDdelayTime: '' }
  }

  componentDidMount() {
    this.setState({ PPDdelayTime: this.props.node.delayTime.value })
  }

  handleDelayTime(e) {
    this.props.node.delayTime.value = e.target.value
    this.setState({ PPDdelayTime: e.target.value })
    console.log(PPDdelayTime)
  }

  render() {
    return (
      <div className="effectWrapper">
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>Ping Pong Delay</p>
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
                  onChange={this.handleDelayTime}
                  min="0.01"
                  max="1"
                  step="0.01"
                  className="slider1"
                  id="PPDdelayTime"
                />
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
