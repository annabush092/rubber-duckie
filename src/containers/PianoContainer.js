import React from 'react';
import WhiteKeys from '../components/WhiteKeys'
import NoteForm from '../components/NoteForm'

export default class PianoContainer extends React.Component {
  styleContainer() {
    return {
      width: '90%',
      padding: '50px'
    }
  }

  render() {
    return (
      <div style={this.styleContainer()} id="piano-container">
        <WhiteKeys/>
        <NoteForm/>
      </div>
    )
  }
}
