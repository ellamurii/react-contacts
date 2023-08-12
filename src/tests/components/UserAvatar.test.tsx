import { describe, it, expect, vi } from 'vitest';
import UserAvatar from '../../components/UserAvatar';
import { useFetchAvatar } from '../../hooks/useFetchAvatar';
import { render, screen } from '@testing-library/react';

describe('UserAvatar', () => {
  const username = 'testuser';
  vi.mock('../../hooks/useFetchAvatar');

  it('renders user avatar without errors', async () => {
    vi.mocked(useFetchAvatar).mockImplementation(() => ({
      data: 'mock-avatar-object-url',
      error: undefined,
      loading: false,
    }));
    const { getByAltText } = render(<UserAvatar username={username} />);

    const avatarImage = getByAltText(username);
    expect(avatarImage.tagName).toBe('IMG');
  });

  it('renders skeleton when loading', async () => {
    vi.mocked(useFetchAvatar).mockImplementation(() => ({
      data: undefined,
      error: undefined,
      loading: true,
    }));

    const { getByTestId } = render(<UserAvatar username="testuser" />);

    const avatarImage = screen.queryAllByTestId(/avatar-img/);
    const skeletonElement = getByTestId(/avatar-skeleton/);

    expect(avatarImage).toHaveLength(0);
    expect(skeletonElement).toBeTruthy();
  });
});
