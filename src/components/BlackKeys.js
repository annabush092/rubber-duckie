import React from 'react';
import {blackNotes} from '../resources/notes'
import BlackKey from './BlackKey'

export default class BlackKeys extends React.Component {
  // props = {
  //   notes: [noteNumbers]
  // }

  styleBlackKeys() {
    return {
      display: 'flex',
      position: 'absolute',
      top: '50px',
      left: '2.5%',
      width: '90%',
      zIndex: '1'}
  }

  findKeys() {
    return this.props.notes.reduce(function(acc, note){
      if(blackNotes[note] !== undefined) {
        acc.push(blackNotes[note])
      }
      return acc
    }, [])
  } //returns array of note names ['db4', 'bb3', etc]

  threeOctaves() {
    const threeOctaves = []
    const noteArr = ['db', 'eb', 'gb', 'ab', 'bb']
    for(let i=0; i<15; i++) {
      let myKey = `${noteArr[i%5]}${Math.floor(i/5) + 1}`
      let myPlaying = false
      if(this.findKeys().includes(myKey)) {
        myPlaying = true
      }
      threeOctaves.push(<BlackKey key={myKey} id={myKey} note={noteArr[i%5]} playing={myPlaying}/>)
    }
    return threeOctaves
  }

  render() {
    return (
      <div id="black-keys" style={this.styleBlackKeys()}>
        {this.threeOctaves()}
      </div>
    )
  }
}
