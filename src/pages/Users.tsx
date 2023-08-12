import { LoadingOverlay } from '@mantine/core';
import { useFetchUserList } from '../hooks/useFetchUserList';
import UserList from '../components/UserList';

const Users = () => {
  const { data, loading } = useFetchUserList();

  return (
    <>
      <LoadingOverlay visible={loading} overlayOpacity={1} />
      {!!data?.length && <UserList users={data} />}
    </>
  );
};

export default Users;
