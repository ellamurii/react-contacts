import { Skeleton, Image } from '@mantine/core';
import { useFetchAvatar } from '../hooks/useFetchAvatar';

interface UserAvatarProps {
  username: string;
}

const UserAvatar = ({ username }: UserAvatarProps) => {
  const { data, loading } = useFetchAvatar(username);
  return loading ? (
    <Skeleton data-testid="avatar-skeleton" height={180} animate />
  ) : (
    <Image data-testid="avatar-img" src={data} height={180} alt={username} fit="contain" />
  );
};

export default UserAvatar;
