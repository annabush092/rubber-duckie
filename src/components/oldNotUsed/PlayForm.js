import React from 'react';

export default class PlayForm extends React.Component {

  constructor(props) {
    super(props)
    // props = {
    //   noteBegin(keyCode): playNote() inside PianoContainer
    //   noteEnd(keyCode): stopNote() inside PianoContainer
    //   keysDown: []
    // }
    this.state = {
      focused: true
    }
  }

  styleForm() {
    return {
      padding: '20px'
    }
  }
  styleTextarea() {
    return {
      width: '90%',
      height: '400px',
      border: '3px inset',
      outline: 'none'
    }
  }

  handleBlur() {
    this.setState({focused: false})
  }
  handleFocus() {
    this.setState({focused: true})
  }
  warnUser() {
    const styleLabel = {color: 'red'}
    if(this.state.focused !== true) {
      return (
        <label style={styleLabel}>Click inside the box below to continue playing!</label>
      )
    } else {
      return null
    }
  }

  handleKeyDown(ev) {
    ev.preventDefault()
    let note = ev.which
    if(!(this.props.keysDown.includes(note))) {
      this.props.noteBegin(note)
    }
  }
  handleKeyUp(ev) {
    ev.preventDefault()
    let note = ev.which
    this.props.noteEnd(note)
  }

  render() {
    return(
      <form style={this.styleForm()}>
        {this.warnUser()}
        <textarea
          autoFocus
          onBlur={this.handleBlur.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          style={this.styleTextarea()}
          onKeyDown={this.handleKeyDown.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
        />
      </form>
    )
  }
}
