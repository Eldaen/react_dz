import {Link} from 'react-router-dom'
import React from 'react'

export class Users extends React.PureComponent {
  render () {
    return (
      <div>
        <header><h1>HOME</h1></header>
        <menu>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/blogs">Блоги</Link></li>
          </ul>
        </menu>
        <div>
          <h2>Страница с пользователями</h2>
        </div>
      </div>
    )
  }
}
