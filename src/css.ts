import { createHooks } from '@css-hooks/react';
import { recommended } from '@css-hooks/recommended';

export const { styleSheet, css } = createHooks({
  hooks: {
    ...recommended({
      breakpoints: ['500px', '1000px'],
      colorSchemes: ['dark', 'light'],
      pseudoClasses: [':hover', ':focus', ':focus-visible', ':active', ':disabled']
    }),
    child: '& > *'
  },
  debug: import.meta.env.DEV
});
