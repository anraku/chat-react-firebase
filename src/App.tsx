import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './containers/LoginOAuth';
import Chat from './containers/Chat';
import PrivateRoute from './PrivateRoute';
import RoomList from './containers/RoomList';
import NewRoom from './components/NewRoom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/chat/:roomID" component={Chat} />
        <Route exact path="/rooms" component={RoomList} />
        <Route path="/rooms/new" component={NewRoom} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
