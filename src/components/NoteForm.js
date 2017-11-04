import React from 'react';

export default class NoteForm extends React.Component {

  constructor() {
    super()
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

  render() {
    return(
      <form style={this.styleForm()}>
        {this.warnUser()}
        <textarea
          autoFocus
          style={this.styleTextarea()}
          onBlur={this.handleBlur.bind(this)}
          onFocus={this.handleFocus.bind(this)}
        />
      </form>
    )
  }
}
