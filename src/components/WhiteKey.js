import React from 'react';

export default class WhiteKey extends React.Component {

  constructor(props) {
    super(props)
    this.audio = new Audio(require('../resources/' + props.note.toUpperCase() + '.mp3'))
  }
  // props = {
  //   note: 'a', 'b', etc
  //   id: 'c1'...'c5' 'note-octave',
  //   playing: true/false
  // }

  keyStyle() {
    let colorMatcher = {c: 'red', d: 'orange', e: 'yellow', f: 'green', g: 'blue', a: 'purple', b: 'pink'}
    let myColor = 'white'
    if(this.props.playing) {
      myColor = colorMatcher[this.props.note]
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
    if(this.audio.paused) {
      this.audio.currentTime = 2
      this.audio.play()

      let myNote = this.props.id.toUpperCase()
      console.log("playing ", myNote)
    }
  }
  stopNote() {
    if(!this.audio.paused) {
      this.audio.pause()
      console.log('stopping note')
    }
  }

  render() {
    return(
      <div style={this.keyStyle()} id={this.props.id}>
        {(this.props.playing) ? this.playNote() : this.stopNote()}
      </div>
    )
  }
}
