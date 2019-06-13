import React, { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './LoginOAuth.css';

interface AuthProps {
  handleLogin?: () => void;
}

const LoginComponent: FC<AuthProps> = props => {
  const { handleLogin } = props;

  return (
    <section>
      <h2>ログインしてください</h2>
      <ul>
        <li>
        <Button className="btn" color='twitter'>
          <Icon name='twitter' /> Twitterでログインする
        </Button>
        </li>
        <li>
        <Button className="btn" color='google plus' onClick={handleLogin}>
          <Icon name='google plus'/> Google Plusでログインする
        </Button>
        </li>
        <li>
        <Button className="btn" onClick={handleLogin}>
          ゲストでログインする
        </Button>
        </li>
      </ul>
    </section>
  );
};

export default LoginComponent;
