import { useGetBlogPosts } from 'api/hooks/blog-posts';
import { css } from 'css';

export const Blog = () => {
  const { data: blogs } = useGetBlogPosts();
  return (
    <div>
      {blogs.map(({ title, author, reposts }) => (
        <div
          style={css({
            display: 'flex',
            gap: '24px',
            justifyContent: 'space-between',
            marginBottom: '12px'
          })}
        >
          <div>
            <div style={css({ fontSize: '1.4rem' })}>{title}</div>
            <div style={css({ fontSize: '0.9rem' })}>by {author}</div>
          </div>
          <div>
            <div
              style={css({
                backgroundColor: '#335599',
                padding: '4px 8px',
                borderRadius: '32px'
              })}
            >
              <span>{reposts}</span> reposts
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
