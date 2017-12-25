import ReactDOM from 'react-dom'
import React from 'react'
import { PureComponent } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Home, Blogs, Users } from './components'

ReactDOM.render(
  (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/users" component={Users} />
        {/* <Route path="/repos/:repoName" component={RepoDetail} /> */}
      </div>
    </Router>
  ),
  document.getElementById('main')
)
