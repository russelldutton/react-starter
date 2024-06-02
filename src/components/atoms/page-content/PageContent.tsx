import { css } from 'css';
import type { PropsWithChildren } from 'react';

export const PageContent = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={css({
        flexGrow: 1,
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      })}
    >
      {children}
    </div>
  );
};
