import React, { Component } from 'react'
import Keyboard from './Keyboard.js'

let synth = new Tone.Synth().toMaster()


export default class ToneGenerator extends Component {
  constructor(props)
  super (props)
  synth(note) {
    synth.triggerAttackRelease(Keyboard.state.note, '16n')
  }
}

document.querySelectorAll('button').forEach(function(button){
	button.addEventListener('mousedown', function(e){
		//play the note on mouse down
		synth.triggerAttack(e.target.textContent)
	})
	button.addEventListener('mouseup', function(e){
		//release on mouseup
		synth.triggerRelease()
	})
})
