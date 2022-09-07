import React from 'react';
<<<<<<< HEAD
import './style.css';
=======
>>>>>>> d29de27ea1d49331f7d060186c7873bb1f4b3c75

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
