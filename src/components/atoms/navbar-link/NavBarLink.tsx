import { css } from 'css';
import { NavLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  text: string;
}
export const NavBarLink = ({ to, text }: LinkProps) => {
  return (
    <li
      style={css({
        listStyle: 'none',
        textAlign: 'center',
        alignContent: 'center'
      })}
    >
      <NavLink
        to={to}
        style={({ isActive }) =>
          css({
            color: 'white',
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: isActive ? 'grey' : '',
            border: '1px solid',
            borderColor: isActive ? 'grey' : '#37393f',
            transition: 'border-color 0.25s',
            on: ($) => [
              $('&:hover', {
                borderColor: 'grey'
              })
            ]
          })
        }
      >
        {text}
      </NavLink>
    </li>
  );
};
