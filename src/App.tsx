import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import { AddMessage } from './containers/AddMessage';
import { MessageList } from './containers/MessageList';
import Auth from './components/Auth';
import Auth2 from './components/Auth2';
import { Login } from './containers/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Auth>
          <Switch>
            <Route exact path="/auth" component={Auth2}/>
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
};

export default App;
