import { blogsOptions } from 'api/hooks/blog-posts';
import { css } from 'css';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import type { loader } from './loader';
import { useQuery } from '@tanstack/react-query';
import { QueryContainer } from 'components/molecules/query-container/QueryContainer';

export const Blogs = () => {
  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;

  const { data: blogs } = useQuery({
    ...blogsOptions(),
    initialData
  });

  return (
    <div
      style={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' })}
    >
      <div style={{ textAlign: 'center' }}>
        <h2>Some fake blog posts, loaded with Suspense!</h2>
      </div>
      <div
        style={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 'minmax(130px, auto)',
          gap: '16px',
          width: '60%'
        })}
      >
        {blogs.map(({ title, author, id }) => (
          <Link
            style={css({
              display: 'flex',
              gap: '24px',
              justifyContent: 'space-between',
              background: 'linear-gradient(0deg, rgb(64 60 127) 0%, rgb(108, 142, 149) 100%)',
              borderRadius: '8px',
              padding: '16px',
              color: '#FFF',
              cursor: 'pointer'
            })}
            key={id}
            to={`${id}`}
          >
            <div>
              <div style={css({ fontSize: '1.2rem' })}>{title}</div>
              <div style={css({ fontSize: '0.9rem' })}>by {author}</div>
            </div>
          </Link>
        ))}
      </div>
      <QueryContainer>
        <Outlet />
      </QueryContainer>
    </div>
  );
};
