import React, { Component } from 'react'
import EffectGUI from './EffectGUI.js'


class RemoverButton extends Component {
  constructor(props) {
    super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state = {GUI: [<EffectGUI />]}
}
    handleClick(e) {
      console.log('clicked')
      this.setState({GUI: [<div></div>]})
    }

  render (){



    return (
      <div>
        <div className="topBarButton">
          <button type="button" className="btnX" value="deleteEffect">
            X
          </button>
         {this.state.GUI}
        </div>
      </div>
    )
  }
}

export default RemoverButton
