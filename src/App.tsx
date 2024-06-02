import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EnvProvider } from 'contexts/EnvProvider';
import { AppRoutes } from 'routes/Routes';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {}
  }
});

const Fallback = () => <div>Something went wrong initialising the app!</div>;

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <EnvProvider>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </EnvProvider>
    </ErrorBoundary>
  );
};

export default App;
