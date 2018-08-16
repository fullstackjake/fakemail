import React, { Component } from 'react'
import moment from 'moment'
import './Email.css'

class Email extends Component {
  constructor(props) {
    super(props)
    this.GOcode = this.GOcode.bind(this)
    this.toggleEmailView = this.toggleEmailView.bind(this)
    this.openEmail = this.openEmail.bind(this)
    this.state = { emailStatus: 'unread' }
  }

  GOcode(code) {
    let html = `${code}`
    let div = document.createElement('div')
    div.innerHTML = html
    let text = div.textContent || div.innerText || ''
    return text
  }

  // readEmail() {
  //   let emailState = this.state.emailStatus === 'unread' ? 'read' : 'unread'
  //   this.setState({ emailStatus: emailState })
  // }

  toggleEmailView() {
    let emailState = this.props.emailStatus === 'read' ? 'unread' : 'read'
    this.setState({ emailStatus: emailState })
    console.log('Clicked!!!')
  }

  openEmail(emailID) {
    this.toggleEmailView()
    this.props.readEmail(emailID)
  }

  render() {
    return (
      <div
        className={this.state.emailStatus}
        onClick={() => {
          this.openEmail(this.props.email.id)
        }}
      >
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
          <div className="emailSender">
            <span className="emailSender__sender">
              {this.props.email.sender}
            </span>
          </div>
          <div className="emailbody">
            <span className="subject">{this.props.email.subject}</span>
            <span className="emailBody__text">
              <span className="dash">&nbsp;-&nbsp;</span>
              {this.GOcode(this.props.email.body)}
            </span>
          </div>
          <div className="dateContainer">
            <span className="date">
              {moment(this.props.email.date).format('MMM DD')}
            </span>
          </div>
          {/* <div
          className="emailBody__FullText"
          dangerouslySetInnerHTML={{ __html: this.props.email.body }}
        /> */}
        </div>
      </div>
    )
  }
}

export default Email
