import { NavBar } from 'components/atoms/NavBar';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <ErrorBoundary fallback={<div>Something went wrong rendering that route!</div>}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
};
