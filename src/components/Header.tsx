import React, { FC } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { User } from '../domain/models';

export interface HeaderProps {
  loginUser?: firebase.User | User | null;
  handleLogout?: () => void;
}

const Wrapper = styled.nav`
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

const Header: FC<HeaderProps> = props => {
  const { loginUser, handleLogout } = props;

  return (
    <Wrapper>
      <ul>
        <li className="left">
          <Link to="/chat">ホーム</Link>
        </li>
        <li className="right userName">{loginUser}</li>
        <li className="right">
          <Link to="/login" onClick={handleLogout}>
            ログアウト
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;
