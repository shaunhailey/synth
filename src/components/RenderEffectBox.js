import React, { Component } from 'react'


class RenderEffectBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {EffectBox: null};
  }

  handleClick() {
    this.setState({EffectBox: true});
  }

  function RenderEffectGUI() {
    if (EffectBox === true){
      return <EffectGUI />
    }
  }

  render() {
    const EffectBox = this.state.EffectBox;

    let AddTheEffect = null;
    {
      <AddTheEffect onClick={this.handleClick} />;
    }

    return (
      <div>
        {EffectBox}
      </div>
    );
  }
}

export default RenderEffectBox
