const React = require('react')
require('./NavBarList.jsx')

class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <NavBarList className="nav navbar-nav navbar-right"/>
          </div>
        </div>
      </nav>
    )
  }
}

module.exports = NavBar
