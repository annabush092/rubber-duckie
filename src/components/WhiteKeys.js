import React from 'react';
import {whiteNotes} from '../resources/notes'
import WhiteKey from './WhiteKey'

export default class WhiteKeys extends React.Component {
  // props = {
  //   notes: [noteNumbers]
  // }

  styleWhiteKeys() {
    return {
      display: 'flex',
      position: 'absolute',
      top: '50px',
      left: '5%',
      width: '90%',
      zIndex: '-1'}
  }

  findKeys() {
    return this.props.notes.reduce(function(acc, note){
      if(whiteNotes[note] !== undefined) {
        acc.push(whiteNotes[note])
      }
      return acc
    }, [])
  } //returns array of note names ['c4', 'b3', etc]

  threeOctaves() {
    const threeOctaves = []
    const noteArr = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
    for(let i=0; i<22; i++) {
      let myKey = `${noteArr[i%7]}${Math.floor(i/7) + 1}`
      let myPlaying = false
      if(this.findKeys().includes(myKey)) {
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
