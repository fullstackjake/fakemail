import React, { Component } from 'react'
import './Header.css'
// import logo from './logo.png'
import glass from './glass.svg'
import searchDrop from './drop.svg'

class Head extends Component {
  render() {
    return (
      <div className="header">
        <div className="leftHead">
          <div className="header__burgermenu header__burgermenu--active header__burgermenu--active:hover ">
            <span className="buregerWrapper">
              <span className="burger" />
              <span className="burger" />
              <span className="burger" />
            </span>
          </div>
          <div className="logospace">
            {/* <img className="logospace__logo" src={logo} alt="" /> */}
          </div>
        </div>
        <div className="centerHead">
          <div className="header__search">
            <img className="glass" src={glass} alt="" />
            <form action="" className="header__form">
              <input
                className="header__search--searchInput"
                type="text"
                placeholder="Search"
              />
            </form>
            <img className="searchDrop" src={searchDrop} alt="" />
          </div>
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
