// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isResponded: false}

  onReacting = () => {
    this.setState({isResponded: true})
  }

  render() {
    const {isResponded} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const ReturnImage = props => {
      const {eachEmoji, onReacting} = props
      const {name, imageUrl} = eachEmoji
      const response = () => {
        onReacting()
      }
      return (
        <li className="each-emoji-container">
          <img
            className="emoji-style"
            onClick={response}
            src={imageUrl}
            alt={name}
          />
          <p>{name}</p>
        </li>
      )
    }
    return (
      <div className="bg-container">
        {!isResponded && (
          <div className="feed-back-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emoji-container">
              {emojis.map(eachEmoji => (
                <ReturnImage
                  eachEmoji={eachEmoji}
                  key={eachEmoji.id}
                  onReacting={this.onReacting}
                />
              ))}
            </ul>
          </div>
        )}
        {isResponded && (
          <div className="thank-you-container">
            <img alt="love emoji" src={loveEmojiUrl} className="love-emoji" />
            <h1>Thank You!</h1>
            <p className="description">
              We will Use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
