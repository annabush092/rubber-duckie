import React from 'react';
import {notes} from '../resources/notes'
import WhiteKeys from '../components/WhiteKeys'
import PlayForm from '../components/PlayForm'

export default class PianoContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      notePlaying: null
    }
  }

  styleContainer() {
    return {
      width: '90%',
      padding: '50px'
    }
  }

  playNote(note) {
    this.setState({notePlaying: note}, ()=>{console.log("state is: ", this.state.notePlaying)})
    //interpret note, send to Keys as prop
  }

  render() {
    return (
      <div style={this.styleContainer()} id="piano-container">
        <WhiteKeys />
        <PlayForm onNoteChange={this.playNote.bind(this)}/>
      </div>
    )
  }
}
