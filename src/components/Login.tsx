import React, { FC, FormEvent } from 'react';

interface AuthProps {
  handleLogin?: (event: FormEvent<HTMLFormElement>) => void;
}

const LoginComponent: FC<AuthProps> =  ({
  handleLogin = () => {},
}) => (
  <>
  <form onSubmit={handleLogin}>
    <h2>名前を入力してください</h2>
    <input id='userName' placeholder='Input your name' />
    <button type='submit'>ログイン</button>
  </form>
  </>
);

export default LoginComponent;
