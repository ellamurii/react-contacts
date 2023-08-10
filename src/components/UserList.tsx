import { ActionIcon, Button, Card, Divider, Grid, Group, Image } from '@mantine/core';
import { HiOutlineHeart, HiLink, HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { useFetch } from '../hooks/useFetch';
import UserDetails from './UserDetails';

const GET_USERS_API = 'https://jsonplaceholder.typicode.com/users';
interface User {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  email: string;
}

const UserList = () => {
  const { data } = useFetch<User[]>(GET_USERS_API);
  return (
    <Grid m={20}>
      {data?.map((user) => (
        <Grid.Col key={user.id} xs={12} sm={6} lg={3}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section bg="blue.1">
              <Image
                src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy `}
                height={180}
                alt="Norway"
                fit="contain"
                pt={10}
              />
            </Card.Section>
            <UserDetails {...user} />
            <Button
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              component="a"
              href={`//${user.website}`}
              target="_blank"
              rel="noreferrer noopener"
              leftIcon={<HiLink />}
            >
              {user.website}
            </Button>
            <Group position="apart" mt="1rem" mx="1.25rem">
              <ActionIcon color="red.5">
                <HiOutlineHeart size="1.25rem" />
              </ActionIcon>
              <Divider orientation="vertical" />
              <ActionIcon>
                <HiOutlinePencilAlt size="1rem" />
              </ActionIcon>
              <Divider orientation="vertical" />
              <ActionIcon>
                <HiOutlineTrash size="1rem" />
              </ActionIcon>
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default UserList;
