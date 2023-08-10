import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe('Vite + React');

    const text = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(text.textContent).toBeTruthy();
  });
});
