import React from 'react';
import './style.css';

interface p {
  type: string;
  generator: boolean;
  value: string;
}

export default function Input(props: p): JSX.Element {
  const { type, generator, value } = props;
  if (generator) {
    return <input type={type} defaultValue={value} />;
  }
  return <> </>;
}
