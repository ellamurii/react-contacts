import { Skeleton, Image } from '@mantine/core';
import { useFetchAvatar } from '../hooks/useFetchAvatar';

interface UserAvatarProps {
  username: string;
}

const UserAvatar = ({ username }: UserAvatarProps) => {
  const { data, loading } = useFetchAvatar(username);
  return loading ? <Skeleton height={180} animate /> : <Image src={data} height={180} alt="Norway" fit="contain" />;
};

export default UserAvatar;
