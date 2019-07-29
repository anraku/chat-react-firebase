import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MessageList } from './MessageList';
import { AddMessage } from './AddMessage';
import { Message } from '../domain/models';
import { initialMessage } from '../reducers/message';
import Header from './Header';

interface DispatchProps {
  initialDispatch: (messages: Message[]) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  initialDispatch: (messages: Message[]) => {
    dispatch(initialMessage(messages));
  },
});

type ChatProps = RouteComponentProps<{ roomID: string }> & DispatchProps;
const Chat = withRouter((props: ChatProps) => {
  const { match, initialDispatch } = props;
  useEffect(() => {
    return () => initialDispatch([]); // 以前訪れたチャットルームのメッセージが表示されないように初期化する
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <MessageList roomID={match.params.roomID} />
      <AddMessage />
    </>
  );
});

export default connect(
  undefined,
  mapDispatchToProps,
)(Chat);
