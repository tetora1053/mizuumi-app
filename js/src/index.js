import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Top from '../redux/containers/Top'
import Login from '../redux/containers/Login'

const ParentComponent = () => {
  let parentCmp
  if (false) {
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

