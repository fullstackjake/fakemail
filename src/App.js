import React, { Component } from 'react'
import Head from './Components/Header/Head.js'
import Wrapper from './Components/Wrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Wrapper />
      </div>
    )
  }
}

export default App
