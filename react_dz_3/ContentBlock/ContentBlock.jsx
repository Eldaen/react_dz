const React = require('react')
const Article = require('../Article/Article.jsx')
const SideBlock = require('../SideWidget/SideBlock.jsx')

/**
 * Main content block
 */
class ContentBlock extends React.Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render () {
    return (
      <div className="col-md-12 main-page">
        <h1 className="main-page__header">Статьи</h1>
        <div className="row">
          <div className="col-md-9 article-container">
            <Article
              title="Рожденный перехватывать трафик"
              text="Новые интернет-провайдеры появляются буквально каждый день, и 12 декабря 2017 года не было исключением. Новичок в экосистеме междоменной маршрутизации, AS39523 (DV-LINK-AS), начала анонсировать соб..."
              href="#"
            />
            <Article
              title="Практика применения XOR в программировании"
              text="Международная группа исследователей информационной безопасности из Великобритании, Словакии, Чехии и Италии обнаружила критическую уязвимость в популярной библиотеке шифрования RSA Library v1.02.01..."
              href="#"
            />
          </div>

          <SideBlock />
        </div>
      </div>
    )
  }
}

module.exports = ContentBlock
