// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// React Router 7 usa TextEncoder al cargar y el jsdom de CRA (Jest 27) no lo trae.
import { TextDecoder, TextEncoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

// react-markdown (y todo unified) solo se publica como ESM, que Jest 27 no
// transforma. En los tests basta con pintar el texto tal cual.
jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children?: unknown }) => children ?? null,
}));

// jsdom no implementa matchMedia; la home lo consulta (prefers-reduced-motion).
if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}
