import './index.css'

const HistoryItem = props => {
  const {everyHistory, userDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = everyHistory

  const deleteHistory = () => {
    userDeleteHistory(id)
  }

  return (
    <li className="listed-items">
      <div className="item-flexing">
        <div>
          <p className="margin">{timeAccessed}</p>
        </div>
        <img className="logo-url" alt="domain logo" src={logoUrl} />
        <div className="stucture">
          <p className="title">{title}</p>
          <p alt="domain logo" className="domain-url">
            {domainUrl}
          </p>
        </div>
      </div>

      <div className="delete-con">
        <button
          data-testid="delete"
          type="button"
          onClick={deleteHistory}
          className="button-delete"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
