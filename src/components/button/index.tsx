import React from 'react';

interface props {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function Button(p: props): JSX.Element {
  const { text, onClick } = p;
  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
}
