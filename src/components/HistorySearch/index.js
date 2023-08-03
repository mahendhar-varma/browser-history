import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class HistorySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {searchInput: '', historyList: props.historyList}
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const filteredHistory = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({historyList: filteredHistory})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(eachHistory => {
      const requiredCase = eachHistory.title.toLowerCase()
      return requiredCase.includes(searchInput)
    })
    let conditionCheck = true
    if (searchResults.length === 0) {
      conditionCheck = false
    } else {
      conditionCheck = true
    }

    return (
      <div>
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <hr className="line" />
            <input
              type="search"
              value={searchInput}
              placeholder="Search History"
              onChange={this.onChangeSearchInput}
            />
          </form>
        </nav>
        <ul className="list-container">
          {conditionCheck ? (
            searchResults.map(eachHistory => (
              <HistoryItem
                history={eachHistory}
                key={eachHistory.id}
                deleteHistory={this.onDeleteHistory}
              />
            ))
          ) : (
            <p className="empty-message">There is no history to show</p>
          )}
        </ul>
      </div>
    )
  }
}

export default HistorySearch
