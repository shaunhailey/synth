import React, { Component } from 'react'


class DisplaySelectedEffect extends Component {
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div>
        {this.props.selectedEffect}
      </div>
    )
  }
}

export default DisplaySelectedEffect
