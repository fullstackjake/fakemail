import React, { Component } from 'react'
import emails from './emails.json'
import './Emails.css'
import Email from './Email'

const emailData = emails.messages

class Emails extends Component {
  constructor(props) {
    super(props)
    this.state = { readingEmail: true }
    this.closeEmail = this.closeEmail.bind(this)
  }

  closeEmail() {
    console.log('Clicked Close')
    const readingEmail = this.state.readingEmail
    if (readingEmail) {
      this.setState({ readingEmail: false })
    }

    // console.log('this');
  }

  render() {
    const readingEmail = this.state.readingEmail
    let emailView

    if (readingEmail === false) {
      emailView = emailData.map((email, index) => (
        <Email key={index} email={email} />
      ))
    } else {
      emailView = (
        <h1>
          I am reading and email{' '}
          <button onClick={this.closeEmail}>Close</button>
        </h1>
      )
    }
    return (
      <div className="Emails">
        <div>{emailView}</div>
      </div>
    )
  }
}

export default Emails
