import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Top from '../redux/containers/Top'

const ParentComponent = () => {
  return (
    <div>
      <Top/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <ParentComponent/>
  </Provider>,
  document.getElementById('root')
);

