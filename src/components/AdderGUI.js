import React, { Component } from 'react'
import EffectGUI from './EffectGUI.js'
import Instrument from './Instrument.js'


class AdderButton extends Component {
  constructor(props) {
    super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state = {GUI: []}
}
    handleClick(e) {
      console.log('clicked')
      this.setState({GUI: [<EffectGUI />]});
    }

  render (){



    return (
      <div>
        <div className="patchAdder">
          <button type="button" className="btn" onClick={this.handleClick}>
            Add Effect
          </button>
        </div>
        <Instrument />
        {this.state.GUI}
      </div>
    )
  }
}

export default AdderButton
