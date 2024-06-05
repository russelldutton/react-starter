import { RootLayout } from 'routes/RootLayout';
import { Home } from 'routes/home/Home';
import { NotFound } from 'routes/not-found/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Blogs } from './blogs/Blogs';
import { Blog } from './blog.$id/Blog';
import { loader as blogLoader } from './blog.$id/loader';

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
        element: <Blogs />,
        children: [
          {
            path: ':id',
            element: <Blog />,
            loader: blogLoader
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export const AppRoutes = () => <RouterProvider router={router} />;
