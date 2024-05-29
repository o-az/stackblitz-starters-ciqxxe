'use client';
import '@stefanjudis/sparkly-text';

export function Sparkly() {
  return (
    <sparkly-text
      number-of-sparkles="5"
      style={{
        '--sparkly-text-size': '3.5rem',
      }}
    >
      Hello Web Components
    </sparkly-text>
  );
}
