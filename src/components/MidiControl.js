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
    // this.setState({ note: e.target.event })
    // Mask off the lower nibble (MIDI channel, which we don't care about)

    // console.log(e)

    switch (e.data[0] & 0xf0) {
      case 0x90:
        if (e.data[2] !== 0) {
          // if velocity != 0, this is a note-on message
          return this.noteOn(e.data[1], e.data[2])
        }
      // if velocity == 0, fall thru: it's a note-off.  MIDI's weird, y'all.
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
    // activeNotes.push(noteNumber)
    // this.props.synth.frequency.cancelScheduledValues(0)
    // this.props.synth.frequency.this.setTargetAtTime(this.frequencyFromNoteNumber(noteNumber))
    // this.props.synth.envelope.gain.this.cancelScheduledValues(0)
    // this.props.synth.envelope.this.gain.setTargetAtTime(1.0, 0, attack)
  }

  noteOff = noteNumber => {
    this.props.synth.triggerRelease(this.frequencyFromNoteNumber(noteNumber))
    // var position = activeNotes.indexOf(noteNumber)
    // if (position !== -1) {
    //   activeNotes.splice(position, 1)
    // }
    // if (activeNotes.length === 0) {
    //   // shut off the envelope
    //   this.props.synth.envelope.gain.cancelScheduledValues(0)
    //   this.props.synth.envelope.gain.this.setTargetAtTime(0.0, 0, release)
    // } else {
    //   this.props.synth.frequency.this.cancelScheduledValues(0)
    //   this.props.synth.frequency.this.setTargetAtTime(this.frequencyFromNoteNumber(activeNotes[activeNotes.length - 1]))
    // }
  }

  render() {
    return null
  }
}

export default MidiControl
