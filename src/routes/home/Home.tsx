import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import { css } from 'css';
import { Button } from 'components/atoms/button/Button';
import { PageContent } from 'components/atoms/page-content/PageContent';

const logoStyles = css({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter'
});

export const Home = () => {
  const [count, setCount] = useState(1);

  return (
    <div style={css({ display: 'block', textAlign: 'center' })}>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' style={logoStyles} alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} style={logoStyles} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
};
