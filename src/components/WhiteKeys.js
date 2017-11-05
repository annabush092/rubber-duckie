import React from 'react';
import {whiteNotes} from '../resources/notes'
import WhiteKey from './WhiteKey'

export default class WhiteKeys extends React.Component {
  // props = {
  //   note: null/noteNumber
  // }

  styleWhiteKeys() {
    return {overflow: 'hidden'}
  }

  findNote() {
    if(whiteNotes[this.props.note]) {
      return whiteNotes[this.props.note]
    }else {
      return false
    }
  }

  threeOctaves() {
    const threeOctaves = []
    const noteArr = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
    for(let i=0; i<22; i++) {
      let myKey = `${noteArr[i%7]}${Math.floor(i/7) + 1}`
      let myPlaying = false
      if(this.findNote() === myKey) {
        myPlaying = true
      }
      threeOctaves.push(<WhiteKey key={myKey} id={myKey} note={noteArr[i%7]} playing={myPlaying}/>)
    }
    return threeOctaves
  }



  render() {
    return (
      <div id="white-keys" style={this.styleWhiteKeys()}>
        {this.threeOctaves()}
      </div>
    )
  }
}
