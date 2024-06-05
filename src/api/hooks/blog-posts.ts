import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { fetchAllBlogPosts } from 'api/client/api-client';

const blogPostOptions = () =>
  queryOptions({
    queryKey: ['blogs'],
    queryFn: fetchAllBlogPosts,
    staleTime: 1000 * 5
  });

export const useGetBlogPosts = () => {
  return useSuspenseQuery(blogPostOptions());
};
