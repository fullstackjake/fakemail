import React, { Component } from 'react'
import emails from './emails.json'
import './Emails.css'
import Email from './Email'
import EmailReading from './EmailReading'

const emailData = emails.messages

console.log(emailData)

// const emailToRead = emailData.filter(obj => {
//   return obj.id === '2'
// })
// console.log(emailToRead)
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
      this.setState({ emailToRead: emailID })
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
      const emailToRead = emailData.filter(obj => {
        return obj.id === this.state.emailToRead
      })

      const emailToReadParsed = emailToRead[0]

      console.log(this.state.emailToRead)
      console.log(emailToReadParsed)

      emailView = (
        <EmailReading
          sender={emailToReadParsed.sender}
          body={emailToReadParsed.body}
          subject={emailToReadParsed.subject}
          closeEmail={this.closeEmail}
        />
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
