import React, { Component } from 'react';
import PianoContainer from './containers/PianoContainer'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    }
  }

  handleResize(ev) {
    console.log(ev)
    // this.setState({
    //   windowHeight: ,
    //   windowWidth:
    // })
  }

  render(){
    return (
      <div onResize={this.handleResize.bind(this)}>
        <PianoContainer/>
      </div>
    );
  }
}

export default App;

// Syntax for css:
// <div className="App"/>
