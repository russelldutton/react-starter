import { blogPosts, type BlogPost } from './posts';

const delay = () => Math.random() * 800 + 300;

export const fetchAllBlogPosts = (): Promise<Array<Pick<BlogPost, 'id' | 'title' | 'author'>>> =>
  new Promise((resolve) => {
    return setTimeout(
      () => resolve(blogPosts.map(({ title, author, id }) => ({ title, author, id }))),
      delay()
    );
  });

export const fetchBlogPost = (blogId: number): Promise<BlogPost | undefined> => {
  const post = blogPosts.find(({ id }) => id === blogId);
  return new Promise((resolve) => {
    return setTimeout(() => resolve(post), delay());
  });
};
