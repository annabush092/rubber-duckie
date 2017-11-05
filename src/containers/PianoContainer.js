import React from 'react';
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
    this.setState({notePlaying: note})
  }

  render() {
    return (
      <div style={this.styleContainer()} id="piano-container">
        <WhiteKeys note={this.state.notePlaying}/>
        <PlayForm onNoteChange={this.playNote.bind(this)}/>
      </div>
    )
  }
}
