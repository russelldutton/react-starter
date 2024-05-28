import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EnvProvider } from 'contexts/EnvProvider';
import { ServiceProvider } from 'contexts/ServiceProvider';
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
      <ServiceProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </ServiceProvider>
    </EnvProvider>
  );
};

export default App;
