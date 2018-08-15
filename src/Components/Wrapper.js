import React, { Component } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import './Wrapper.css'

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Body />
      </div>
    )
  }
}

export default Wrapper
