import React, { Component } from 'react'
import '../styles/noisebox.css'


//Component notes: this is the component containing one "Noisebox" synth patch.
//Idea is to allow multiple synths simultaneously. Each patch will have two
//oscillators and one frequency modulation tool. Each osc/fm tool will have
//on/off. Each new instance of Noisebox will be numbered +1--i.e. if you already
//have one Noisebox in view (named "Noisebox Patch 1"), then clicking
//"Add Noisebox" will instantiate a new Noisebox titled "Noisebox Patch 2."
class Noisebox extends Component {
  render() {
    return (
      <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test Pictures</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
   <div class="wrapper">

    <div class="Adder">
      <div class="patchAdder">
        <button type="button" class="btn">Add Patch</button>
      </div>
      <div class="stepAdder">
        <button type="button" class="btn">Add Stepper</button>
      </div>
    </div>

    <div class="synthBox1">
      <div class="outerShell1">

      <div class="topBar">
          <p>Synth Patch1</p>

          <div class="topBarRight">

            <div class="topBarButton">
              <button type="button" class="btnX">X</button>
            </div>

            <div class="outputSelector">
              <select id="patchOutput">
                <option value="value1" selected>Output to: Master</option>
                <option value="value1">Output to: Patch2</option>
                <option value="value2">Output to: Patch3</option>
                <option value="value3">Output to: Patch4</option>
              </select>
            </div>
            <div class="onOff">
              <button type="button" class="btn">Patch On/Off</button>
            </div>
           </div>
      </div>

      <div class="leftBar">
        <div class="patchGainSliderLeft">
          <input type="range" min="0" max="11" step="0.01" list="tickmarks" class="slider2">
          <h3 class="verticalSlider">Gain</h3>
          <h3 class="verticalSliderTicks">| | | | | | | | | | |</h3>
        </div>
      </div>


      <div class="secondBar">
        <div class="slider1">
          <input type="range" min="0" max="11" step="0.01" list="tickmarks" class="slider1">
            <datalist id="tickmarks">
              <option value="0">
              <option value="1">
              <option value="2">
              <option value="3">
              <option value="4">
              <option value="5">
              <option value="6">
              <option value="7">
              <option value="8">
              <option value="9">
              <option value="10">
              <option value="11">
            </datalist>
            <h3 class="horizontalSliderTicks">| | | | | | | | | | |</h3>
            <h3>OSC1</h3>
          </div>
          <div class="slider1">
            <input type="range" min="0" max="11" step="0.01" list="tickmarks" class="slider1">
            <h3 class="horizontalSliderTicks">| | | | | | | | | | |</h3>
            <h3>FMod</h3>
          </div>
          <div class="slider1">
            <input type="range" min="0" max="11" step="0.01" list="tickmarks" class="slider1">
            <h3 class="horizontalSliderTicks">| | | | | | | | | | |</h3>
            <h3>OSC2</h3>
          </div>
        </div>
      </div>
      <div class="thirdBar">

      </div>
      <div class="fourthBar">

      </div>

    </div>
    <!-- <div class="synthBox2">
      <div class="synthBox1">
        <div class="outerShell1">
          <div class="topBar">
            <p>Synth Patch1</p>

            <div class="topBarRight">

              <div class="topBarButton">
                <button type="button" class="btn">X</button>
              </div>

              <div class="outputSelector">
                <select id="patchOutput">
                  <option value="value1" selected>Patch2</option>
                  <option value="value2">Patch3</option>
                  <option value="value3">Patch4</option>
                </select>
              </div>
             </div>
          </div>


        <div class="secondBar">
          <div class="slider1">
            <input type="range" min="0" max="11" step="0.01" list="tickmarks" class="slider1">
              <h3>OSC1</h3>
            </div>
            <div class="slider1">
              <input type="range" min="0" max="11" step="0.01" list="tickmarks" class="slider1">
              <h3>FMod</h3>
            </div>
            <div class="slider1">
              <input type="range" min="0" max="11" step="0.01" list="tickmarks" class="slider1">
              <h3>OSC2</h3>
            </div>
          </div>
        </div>
        <div class="thirdBar">

        </div>
        <div class="fourthBar">

        </div>

      </div>

    </div> -->
    <div class="synthBox3">

    </div>
  </div>

  </body>
</html>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
