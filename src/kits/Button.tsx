import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonType = 'button' | 'submit' | 'reset';
interface ButtonProps {
  type?: ButtonType;
  value: string;
  handleFunc?: () => void;
}

const AgreeButtonWrapper = styled.button`
  display: inline-block;
  cursor: pointer;
  color: #fff;
  background: #2185d0;
  padding: 0.78em 1.5em;
  font-weight: 700;
  border-radius: 0.29rem;
  margin-right: 0.25em;

  &:hover {
    background: #1678c2;
  }
`;

export const AgreeButton: FC<ButtonProps> = props => {
  const { type = 'button', value, handleFunc } = props;

  return (
    <>
      <AgreeButtonWrapper type={type} onClick={handleFunc}>
        {value}
      </AgreeButtonWrapper>
    </>
  );
};

const CancelButtonWrapper = styled.button`
  display: inline-block;
  cursor: pointer;
  background: #e0e1e2;
  padding: 0.78em 1.5em;
  font-weight: 700;
  border-radius: 0.29rem;

  &:hover {
    background: #cacbcd;
  }
`;

export const CancelButton: FC<ButtonProps> = props => {
  const { type = 'button', value, handleFunc } = props;

  return (
    <>
      <CancelButtonWrapper type={type} onClick={handleFunc}>
        {value}
      </CancelButtonWrapper>
    </>
  );
};
