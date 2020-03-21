import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'
import App from './components/App/App'
import Login from './containers/Login'
import './style.css'

const store = configureStore()

const ParentComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <ParentComponent/>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

