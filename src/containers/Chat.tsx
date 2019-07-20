import React from 'react';
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

const Chat = withRouter((props: RouteComponentProps<{ roomID: string }>) => {
  const { params } = props.match;

  return (
    <>
      <Header />
      <MessageList roomID={params.roomID} />
      <AddMessage />
    </>
  );
});

export default connect(
  () => {},
  mapDispatchToProps,
)(Chat);
