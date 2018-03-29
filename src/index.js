import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import persistState from 'redux-localstorage'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'

const enhancer = compose(persistState('patients'));
const store = createStore(reducers, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
