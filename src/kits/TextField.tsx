import React, { FC } from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  id?: string;
  placeholder?: string;
}

const TextFieldWrapper = styled.input`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 0.3rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  padding: 0.67em 1em;
  width: 200px;
`;

const TextField: FC<TextFieldProps> = props => {
  return (
    <>
      <TextFieldWrapper type="text" {...props} />
    </>
  );
};

export default TextField;
