import { MantineProvider } from '@mantine/core';
import UserList from './components/UserList';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <UserList />
    </MantineProvider>
  );
}

export default App;
