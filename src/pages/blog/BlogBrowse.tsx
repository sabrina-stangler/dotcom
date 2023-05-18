import { Link } from "react-router-dom"
import { PageContainer, Title } from "../../components"
import { blogPosts } from "../../constants"

import './BlogBrowse.css'

export function BlogBrowse() {

  return (
    <PageContainer>
      <Title>Blog</Title>
      <div className="blog-browse-list">
        {blogPosts.map(bp => {
          return (
            <Link className="blog-browse-post-link" key={bp.fileName} to={`/blog/${bp.fileName}`}>
              <span className="blog-browse-post-link-date">
                {bp.date.toLocaleDateString(undefined, { month: 'long', day: '2-digit', year: 'numeric' })}
              </span>
              <span className="blog-browse-post-link-title">
                {bp.title}
              </span>
            </Link>
          )})
        }
      </div>
    </PageContainer>
  )
}