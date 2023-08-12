import { ActionIcon, Button, Card, Divider, Grid, Group } from '@mantine/core';
import { HiOutlineHeart, HiLink, HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import UserDetails from './UserDetails';
import UserAvatar from './UserAvatar';

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <Grid m={20}>
      {users.map((user) => (
        <Grid.Col key={user.id} xs={12} sm={6} lg={3}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section bg="blue.1">
              <UserAvatar username={user.username} />
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
