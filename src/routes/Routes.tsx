import { RootLayout } from 'routes/RootLayout';
import { Home } from 'routes/home/Home';
import { NotFound } from 'routes/not-found/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Blogs } from './blogs/Blogs';
import { Blog } from './blog.$id/Blog';
import { loader as blogLoader } from './blog.$id/loader';
import { loader as blogsLoader } from './blogs/loader';
import { useQueryClient, type QueryClient } from '@tanstack/react-query';

const router = (queryClient: QueryClient) =>
  createBrowserRouter([
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
          loader: blogsLoader(queryClient),
          children: [
            {
              path: '/blog/:id',
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

export const AppRoutes = () => {
  const queryClient = useQueryClient();
  return <RouterProvider router={router(queryClient)} />;
};
