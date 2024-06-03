import { useGetBlogPosts } from 'api/hooks/blog-posts';
import { css } from 'css';

export const Blog = () => {
  const { data: blogs } = useGetBlogPosts();
  return (
    <div style={css({})}>
      <div
        style={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 'minmax(100px, auto)',
          gap: '16px'
        })}
      >
        {blogs.map(({ title, author, reposts }) => (
          <div
            style={css({
              display: 'flex',
              gap: '24px',
              justifyContent: 'space-between',
              backgroundColor: 'lightgrey',
              borderRadius: '8px',
              padding: '16px',
              color: '#222'
            })}
          >
            <div>
              <div style={css({ fontSize: '1.2rem' })}>{title}</div>
              <div style={css({ fontSize: '0.9rem' })}>by {author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
