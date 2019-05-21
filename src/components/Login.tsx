import React, { FC } from 'react';

interface AuthProps {
  handleLogin?: () => void;
}

const LoginComponent: FC<AuthProps> =  ({
  handleLogin = () => {},
}) => (
  <>
  <form onSubmit={handleLogin}>
    <h2>名前を入力してください</h2>
    <input name='username' placeholder='Input your name' />
    <button type='submit'>ログイン</button>
  </form>
  </>
);

export default LoginComponent;
