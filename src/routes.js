import App from './App';
import { Auth } from './containers/Auth';
import { Login } from './containers/Login';

const routes = [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/auth',
    exact: true,
    component: Auth,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
];

export default routes;
