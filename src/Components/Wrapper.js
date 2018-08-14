import React, { Component } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'

class Wrapper extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Sidebar />
        <Body />
      </div>
    )
  }
}

export default Wrapper
