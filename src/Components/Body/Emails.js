import React, { Component } from 'react'
import emails from './emails.json'
import './Emails.css'

const emailData = emails.messages

class Emails extends Component {
  render() {
    return (
      <div className="Emails">
        <h1>Hello From Emails</h1>
        <div>
          {emailData.map((email, index) => (
            <div key={index} className="emailContainer">
              <p>{email.id}</p>
              <h2>{email.subject}</h2>
              <h3>{email.sender}</h3>
              <p>{email.body} </p>
              <h5>{email.tags}</h5>
              <h6>{email.date}</h6>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Emails
