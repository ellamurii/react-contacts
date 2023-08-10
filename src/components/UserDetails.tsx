import { Stack, Flex, Text } from '@mantine/core';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';

interface UserDetailsProps {
  name: string;
  email: string;
  phone: string;
}

const UserDetails = ({ name, email, phone }: UserDetailsProps) => {
  return (
    <Stack spacing={5} mt="md" mb="xs">
      <Text weight={500} variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
        {name}
      </Text>
      <Flex align="center" gap={8}>
        <HiOutlineMail />
        <Text size="sm" color="gray.7" display="flex">
          {email}
        </Text>
      </Flex>
      <Flex align="center" gap={8}>
        <HiPhone />
        <Text size="sm" color="gray.7">
          {phone}
        </Text>
      </Flex>
    </Stack>
  );
};

export default UserDetails;
