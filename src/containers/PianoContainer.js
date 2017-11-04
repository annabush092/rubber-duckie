import React from 'react';
import pianoTemplate from "../img/piano-template.png";
import {containerStyle, picStyle} from "../views/PianoContainerViews"
import WhiteKeys from '../components/WhiteKeys'

export default class PianoContainer extends React.Component {
  render() {
    return (
      <div style={containerStyle}>
        <img src={pianoTemplate} alt="piano template" style={picStyle}/>
        <img src={pianoTemplate} alt="piano template" style={picStyle}/>
        <WhiteKeys/>
      </div>
    )
  }
}
