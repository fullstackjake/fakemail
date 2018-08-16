import React, { Component } from 'react'
// import moment from 'moment'
import './EmailReading.css'

class EmailReading extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="emailReadingContainer">
        <div>
          <button
            onClick={() => {
              this.props.closeEmail()
            }}
          >
            Close
          </button>
        </div>
        <h1 className="emailReadingContainer__sender">{this.props.subject}</h1>

        {/* <div className="emailReadingTop">
          <span>Subject</span>
          <span>Tags</span>
        </div> */}
        <div className="senderContainer">
          <h2>{this.props.sender}</h2>
        </div>
        <div className="emailReadingBody">
          <div
            className="email__content"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
        </div>
      </div>
    )
  }
}

export default EmailReading
