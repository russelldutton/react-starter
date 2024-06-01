import { AppLayout } from 'components/AppLayout';
import { Home } from 'routes/Home';
import { NotFound } from 'routes/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export const AppRoutes = () => <RouterProvider router={router} />;
