import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import UserList from '../../components/UserList';

describe('UserList', () => {
  const mockUsers = [
    {
      id: 1,
      name: 'Nayeon',
      phone: '999',
      username: 'nayeon',
      website: 'nayeon.twice',
      email: 'nayeon@twice.com',
    },
    {
      id: 1,
      name: 'Jeongyeon',
      phone: '123',
      username: 'yoo_jeongyeon',
      website: 'jeongyeon.twice',
      email: 'jeongyeon@twice.com',
    },
  ];
  beforeEach(() => {
    render(<UserList users={mockUsers} />);
  });

  it('renders a list of users and their website', async () => {
    const userSites = screen.queryAllByTestId(/user-website/);
    expect(userSites).toHaveLength(mockUsers.length);
  });

  it('opens user website in a new tab when link is clicked', () => {
    const userSite = screen.queryAllByTestId(/user-website/)[0];
    fireEvent.click(userSite);

    expect(userSite).toHaveProperty('target', '_blank');
  });
});
