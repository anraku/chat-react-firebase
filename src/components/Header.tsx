import React, { FC } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { User } from '../domain/models';

const WrapperNav = styled.nav`
  height: 9vh;

  ul {
    height: 100%;
    overflow: hidden;
    list-style-type: none;
    background-color: #3ebcb2;
    color: #fff;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;

    li {
      padding-top: 0;
      padding-right: 20px;
    }

    .left {
      float: left;
    }

    .userName {
      color: #eee;
    }

    .right {
      float: right;
    }
  }

  a {
    display: block;
    color: #eee;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
  }
`;

export interface HeaderProps {
  loginUser: firebase.User | User | null;
  handleLogout: () => void;
}

const Header: FC<HeaderProps> = props => {
  const { loginUser, handleLogout } = props;
  const userName = loginUser ? loginUser.displayName : '名無しさん';

  return (
    <WrapperNav>
      <ul>
        <li className="left">
          <Link to="/rooms">ホーム</Link>
        </li>
        <li className="right userName">{userName}</li>
        <li className="right">
          <Link to="/login" onClick={handleLogout}>
            ログアウト
          </Link>
        </li>
      </ul>
    </WrapperNav>
  );
};

export default Header;
