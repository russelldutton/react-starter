import { NavBarLink } from 'components/atoms/navbar-link/NavBarLink';
import { css } from 'css';
import type { PropsWithChildren } from 'react';

export const NavBar = ({ children }: PropsWithChildren) => {
  return (
    <nav
      style={css({
        width: '100%',
        height: '56px',
        backgroundColor: '#37393f',
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        zIndex: 1000
      })}
    >
      <ul style={css({ margin: 0, height: '100%', display: 'flex', gap: '16px' })}>{children}</ul>
    </nav>
  );
};

NavBar.Link = NavBarLink;
