import React, { Component } from 'react'
import Tone from 'tone'

class Midi extends Component {
  constructor(props) {
    super(props)

    if (navigator.requestMIDIAccess) navigator.requestMIDIAccess().then(onMIDIInit, onMIDIReject)
    else alert('No MIDI support present in your browser.')

    function onMIDIInit(midi) {
      midiAccess = midi

      var haveAtLeastOneDevice = false
      var inputs = midiAccess.inputs.values()
      for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        input.value.onmidimessage = MIDIMessageEventHandler
        haveAtLeastOneDevice = true
      }
      if (!haveAtLeastOneDevice) alert('No MIDI input devices present. Attach a MIDI input device, or use your mouse.')
    }

    function onMIDIReject(err) {
      alert('The MIDI system failed to start.')
    }

    function MIDIMessageEventHandler(event) {
      // Mask off the lower nibble (MIDI channel, which we don't care about)
      switch (event.data[0] & 0xf0) {
        case 0x90:
          if (event.data[2] != 0) {
            // if velocity != 0, this is a note-on message
            noteOn(event.data[1])
            return
          }
        // if velocity == 0, fall thru: it's a note-off.  MIDI's weird, y'all.
        case 0x80:
          noteOff(event.data[1])
          return
      }
    }

    function frequencyFromNoteNumber(note) {
      return 440 * Math.pow(2, (note - 69) / 12)
    }

    function noteOn(noteNumber) {
      activeNotes.push(noteNumber)
      oscillator.frequency.cancelScheduledValues(0)
      oscillator.frequency.setTargetAtTime(frequencyFromNoteNumber(noteNumber), 0, portamento)
      envelope.gain.cancelScheduledValues(0)
      envelope.gain.setTargetAtTime(1.0, 0, attack)
    }

    function noteOff(noteNumber) {
      var position = activeNotes.indexOf(noteNumber)
      if (position != -1) {
        activeNotes.splice(position, 1)
      }
      if (activeNotes.length == 0) {
        // shut off the envelope
        envelope.gain.cancelScheduledValues(0)
        envelope.gain.setTargetAtTime(0.0, 0, release)
      } else {
        oscillator.frequency.cancelScheduledValues(0)
        oscillator.frequency.setTargetAtTime(
          frequencyFromNoteNumber(activeNotes[activeNotes.length - 1]),
          0,
          portamento
        )
      }
    }
  }
}
