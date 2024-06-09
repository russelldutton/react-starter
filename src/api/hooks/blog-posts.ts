import { queryOptions } from '@tanstack/react-query';
import { fetchAllBlogPosts, fetchBlogPost } from 'api/client/api-client';

const DEFAULT_STALE_TIME = 1000 * 60 * 5;

export const blogsOptions = () =>
  queryOptions({
    queryKey: ['blogs'],
    queryFn: fetchAllBlogPosts,
    staleTime: DEFAULT_STALE_TIME
  });

export const blogPostOptions = (id: number) =>
  queryOptions({
    queryKey: ['blogs', id],
    queryFn: () => fetchBlogPost(id),
    staleTime: DEFAULT_STALE_TIME
  });
