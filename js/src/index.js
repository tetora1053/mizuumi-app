import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './components/Top/Base';

import { Provider } from 'react-redux'
import store from '../redux/store'

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ParentComponent/>
  </Provider>,
  document.getElementById('root')
);
