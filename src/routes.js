import App from './App';
import { Auth } from './containers/Auth';
import LoginComponent from './components/Login';

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
    component: LoginComponent,
  },
];

export default routes;
