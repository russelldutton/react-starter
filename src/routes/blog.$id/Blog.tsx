import { useLoaderData } from 'react-router-dom';
import type { BlogPost } from 'api/client/posts';

export const Blog = () => {
  const post: BlogPost = useLoaderData() as BlogPost;
  return <>{JSON.stringify(post, undefined, 2)}</>;
};
