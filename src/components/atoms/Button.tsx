import { css } from 'css';
import type { ComponentProps, PropsWithChildren } from 'react';

export const Button = ({ children, ...props }: PropsWithChildren<ComponentProps<'button'>>) => {
  return (
    <button style={buttonStyles} {...props}>
      {children}
    </button>
  );
};

const buttonStyles = css({
  borderRadius: '8px',
  border: '1px solid transparent',
  padding: '0.6em 1.2em',
  fontSize: '1em',
  fontWeight: 500,
  fontFamily: 'inherit',
  backgroundColor: '#1a1a1a',
  cursor: 'pointer',
  transition: 'border-color 0.25s',
  on: ($) => [
    $('&:active', { transform: 'scale(0.9)' }),
    $('&:hover', { borderColor: '#646cff' }),
    $('&:focus', { outline: '4px auto -webkit-focus-ring-color' }),
    $('&:focus-visible', { outline: '4px auto -webkit-focus-ring-color' }),
    $('@media (prefers-color-scheme: light)', { backgroundColor: '#f9f9f9' })
  ]
});
