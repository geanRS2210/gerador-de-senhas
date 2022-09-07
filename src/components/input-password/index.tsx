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
<<<<<<< HEAD
    return <input type={type} value={value} className="input-password" />;
  }
  return <input disabled className="input-password" />;
=======
    return <input type={type} defaultValue={value} />;
  }
  return <> </>;
>>>>>>> d29de27ea1d49331f7d060186c7873bb1f4b3c75
}
