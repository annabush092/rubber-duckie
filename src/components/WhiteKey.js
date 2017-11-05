import React from 'react';

export default class WhiteKey extends React.Component {
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

  render() {
    return(
      <div style={this.keyStyle()} id={this.props.id}/>
    )
  }
}
