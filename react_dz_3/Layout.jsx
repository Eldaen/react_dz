const React = require('react')
const ReactDOM = require('react-dom')
const NavBar = require('./NavBar/NavBar.jsx')
const ContentBlock = require('./ContentBlock/ContentBlock.jsx')

/**
 * Main layout
 */
class Layout extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <div id="layout">
        <NavBar/>
        <div className="container">
          <ContentBlock/>
        </div>
      </div>
    )
  }
}

module.exports = Layout
