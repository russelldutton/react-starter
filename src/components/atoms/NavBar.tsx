import { css } from 'css';
import type { PropsWithChildren } from 'react';

export const NavBar = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={css({
        width: '100%',
        height: '56px',
        backgroundColor: '#37393f'
      })}
    >
      {children}
    </div>
  );
};
