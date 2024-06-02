import { blogPosts, type BlogPost } from './posts';

const delay = () => Math.random() * 800 + 300;

export const fetchAllBlogPosts = (): Promise<Array<BlogPost>> =>
  new Promise((resolve) => {
    return setTimeout(() => resolve(blogPosts), delay());
  });
