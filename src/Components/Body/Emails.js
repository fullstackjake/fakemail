import React, { Component } from 'react'
import emails from './emails.json'
import './Emails.css'
import Email from './Email'

const emailData = emails.messages

class Emails extends Component {
  constructor(props) {
    super(props)
    this.state = { readingEmail: false }
    this.closeEmail = this.closeEmail.bind(this)
    this.readEmail = this.readEmail.bind(this)
  }

  closeEmail() {
    console.log('Clicked Close')
    const readingEmail = this.state.readingEmail
    if (readingEmail) {
      this.setState({ readingEmail: false })
    }
  }

  readEmail(emailID) {
    console.log('Hey')
    if (emailID) {
      console.log(emailID)
    }
  }

  render() {
    console.log('Rendered')
    const readingEmail = this.state.readingEmail
    let emailView

    if (readingEmail === false) {
      emailView = emailData.map((email, index) => (
        <Email key={index} email={email} readEmail={this.readEmail} />
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
