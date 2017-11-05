import React from 'react';
import {whiteNotes} from '../resources/notes'
import WhiteKey from './WhiteKey'

export default class WhiteKeys extends React.Component {
  // props = {
  //   note: null/noteNumber
  // }

  fourOctaves() {
    const fourOctaves = []
    for(let i=0; i<3; i++) {
      for(let j=0; j<7; j++) {
        const noteArr = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
        let myKey = `${noteArr[j]}${i+1}`
        fourOctaves.push(<WhiteKey key={myKey} id={myKey} note={noteArr[j]}/>)
      }
    }
    fourOctaves.push(<WhiteKey key='c4' id='c4' note='c'/>)
    return fourOctaves
  }

  styleWhiteKeys() {
    return {overflow: 'hidden'}
  }

  findNote() {
    if(whiteNotes[this.props.note]) {
      console.log("made it")
      //light up that note
    }
  }

  render() {
    return (
      <div id="white-keys" style={this.styleWhiteKeys()}>
        {this.fourOctaves()}
      </div>
    )
  }
}
