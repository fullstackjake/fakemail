import React, { Component } from 'react'
import emails from './emails.json'
import './Emails.css'
import Email from './Email'

const emailData = emails.messages

class Emails extends Component {
  render() {
    return (
      <div className="Emails">
        <h1>Hello From Emails</h1>
        <div>
          {emailData.map((email, index) => <Email key={index} email={email} />)}
        </div>
      </div>
    )
  }
}

export default Emails
