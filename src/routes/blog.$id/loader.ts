import { fetchBlogPost } from 'api/client/api-client';
import type { LoaderFunction } from 'react-router-dom';

export const loader: LoaderFunction = async ({ params }) => {
  const id = Number(params.id);
  if (!id) {
    throw new Error('Invalid parameters');
  }

  const post = await fetchBlogPost(id);

  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; utf-8'
    }
  });
};
