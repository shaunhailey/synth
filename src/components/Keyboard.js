import React, { Component } from 'react'
import '../styles/keys.css'
import Tone from 'tone'

let synth = new Tone.Synth().toMaster()

class Keyboard extends Component {
  constructor(props) {
    super(props)
    this.state = { note: '' }
    this.handleNoteChange = this.handleNoteChange.bind(this)
  }
  handleNoteChange(e) {
    this.setState({ note: e.target.textContent })
  }

  handleMouseDown(e) {
    'mousedown', function(e) {
      //play the note on mouse down
      synth.triggerAttack(e.target.textContent)
    }
  }
  handleMouseUp(e) {
    'mouseup', function(e) {
      //play the note on mouse down
      synth.triggerRelease(e.target.textContent)
    }
  }

  render() {
    return (
      <div className="keys">
        <button type="button" className="btnWhiteKeys" value="27.5000">
          A0
        </button>
        <button type="button" className="btnBlackKeys" value="29.1352">
          A#0
        </button>
        <button type="button" className="btnWhiteKeys" value="30.8677">
          B0
        </button>
        <button type="button" className="btnWhiteKeys" value="32.7032">
          C1
        </button>
        <button type="button" className="btnBlackKeys" value="34.6478">
          C#1
        </button>
        <button type="button" className="btnWhiteKeys" value="36.7081">
          D1
        </button>
        <button type="button" className="btnBlackKeys" value="38.8909">
          D#1
        </button>
        <button type="button" className="btnWhiteKeys" value="41.2034">
          E1
        </button>
        <button type="button" className="btnWhiteKeys" value="43.6535">
          F1
        </button>
        <button type="button" className="btnBlackKeys" value="46.2493">
          F#1
        </button>
        <button type="button" className="btnWhiteKeys" value="48.9994">
          G1
        </button>
        <button type="button" className="btnBlackKeys" value="51.9131">
          G#1
        </button>
        <button type="button" className="btnWhiteKeys" value="55.0000">
          A1
        </button>
        <button type="button" className="btnBlackKeys" value="58.2705">
          A#1
        </button>
        <button type="button" className="btnWhiteKeys" value="61.7354">
          B1
        </button>
        <button type="button" className="btnWhiteKeys" value="65.4064">
          C2
        </button>
        <button type="button" className="btnBlackKeys" value="69.2957">
          C#2
        </button>
        <button type="button" className="btnWhiteKeys" value="73.4162">
          D2
        </button>
        <button type="button" className="btnBlackKeys" value="77.7817">
          D#2
        </button>
        <button type="button" className="btnWhiteKeys" value="82.4069">
          E2
        </button>
        <button type="button" className="btnWhiteKeys" value="87.3071">
          F2
        </button>
        <button type="button" className="btnBlackKeys" value="92.4986">
          F#2
        </button>
        <button type="button" className="btnWhiteKeys" value="97.9989">
          G2
        </button>
        <button type="button" className="btnBlackKeys" value="103.826">
          G#2
        </button>
        <button type="button" className="btnWhiteKeys" value="110.000">
          A2
        </button>
        <button type="button" className="btnBlackKeys" value="116.541">
          A#2
        </button>
        <button type="button" className="btnWhiteKeys" value="123.471">
          B2
        </button>
        <button type="button" className="btnWhiteKeys" value="130.813">
          C3
        </button>
        <button type="button" className="btnBlackKeys" value="138.591">
          C#3
        </button>
        <button type="button" className="btnWhiteKeys" value="146.832">
          D3
        </button>
        <button type="button" className="btnBlackKeys" value="155.563">
          D#3
        </button>
        <button type="button" className="btnWhiteKeys" value="164.814">
          E3
        </button>
        <button type="button" className="btnWhiteKeys" value="174.614">
          F3
        </button>
        <button type="button" className="btnBlackKeys" value="184.997">
          F#3
        </button>
        <button type="button" className="btnWhiteKeys" value="195.998">
          G3
        </button>
        <button type="button" className="btnBlackKeys" value="207.652">
          G#3
        </button>
        <button type="button" className="btnWhiteKeys" value="220.000">
          A3
        </button>
        <button type="button" className="btnBlackKeys" value="233.082">
          A#3
        </button>
        <button type="button" className="btnWhiteKeys" value="246.942">
          B3
        </button>
        <button type="button" className="btnWhiteKeys" value="261.626">
          C4
        </button>
        <button type="button" className="btnBlackKeys" value="277.183">
          C#4
        </button>
        <button type="button" className="btnWhiteKeys" value="293.665">
          D4
        </button>
        <button type="button" className="btnBlackKeys" value="311.127">
          D#4
        </button>
        <button type="button" className="btnWhiteKeys" value="329.628">
          E4
        </button>
        <button type="button" className="btnWhiteKeys" value="349.228">
          F4
        </button>
        <button type="button" className="btnBlackKeys" value="369.994">
          F#4
        </button>
        <button type="button" className="btnWhiteKeys" value="391.995">
          G4
        </button>
        <button type="button" className="btnBlackKeys" value="415.305">
          G#4
        </button>
        <button type="button" className="btnWhiteKeys" value="440.000">
          A4
        </button>
        <button type="button" className="btnBlackKeys" value="466.164">
          A#4
        </button>
        <button type="button" className="btnWhiteKeys" value="493.883">
          B4
        </button>
        <button type="button" className="btnWhiteKeys" value="523.251">
          C5
        </button>
        <button type="button" className="btnBlackKeys" value="554.365">
          C#5
        </button>
        <button type="button" className="btnWhiteKeys" value="587.330">
          D5
        </button>
        <button type="button" className="btnBlackKeys" value="622.254">
          D#5
        </button>
        <button type="button" className="btnWhiteKeys" value="659.255">
          E5
        </button>
        <button type="button" className="btnWhiteKeys" value="698.456">
          F5
        </button>
        <button type="button" className="btnBlackKeys" value="739.989">
          F#5
        </button>
        <button type="button" className="btnWhiteKeys" value="783.991">
          G5
        </button>
        <button type="button" className="btnBlackKeys" value="830.609">
          G#5
        </button>
        <button type="button" className="btnWhiteKeys" value="880.000">
          A5
        </button>
        <button type="button" className="btnBlackKeys" value="932.328">
          A#5
        </button>
        <button type="button" className="btnWhiteKeys" value="987.767">
          B5
        </button>
        <button type="button" className="btnWhiteKeys" value="1046.50">
          C6
        </button>
        <button type="button" className="btnBlackKeys" value="1108.73">
          C#6
        </button>
        <button type="button" className="btnWhiteKeys" value="1174.66">
          D6
        </button>
        <button type="button" className="btnBlackKeys" value="1244.51">
          D#6
        </button>
        <button type="button" className="btnWhiteKeys" value="1318.51">
          E6
        </button>
        <button type="button" className="btnWhiteKeys" value="1396.91">
          F6
        </button>
        <button type="button" className="btnBlackKeys" value="1479.98">
          F#6
        </button>
        <button type="button" className="btnWhiteKeys" value="1567.98">
          G6
        </button>
        <button type="button" className="btnBlackKeys" value="1661.22">
          G#6
        </button>
        <button type="button" className="btnWhiteKeys" value="1760.00">
          A6
        </button>
        <button type="button" className="btnBlackKeys" value="1864.66">
          A#6
        </button>
        <button type="button" className="btnWhiteKeys" value="1975.53">
          B6
        </button>
        <button type="button" className="btnWhiteKeys" value="2093.00">
          C7
        </button>
        <button type="button" className="btnBlackKeys" value="2217.46">
          C#7
        </button>
        <button type="button" className="btnWhiteKeys" value="2349.32">
          D7
        </button>
        <button type="button" className="btnBlackKeys" value="2489.02">
          D#7
        </button>
        <button type="button" className="btnWhiteKeys" value="2637.02">
          E7
        </button>
        <button type="button" className="btnWhiteKeys" value="2793.83">
          F7
        </button>
        <button type="button" className="btnBlackKeys" value="2959.96">
          F#7
        </button>
        <button type="button" className="btnWhiteKeys" value="3135.96">
          G7
        </button>
        <button type="button" className="btnBlackKeys" value="3322.44">
          G#7
        </button>
        <button type="button" className="btnWhiteKeys" value="3520.00">
          A7
        </button>
        <button type="button" className="btnBlackKeys" value="3729.31">
          A#7
        </button>
        <button type="button" className="btnWhiteKeys" value="3951.07">
          B7
        </button>
        <button type="button" className="btnWhiteKeys" value="4186.01">
          C8
        </button>
      </div>
    )
  }
}

export default Keyboard
