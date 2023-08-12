import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserDetails from '../../components/UserDetails';

describe('<UserDetails />', () => {
  const user = {
    name: 'Nayeon',
    email: 'nayeon@twice.com',
    phone: '12345',
  };
  beforeEach(() => {
    render(<UserDetails {...user} />);
  });

  it('should render name all the time', () => {
    expect(screen.getByText(user.name)).toBeDefined();
  });
  it('should render email all the time', () => {
    expect(screen.getByText(user.email)).toBeDefined();
  });
  it('should render phone all the time', () => {
    expect(screen.getByText(user.phone)).toBeDefined();
  });
});
