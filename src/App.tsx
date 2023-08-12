import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import Users from './pages/Users';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
