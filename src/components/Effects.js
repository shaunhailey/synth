import React, { Component } from 'react'
import Tone from 'tone'


let Effects = {
    Gain1:  new Tone.Volume ( `Noisebox.id.Gain1` )
    OSC1:   new Tone.LFO (`Noisebox.id.OSC1` , 0.1 , 10)
    Fmod:   new Tone.FMOscillator ( `Noisebox.id.Fmod1` , sine , square )
    OSC2:   new Tone.PWMOscillator ( note , `Noisebox.id.OSC2`
  }
  render (
    return (

    )
  )
}
