import React, { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import TextField from '../kits/TextField';

const EnteranceGroup = styled.ul`
  .twitterIcon {
    width: 20px;
    height: 20px;
    fill: '#1DA1F2';
  }

  .btn {
    display: block;
    margin-top: 5px;
  }

  li {
    padding-top: 10px;
    list-style-type: none;
  }
`;

interface AuthProps {
  handleGoogleLogin: () => void;
  handleTwitterLogin: () => void;
  handleGuestLogin: (e: any) => void;
}

const LoginComponent: FC<AuthProps> = props => {
  const { handleGoogleLogin, handleGuestLogin, handleTwitterLogin } = props;

  return (
    <section>
      <h2>ログインしてください</h2>
      <EnteranceGroup>
        <li>
          <Button className="btn" color="twitter" onClick={handleTwitterLogin}>
            <Icon name="twitter" /> Twitterでログインする
          </Button>
        </li>
        <li>
          <Button
            className="btn"
            color="google plus"
            onClick={handleGoogleLogin}
          >
            <Icon name="google plus" /> Google Plusでログインする
          </Button>
        </li>
        <li>
          <form onSubmit={handleGuestLogin}>
            <TextField id="loginName" placeholder="ユーザ名" />
            <Button className="btn" type="submit">
              ゲストでログインする
            </Button>
          </form>
        </li>
      </EnteranceGroup>
    </section>
  );
};

export default LoginComponent;
