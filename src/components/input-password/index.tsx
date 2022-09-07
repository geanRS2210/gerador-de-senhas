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
    return <input type={type} value={value} className="input-password" />;
  }
  return <input disabled className="input-password" />;
}
