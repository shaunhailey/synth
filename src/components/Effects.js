import React, { Component } from 'react'
import Tone from 'tone'


class Effects extends Component {

  var OSC1 = Tone.LFO (keyboard.note , 0 , 1)
  var FMod = Tone.FMOscillator ( keyboard.note , type , modulationType )
  var OSC2 = Tone.PWMOscillator ( keyboard.note , modulationFrequency )
  var Gain1 = Tone.Volume ( [ volume = 0 ] )

  function effect (note) {
    [note: keyboard.note]
    [Gain1: Noisebox.id.Gain1]
    [OSC1: Noisebox.id.OSC1]
    [Fmod: Noisebox.id.FMod1]
    [OSC2: Noisebox.id.OSC2]

  }
  render (
    return (

    )
  )
}
