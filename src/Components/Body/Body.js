import React, { Component } from 'react'
import Emails from './Emails'
import './Body.css'

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="selectAllWrapper">test</div>
        <div className="tabs">Tabs</div>
        <Emails />
      </div>
    )
  }
}

export default Body
