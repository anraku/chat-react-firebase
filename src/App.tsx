import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom'
import { Login } from './containers/LoginOAuth';
import Chat from './containers/Chat';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/' component={() => <><h2>Root</h2></>} /> */}
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/chat' component={Chat} />
      </Switch>
    </Router>
  );
};

export default App;
