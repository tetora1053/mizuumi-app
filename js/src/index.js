import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Top from './containers/Top'
import Login from './containers/Login'

const ParentComponent = () => {
  let parentCmp
  if (true) {
    parentCmp = <Top/>
  } else {
    parentCmp = <Login/>
  }
  return (
    <div>
      {parentCmp}
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <ParentComponent/>
  </Provider>,
  document.getElementById('root')
);

