import React from 'react';
import WhiteKey from './WhiteKey'

export default class WhiteKeys extends React.Component {
  render() {
    const fourOctaves = []
    for(let i=0; i<32; i++) {
      fourOctaves.push(<WhiteKey/>)
    }
    return (
      <div>
        {fourOctaves}
      </div>
    )
  }
}
