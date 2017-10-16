import React, { Component } from 'react'

let BCBits = ''

class BitCrusher extends Component {
  constructor(props) {
    super(props)
    this.handleBCBits = this.handleBCBits.bind(this)
    this.state = { BCBits: '' }
  }

  componentDidMount() {
    this.setState({ BCBits: this.props.node.bits.value })
  }

  handleBCBits(e) {
    this.props.node.bits = e.target.value
    this.setState({ BCBits: e.target.value })
    console.log(BCBits)
  }

  render() {
    return (
      <div className="effectWrapper">
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>BitCrusher</p>
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
                  value={this.state.value}
                  onChange={this.handleBCBits}
                  min="1"
                  max="8"
                  step="1"
                  className="slider1"
                  id="bits"
                />
                <h3>Bits</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BitCrusher
