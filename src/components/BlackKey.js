//example code for blog...

import React from 'react';

export default class SoundPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.myAudio = new Audio('audioFile.mp3')
  }

  playNote() {
    this.myAudio.play()
  }

  render() {
    return(
      <div>
        {this.playNote()}
      </div>
    )
  }
}
