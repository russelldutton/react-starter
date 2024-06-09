import { useSuspenseQuery } from '@tanstack/react-query';
import { blogPostOptions } from 'api/hooks/blog-posts';
import { useParams } from 'react-router-dom';
import { z } from 'zod';

export const Blog = () => {
  const { id } = useParams();
  const blogId = z.coerce.number().parse(id);

  const { data: blog } = useSuspenseQuery({
    ...blogPostOptions(blogId)
  });

  if (!blog) {
    return <div>No blog found matching id {blogId}</div>;
  }

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>
        {blog.author} - {blog.datePublished}
      </p>
      <div>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};
