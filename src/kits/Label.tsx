import React, { FC } from 'react';

interface LabelProps {
  value: string;
}

const Label: FC<LabelProps> = props => {
  const { value } = props;

  return (
    <>
      <span>{value}</span>
    </>
  );
};

export default Label;
