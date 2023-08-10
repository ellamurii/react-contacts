import { Grid } from '@mantine/core';
import { useFetch } from '../hooks/useFetch';

const GET_USERS_API = `https://jsonplaceholder.typicode.com/users`;
interface User {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const UserList = () => {
  const { data } = useFetch<User[]>(GET_USERS_API);
  return (
    <Grid>
      {data?.map((user) => (
        <Grid.Col key={user.id} xs={12} sm={6} lg={3}>
          {user.name}
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default UserList;
