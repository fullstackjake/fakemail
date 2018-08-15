import React, { Component } from 'react'
import './Email.css'

class Email extends Component {
  constructor(props) {
    super(props)
    this.GOcode = this.GOcode.bind(this)
    this.state = { active: false }
  }

  GOcode(code) {
    let html = `${code}`
    let div = document.createElement('div')
    div.innerHTML = html
    let text = div.textContent || div.innerText || ''
    return text
  }

  render() {
    return (
      <div className="emailContainer">
        {/* <p>{email.id}</p>
              <h2>{email.subject}</h2>
              <h3>{email.sender}</h3>
              <p>{email.body} </p>
              <h5>{email.tags}</h5>
              <h6>{email.date}</h6> */}

        <div className="emailCheckbox">
          <div className="gCheckbox" />
        </div>
        <div className="emailFavorites">Star</div>
        <div className="emailSender">{this.props.email.sender}</div>
        <div className="emailbody">
          <span className="subject">{this.props.email.subject}</span>
          <span className="emailBody__text">
            <span className="dash">&nbsp;-&nbsp;</span>
            {this.GOcode(this.props.email.body)}
          </span>
        </div>
        <div className="dateContainer">{this.props.email.date}</div>
        {/* <div
          className="emailBody__FullText"
          dangerouslySetInnerHTML={{ __html: this.props.email.body }}
        /> */}
      </div>
    )
  }
}

export default Email
