import './index.css'

const HistoryItem = props => {
  const {history, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="type-container">
        <img src={logoUrl} alt="domain logo" className="logo-image" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        className="button"
        onClick={onDeleteHistory}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
