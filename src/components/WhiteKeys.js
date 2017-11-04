import React from 'react';
import WhiteKey from './WhiteKey'

export default class WhiteKeys extends React.Component {
  fourOctaves() {
    const fourOctaves = []
    for(let i=0; i<4; i++) {
      for(let j=0; j<7; j++) {
        const noteArr = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
        let myKey = `${noteArr[j]}${i+1}`
        fourOctaves.push(<WhiteKey key={myKey} id={myKey} note={noteArr[j]}/>)
      }
    }
    fourOctaves.push(<WhiteKey key='c5' id='c5' note='c'/>)
    return fourOctaves
  }

  render() {

    return (
      <div>
        {this.fourOctaves()}
      </div>
    )
  }
}
