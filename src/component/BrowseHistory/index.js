import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

const initialHistoryListBrowser = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowseHistory extends Component {
  state = {searchInput: '', initialHistoryList: initialHistoryListBrowser}

  historySearch = event => {
    this.setState({searchInput: event.target.value})
  }

  userDeleteHistory = id => {
    const {initialHistoryList} = this.state
    const filterHistoryList = initialHistoryList.filter(each => each.id !== id)

    this.setState({initialHistoryList: filterHistoryList})
  }

  render() {
    const {initialHistoryList} = this.state
    const {searchInput} = this.state

    const resultUser = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container-history">
        <div>
          <div className="nav-container">
            <img
              alt="app logo"
              className="app-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
            <div className="search-and-input-con">
              <div className="search-icon">
                <img
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                />
              </div>
              <input
                type="search"
                className="searchInput"
                onChange={this.historySearch}
                value={searchInput}
                placeholder="Search History"
              />
            </div>
          </div>
          <div className="con">
            <ul className="history-mini-con">
              {resultUser.length === 0 ? (
                <p className="error">
                  There is no history to show
                  <img
                    className="delete-icon"
                    alt="deleteIcon"
                    src="https://cdn-icons-png.flaticon.com/512/3221/3221803.png"
                  />
                </p>
              ) : (
                resultUser.map(eachHistory => (
                  <HistoryItem
                    everyHistory={eachHistory}
                    userDeleteHistory={this.userDeleteHistory}
                    key={eachHistory.id}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowseHistory
