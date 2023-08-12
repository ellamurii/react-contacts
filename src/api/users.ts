const USERS_API = 'https://jsonplaceholder.typicode.com/users';
const AVATAR_API = 'https://avatars.dicebear.com/v2/avataaars/{{user_name}}.svg?options[mood][]=happy';

const get = async (): Promise<User[]> => {
  return fetch(USERS_API).then((response) => response.json());
};

const getAvatar = async (username: string): Promise<Blob> => {
  return fetch(AVATAR_API.replace('{{user_name}}', username)).then((response) => response.blob());
};

export const usersApi = {
  get,
  getAvatar,
};
