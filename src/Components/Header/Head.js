import React, { Component } from 'react'
import './Header.css'
import logo from './logo.png'

class Head extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__burgermenu">
          <span className="burger" />
          <span className="burger" />
          <span className="burger" />
        </div>
        <div className="logospace">
          <img src={logo} alt="" />
        </div>
        <div className="header__search">
          <form action="">
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className="header__settings">
          <div className="settings">
            <span>settings</span>
          </div>
          <div className="profile">
            <span>Profile Pic</span>
          </div>
        </div>
      </div>
    )
  }
}

// Testing git

export default Head
