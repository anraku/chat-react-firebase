import React, { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './LoginOAuth.css';
import styled from 'styled-components';

const FormWrapper = styled.div`
  .txtLogin {
    height: 30px;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: inset 1px 4px 9px -6px rgba(0, 0, 0, 0.5);
    border-width: 1px;
  }

  .btn {
    display: block;
  }
`;

interface AuthProps {
  handleLogin?: () => void;
  handleTwitterLogin?: () => void;
  handleGuestLogin?: (e: any) => void;
  handleLogout: () => void;
}

const LoginComponent: FC<AuthProps> = props => {
  const {
    handleLogin,
    handleGuestLogin,
    handleTwitterLogin,
    handleLogout,
  } = props;

  return (
    <section>
      <h2>ログインしてください</h2>
      <ul>
        <li>
          <Button className="btn" color="twitter" onClick={handleTwitterLogin}>
            <Icon name="twitter" /> Twitterでログインする
          </Button>
        </li>
        <li>
          <Button className="btn" color="google plus" onClick={handleLogin}>
            <Icon name="google plus" /> Google Plusでログインする
          </Button>
        </li>
        <li>
          <FormWrapper>
            <form onSubmit={handleGuestLogin}>
              <input
                type="text"
                name="loginName"
                id="loginName"
                className="txtLogin"
                placeholder="input your name"
              />
              <Button className="btn" type="submit">
                ゲストでログインする
              </Button>
            </form>
          </FormWrapper>
        </li>
        <li>
          <Button className="btn" onClick={handleLogout}>
            ログアウト
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default LoginComponent;
