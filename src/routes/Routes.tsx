import { RootLayout } from 'routes/RootLayout';
import { Home } from 'routes/Home';
import { NotFound } from 'routes/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Blog } from './Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export const AppRoutes = () => <RouterProvider router={router} />;
