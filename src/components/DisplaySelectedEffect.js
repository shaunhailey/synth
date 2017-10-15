import React, { Component } from 'react'
import PingPongDelay from './PingPongDelay.js'


class DisplaySelectedEffect extends Component {
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div className='disPlay'>
        {this.props.value}
      </div>
    )
  }
}

export default DisplaySelectedEffect
