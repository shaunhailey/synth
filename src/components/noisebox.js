import React, { Component } from 'react'

//Component notes: this is the component containing one "Noisebox" synth patch.
//Idea is to allow multiple synths simultaneously. Each patch will have two
//oscillators and one frequency modulation tool. Each osc/fm tool will have
//on/off. Each new instance of Noisebox will be numbered +1--i.e. if you already
//have one Noisebox in view (named "Noisebox Patch 1"), then clicking
//"Add Noisebox" will instantiate a new Noisebox titled "Noisebox Patch 2."
class Noisebox extends Component {
  render() {
    return (
      <div className="Noisebox">
      //overall Noisebox shell container, just a big old rectangle with lots of
      //width and not much height.
        <div className="Noisebox-top">
        //top row of Noisebox contains title of component, i.e. "Synth Patch 1".
          <div className="Noisebox-secondTop"
          //second row of Noisebox contains title "Patch 1", on/off toggle,
          // and output routing dropdown selection.
            <div className="Noisebox-thirdTop"
            //third row of Noisebox contains three "slider" controls, two osc
            //and one FM.
              <div className="Noisebox-leftside"
              //The left side of each Noisebox will contain a Gain slider to
              //control output volume, and a close button "X" to remove
              //the Noisebox from view.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
