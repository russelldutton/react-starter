import { fetchBlogPost } from 'api/client/api-client';
import { defer, type LoaderFunction } from 'react-router-dom';

export const loader: LoaderFunction = async ({ params }) => {
  const id = Number(params.id);
  if (!id) {
    throw new Error('Invalid parameters');
  }

  const post = fetchBlogPost(id);

  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }

  return defer({
    result: post
  });
};
