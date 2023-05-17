import { BlogPost } from '../../models'

const allBlogPosts: BlogPost[] = [
  {
    title: 'Welcome',
    date: new Date('04-24-2023'),
    fileName: 'welcome',
  },
  {
    title: 'Setting up the blog',
    date: new Date('04-25-2023'),
    fileName: 'blog-setup'
  },
  {
    title: 'Redesign V2',
    date: new Date('04-26-2023'),
    fileName: 'redesign-v2'
  },
]

export const blogPosts = allBlogPosts.sort((a, b) => b.date.getTime() - a.date.getTime())