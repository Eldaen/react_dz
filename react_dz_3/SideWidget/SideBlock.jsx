const React = require('react')
const ArticleItem = require('./ArticleItem.jsx')

/**
 * Main block with the widgets
 * TODO: It would be good idea to make a standalone component for each widget, but not this time.
 */
class SideBlock extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <div className="col-md-3 widget-container">
        <div className="widget widget--popular">
          <h2 className="widget__header">Популярные статьи</h2>
          <ArticleItem href="#" title="Рожденный перехватывать трафик" date="14.12.2017" author="Anonymous" authorHref="#"/>
          <ArticleItem href="#" title="Практика применения XOR в программировании" date="11.9.2017" author="Launchpad Mc'Quack" authorHref="#"/>
        </div>
        <div className="widget widget--fresh">
          <h2 className="widget__header">Новые статьи</h2>
          <ArticleItem href="#" title="Рожденный перехватывать трафик" date="14.12.2017" author="Anonymous" authorHref="#"/>
          <ArticleItem href="#" title="Практика применения XOR в программировании" date="11.9.2017" author="Launchpad Mc'Quack" authorHref="#"/>
        </div>
      </div>
    )
  }
}

module.exports = SideBlock
