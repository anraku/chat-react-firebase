import React, { FC } from 'react';
import firebase from 'firebase';
import { User } from '../domain/models';

export interface HeaderProps {
  loginUser: firebase.User | User | null;
  handleLogout: () => void;
}

const Header: FC<HeaderProps> = props => {
  const { loginUser, handleLogout } = props;

  return <></>; // TODO: ヘッダーのデザインを書く
};

export default Header;
