import React, { useEffect, useState } from 'react';
import './style.css';

import Button from '../../components/button';
import Input from '../../components/input-password';

function App(): JSX.Element {
  const [onGenerator, setGenerator] = useState(false);
  const [password, setPassword] = useState('');

  useEffect((): void => {
    console.log('Atualizei meu componente');
  }, [password]);

  const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const letterGen = (letters: string[], min: number, max: number): string => {
    return String(letters.splice(random(min, max), 1));
  };

  const generator = (): string => {
    const num: number = random(0, 9);
    const symbol = '!,@,#,$,%,&,*,(,),_,-,+,=,{,[,},],?,/';
    const letter = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
    const symbolSelected: string = letterGen(symbol.split(','), 0, 19);
    const MinAlfabeto: string = letterGen(letter.split(','), 0, 25);
    const MaiAlfabeto: string = letterGen(letter.split(','), 0, 26);

    setGenerator(true);
    return `${num},${MinAlfabeto},${MaiAlfabeto.toUpperCase()},${symbolSelected},`;
  };

  const returnPassword = (length: number): void => {
    let passwordTotal = '';
    let finalPassword = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= 20; i++) {
      const chunk: string = generator();
      passwordTotal += chunk;
      if (i === 20) {
        // eslint-disable-next-line no-plusplus
        for (let it = length; it >= 0; it--) {
          finalPassword += letterGen(passwordTotal.split(','), 0, 80);
        }
        setPassword(finalPassword);
      }
    }
  };

  const handleClick = (): void => {
    returnPassword(15);
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
