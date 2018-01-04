import React from 'react';
import WhiteKeys from '../components/WhiteKeys';
import BlackKeys from '../components/BlackKeys'

export default class PianoContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      notesPlaying: []
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', (ev) => {
      ev.preventDefault()
      let note = ev.which
      if(!(this.state.notesPlaying.includes(note))) {
        this.playNote(note)
      }
    })
    window.addEventListener('keyup', (ev) => {
      ev.preventDefault()
      let note = ev.which
      if(this.state.notesPlaying.includes(note)) {
        this.stopNote(note)
      }
    })
  }

  styleContainer() {
    return {
      width: '90%'
    }
  }

  findNote(note) {
    return this.state.notesPlaying.findIndex(n=>(n===note))
    //returns index of note or -1 if not found
  }
  playNote(note) {
    if(this.findNote(note) === -1){
      this.setState({notesPlaying: [...this.state.notesPlaying, note]})
    }
  }
  stopNote(note) {
    let noteIndex = this.findNote(note)
    let copy = [...this.state.notesPlaying]
    this.setState({
      notesPlaying: (copy.slice(0, noteIndex)).concat(copy.slice(noteIndex+1, copy.length))
    })
  }

  render() {
    return (
      <div style={this.styleContainer()} id="piano-container">
        <WhiteKeys notes={this.state.notesPlaying}/>
        <BlackKeys notes={this.state.notesPlaying}/>
      </div>
    )
  }
}
