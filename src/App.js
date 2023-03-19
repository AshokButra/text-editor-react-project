import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './App.css'

class App extends Component {
  state = {
    userInput: '',
    vscClicked: false,
    goItalicClicked: false,
    aiUnderlineClicked: false,
  }

  onBoldText = () => {
    const {vscClicked} = this.state
    this.setState(prevState => ({
      vscClicked: !prevState.vscClicked,
    }))
  }

  onTextStyle = () => {
    const {goItalicClicked} = this.state
    this.setState(prevState => ({
      goItalicClicked: !prevState.goItalicClicked,
    }))
  }

  onTextUnderline = () => {
    const {aiUnderlineClicked} = this.state
    this.setState(prevState => ({
      aiUnderlineClicked: !prevState.aiUnderlineClicked,
    }))
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {
      userInput,
      vscClicked,
      goItalicClicked,
      aiUnderlineClicked,
    } = this.state
    const textBoldStyle = vscClicked ? 'clicked-button' : 'text-editing-button'
    const textFontStyle = goItalicClicked
      ? 'clicked-button'
      : 'text-editing-button'
    const textDecorationStyle = aiUnderlineClicked
      ? 'clicked-button'
      : 'text-editing-button'
    let fontStyleProperty
    if (vscClicked && goItalicClicked && aiUnderlineClicked) {
      fontStyleProperty = 'complete-style'
    } else if (vscClicked && goItalicClicked && !aiUnderlineClicked) {
      fontStyleProperty = 'bold-italic-style'
    } else if (vscClicked && !goItalicClicked && aiUnderlineClicked) {
      fontStyleProperty = 'bold-underline-style'
    } else if (!vscClicked && goItalicClicked && aiUnderlineClicked) {
      fontStyleProperty = 'italic-underline-style'
    } else if (vscClicked && !goItalicClicked && !aiUnderlineClicked) {
      fontStyleProperty = 'only-bold-style'
    } else if (!vscClicked && goItalicClicked && !aiUnderlineClicked) {
      fontStyleProperty = 'only-italic-style'
    } else if (!vscClicked && !goItalicClicked && aiUnderlineClicked) {
      fontStyleProperty = 'only-underline-style'
    } else {
      fontStyleProperty = 'user-text'
    }
    return (
      <div className="bg-container">
        <div className="card">
          <div className="left-section">
            <h1 className="Text-editor">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              className="text-editor-image"
              alt="text editor"
            />
          </div>
          <div className="right-section">
            <ul className="top-section">
              <li className="list-item">
                <button
                  data-testid="bold"
                  className={textBoldStyle}
                  type="button"
                  onClick={this.onBoldText}
                >
                  <VscBold />
                </button>
              </li>
              <li className="list-item">
                <button
                  className={textFontStyle}
                  type="button"
                  data-testid="italic"
                  onClick={this.onTextStyle}
                >
                  <GoItalic />
                </button>
              </li>
              <li className="list-item">
                <button
                  className={textDecorationStyle}
                  type="button"
                  data-testid="underline"
                  onClick={this.onTextUnderline}
                >
                  <AiOutlineUnderline />
                </button>
              </li>
            </ul>
            <hr />
            <textarea
              className={fontStyleProperty}
              rows="20"
              cols="73"
              value={userInput}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
