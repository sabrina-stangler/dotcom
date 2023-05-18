import { BlogPost } from '../../models'

const allBlogPosts: BlogPost[] = [
  {
    title: 'Welcome',
    date: new Date('04-24-2023'),
    fileName: 'welcome',
  }
]

export const blogPosts = allBlogPosts.sort((a, b) => b.date.getTime() - a.date.getTime())