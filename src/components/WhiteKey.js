import React from 'react';
import AudioC from '../resources/C.mp3'

export default class WhiteKey extends React.Component {

  constructor(props) {
    super(props)
    this.cAudio = new Audio(AudioC)
  }
  // props = {
  //   note: 'a', 'b', etc
  //   id: 'c1'...'c5' 'note-octave',
  //   playing: true/false
  // }

  keyStyle() {
    let myColor = 'white'
    if(this.props.playing) {
      myColor = 'blue'
    }
    return {
      border: "1px solid black",
      width: '4%',
      cssFloat: 'left',
      paddingTop: '20%',
      background: myColor
    }
  }

  playNote() {
    this.cAudio.currentTime = 2;
    this.cAudio.play()
  }
  stopNote() {
    this.cAudio.pause()
    this.cAudio.currentTime = 2;
  }

  render() {
    return(
      <div style={this.keyStyle()} id={this.props.id}>
        {(this.props.playing) ? this.playNote() : this.stopNote()}
      </div>
    )
  }
}
