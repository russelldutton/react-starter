import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EnvProvider } from 'contexts/EnvProvider';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes/AppRoutes';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {}
  }
});

const App = () => {
  return (
    <EnvProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </EnvProvider>
  );
};

export default App;
