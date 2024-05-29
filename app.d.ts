import React from 'react';

declare module 'react' {
  interface CSSProperties {
    '--sparkly-text-size'?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sparkly-text': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'number-of-sparkles'?: string;
      };
    }
  }
}

export type {};
