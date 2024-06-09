import type { QueryClient } from '@tanstack/react-query';
import { blogsOptions } from 'api/hooks/blog-posts';

export const loader = (queryClient: QueryClient) => () => {
  return queryClient.ensureQueryData(blogsOptions());
};
