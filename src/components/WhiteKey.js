import React from 'react';

export default class WhiteKey extends React.Component {
  // props = {
  //   note: 'a', 'b', etc
  //   id: 'c1'...'c5' 'note-octave'
  // }

  keyStyle() {
    return {
      border: "1px solid black",
      width: '3%',
      cssFloat: 'left',
      paddingTop: '15%'
    }
  }


  render() {
    return(
      <div style={this.keyStyle()} id={this.props.id}>{this.props.note}</div>
    )
  }
}
