import React, { Component } from 'react'

class ClickityClick extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasBeenClicked: false
    }
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }

  handleClick = (event) => {
    this.setState({hasBeenClicked: true}, () => console.log(this.state.hasBeenClicked))

  }

}

export default ClickityClick
