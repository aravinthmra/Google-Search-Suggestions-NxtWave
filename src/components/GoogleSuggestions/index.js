import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {suggestionsList: props.suggestionsList, searchInput: ''}
  }

  onSearchEntry = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onExpandInput = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    const searchResults = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container1">
        <img
          className="google-logo1"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="search-container1">
          <div className="searchbar-container1">
            <img
              className="search-logo-1"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onSearchEntry}
              value={searchInput}
              className="search-bar-input1"
            />
          </div>
          <ul className="list-container1">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggestion={eachItem.suggestion}
                onExpandInput={this.onExpandInput}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
