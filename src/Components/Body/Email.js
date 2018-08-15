import React, { Component } from 'react'




class Email extends Component {
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

export default Email




<div class="emailCheckbox">
  checkbox
</div>
<div class="emailFavorites">
  Star
</div>
<div class="emailSender">
  Bob
</div>
<div class="emailSubject">
  Act now
</div>
<div class="emailbody">
  Act now or waist it forever
</div>
