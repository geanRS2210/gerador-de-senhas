import React, { useEffect, useState } from 'react';
import './style.css';

import Button from '../../components/button';
import Input from '../../components/input-password';

function App(): JSX.Element {
  const [onGenerator, setGenerator] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('carreguei meu componente');
  }, [password]);

  const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const letterGen = (letters: string[]): string => {
    return String(letters.splice(random(0, 25), 1));
  };

  const generator = (): string => {
    const num: number = random(0, 8);
    const letter = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
    const MinAlfabeto: string = letterGen(letter.split(','));
    const MaiAlfabeto: string = letterGen(letter.split(','));
    setGenerator(true);
    return num + MinAlfabeto + MaiAlfabeto.toUpperCase();
  };

  const handleClick = (): void => {
    setPassword(generator());
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Vamos gerar uma senha segura?</p>
        <Input generator={onGenerator} type="text" value={password || ''} />
        <Button text="Gerar Senha" onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
