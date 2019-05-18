import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

import reducers from './reducers/index';
import { addMessage } from './reducers/message';
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import { Auth } from './containers/Auth';
import LoginComponent from './components/Login';

/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers();
const store = createStore(reducers, enhancer);

store.dispatch(addMessage('testdesu', 'Me'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" exact={true} component={LoginComponent} />
      <Route path="/auth" exact={true} component={Auth} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
