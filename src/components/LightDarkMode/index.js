import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`card-container ${modeClassName}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.onMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
