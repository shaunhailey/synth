//component heavily inspired by https://github.com/MelisaIm/melodyjs

import React, { Component } from 'react'

export default class NoteGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      instrument: {
        grid: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        info: { title: '', description: '' }
      },
      songId: null
    }
  }

  synth(note) {
    let synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease(note, '16n')
  }

  onSelect = ({ note, column, row }) => {
    this.synth(note)
    if (this.state.instrument.grid[row][column] !== 0) {
      this.setState(prevState => {
        let changedRow = prevState.instrument.grid[row].slice()
        changedRow.splice(column, 1, 0)
        let newState = prevState.instrument.grid.slice()
        newState.splice(row, 1, changedRow)
        this.props.updateSong(newState)
        return { grid: newState }
      })
    } else {
      this.setState(prevState => {
        let changedRow = prevState.instrument.grid[row].slice()
        changedRow.splice(column, 1, note)
        let newState = prevState.instrument.grid.slice()
        newState.splice(row, 1, changedRow)
        this.props.updateSong(newState)

        return { grid: newState }
      })
    }
  }

  componentDidMount() {
    const instrument = this.state.instrument
    this.setState({
      instrument
    })
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.instrument !== {}) {
      let instrument = nextProps.instrument
      this.setState({
        instrument
      })
    }
  }

  render() {
    if (!this.state.instrument) {
      const chords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      const notesClassNames = classNames(' noteGrid')
      return (
        <div className={notesClassNames}>
          {chords.map(chord => {
            return (
              <div className="notes-column" key={chord}>
                {this.props.notes.map((note, row) => {
                  return (
                    <NoteComponent
                      key={(chord, row)}
                      name={note}
                      onSelect={this.onSelect}
                      id={`${chord},${row}`}
                      selected={false}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      )
    } else {
      const chords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      const notesClassNames = classNames(' noteGrid')
      return (
        <div className={notesClassNames}>
          {chords.map(chord => {
            const chordClassNames = classNames('notes-column', {
              playing: this.props.playingChord === chord
            })
            return (
              <div className={chordClassNames} key={chord}>
                {this.props.notes.map((note, row) => {
                  return (
                    <NoteComponent
                      key={(chord, row)}
                      name={note}
                      onSelect={this.onSelect}
                      id={`${chord},${row}`}
                      selected={this.state.instrument.grid ? this.state.instrument.grid[row][chord] : false}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      )
    }
  }
}
