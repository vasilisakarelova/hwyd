import React, { Component } from 'react'
import Random from './../helpers/random'

const messages = [
  '¿No hablas Español? Then you can’t have Spanish siesta. Come around after 8pm',
  'Come on now, you are not 80 to go to bed this early!',
  'Horray! Another new day. Let’s hope it won’t rain'
]

export default class extends Component {
  constructor(props) {
    super(props)   

    this.state = {
      message: messages[Random(0, (messages.length - 1))]
    }
  }

  render() {
    return (
      <div className="alert">
        <button className="alert__hide" title="Hide Message"></button>
        <p className="alert__msg">{this.state.message}</p>
      </div>
    )
  }
}