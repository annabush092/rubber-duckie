import React from 'react';

export default class WhiteKey extends React.Component {
  // props = {
  //   windowHeight: num,
  //   windowWidth: num
  // }

  keyStyle() {
    return {
      border: "thin solid black",
      width: `${this.props.windowWidth / 32}px`,
      height: `${this.props.windowHeight / 10}px`
    }
  }

  render() {
    return(
      <div style={this.keyStyle()}>white</div>
    )
  }
}
