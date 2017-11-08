import React from 'react';

export default class BlackKey extends React.Component {

  constructor(props) {
    super(props)
    this.audio = new Audio(require('../resources/' + props.note[0].toUpperCase() + props.note[1] + '.mp3'))
    this.audio.currentTime = 2
  }
  // props = {
  //   note: 'ab', 'bb', etc
  //   id: 'db1'...'eb3' 'note-octave',
  //   playing: true/false
  // }

  keyStyle() {
    let myColor = 'black'
    if(this.props.playing) {
      myColor = 'gray'
    }
    const marginOpts = {
      db: '5.7%',
      eb: '2%',
      gb: '5.8%',
      ab: '2%',
      bb: '2%'
    }
    return {
      width: '2.8%',
      paddingTop: '13%',
      marginLeft: marginOpts[this.props.note],
      background: myColor
    }
  }

  playNote() {
    if(this.audio.paused) {
      this.audio.play()

      console.log("playing ", this.props.id)
    }
  }
  stopNote() {
    if(!this.audio.paused) {
      this.audio.pause()
      this.audio.currentTime = 2
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
