import React, { Component } from 'react'

class Chebyshev extends Component {
  constructor(props) {
    super(props)
    this.handleChebyOrder = this.handleChebyOrder.bind(this)
    this.state = { chebyOrder: '' }
  }

  componentDidMount() {
    this.setState({ chebyOrder: this.props.node.order })
    this.props.node.overdrive = '2x'
  }

  handleChebyOrder(e) {
    this.props.node.order = e.target.value
    this.setState({ chebyOrder: e.target.value })
  }

  render() {
    return (
      <div className="effectWrapper">
        <div className="effectBox1">
          <div className="outerShellEffect">
            <div className="topBar">
              <p>Chebyshev Distortion</p>
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
                  onChange={this.handleChebyOrder}
                  min="1"
                  max="100"
                  step="1"
                  className="slider1"
                  id="chebyOrder"
                />
                <h3>Order</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chebyshev
