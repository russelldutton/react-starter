import { css } from 'css';
import type { PropsWithChildren } from 'react';

export const PageContent = ({ children }: PropsWithChildren) => {
  return <div style={css({ padding: '32px' })}>{children}</div>;
};
