import React, { Component } from 'react'
import emails from './emails.json'
import './Emails.css'
import Email from './Email'

const emailData = emails.messages

console.log(emailData)

const emailToRead = emailData.filter(obj => {
  return obj.id === '2'
})
console.log(emailToRead)
// console.log(emailData);

class Emails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      readingEmail: false,
      emailStatus: 'unread',
      emailToRead: null
    }
    this.toggleEmailView = this.toggleEmailView.bind(this)
    this.openEmail = this.openEmail.bind(this)
    this.closeEmail = this.closeEmail.bind(this)
    this.readEmail = this.readEmail.bind(this)
  }

  toggleEmailView() {
    let emailState = this.props.emailStatus === 'read' ? 'unread' : 'read'
    this.setState({ emailStatus: emailState })
    console.log('Clicked!!!')
  }

  openEmail() {
    // this.toggleEmailView()
    this.props.readEmail(this.props.email.id)
    console.log('Gotta go fast')
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
      this.setState({ readingEmail: true })
    }
  }

  render() {
    console.log('Rendered')
    const readingEmail = this.state.readingEmail
    let emailView

    if (readingEmail === false) {
      emailView = emailData.map((email, index) => (
        <Email
          key={index}
          emailStatus={this.state.emailStatus}
          email={email}
          readEmail={this.readEmail}
        />
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
