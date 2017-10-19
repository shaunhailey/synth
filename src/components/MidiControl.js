import React, { Component } from 'react'
import Tone from 'tone'

var midiAccess = null
var activeNotes = []
var attack = 0.5
var release = 0.5

class MidiControl extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (navigator.requestMIDIAccess) navigator.requestMIDIAccess().then(this.onMIDIInit, this.onMIDIReject)
    else console.log('No MIDI support present in your browser.')
  }

  onMIDIInit = midiAccess => {
    console.log(midiAccess)
    var haveAtLeastOneDevice = false
    var inputs = midiAccess.inputs.values()
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = this.onMIDIMessage
      haveAtLeastOneDevice = true
    }
    if (!haveAtLeastOneDevice) console.log("No MIDI input devices present.  You're gonna have a bad time.")
  }

  onMIDIMessage = e => {
    switch (e.data[0] & 0xf0) {
      case 0x90:
        if (e.data[2] !== 0) {
          return this.noteOn(e.data[1], e.data[2])
        }
      case 0x80:
        return this.noteOff(e.data[1])
    }
  }

  onMIDIReject = () => {
    console.log('The MIDI system failed to start.')
  }

  frequencyFromNoteNumber = note => {
    return 440 * Math.pow(2, (note - 69) / 12)
  }

  noteOn = noteNumber => {
    this.props.synth.triggerAttack(this.frequencyFromNoteNumber(noteNumber))
  }

  noteOff = noteNumber => {
    this.props.synth.triggerRelease(this.frequencyFromNoteNumber(noteNumber))
  }

  render() {
    return null
  }
}

export default MidiControl
