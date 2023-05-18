import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { markdownToReact } from "simple-markdown"
import { PageContainer, Subtitle, Title } from "../../components"
import { blogPosts } from "../../constants"
import { BlogPost } from "../../models"

import './BlogPage.css'

export function BlogPage() {
  const { fileName } = useParams<{ fileName: string }>()
  const [metadata, setMetadata] = useState<BlogPost>()
  const [parsedMarkdown, setParsedMarkdown] = useState<React.ReactNode>()

  // Source: https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
  useEffect(() => {
    if (fileName && fileName.length > 0) {
      // * Grab post metadata
      setMetadata(blogPosts.find(bp => bp.fileName === fileName))

      // * Import file
      import(`../../constants/blog-posts/${fileName}.md`)
        .then(res => {
          console.log(res)
          fetch(res.default)
            .then(res => res.text())
            .then(res => {
              if (res !== undefined) {
                const parsed = markdownToReact(res)
                if (parsed !== undefined) { setParsedMarkdown(parsed) }
              }
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  }, [fileName])

  return (
    <PageContainer>
      <div className="blog-page-container">
        { metadata &&
          <div className="blog-page-title-container">
            <Title nestedPage><span className="blog-page-title">{metadata.title}</span></Title>
            <Subtitle>Published {metadata.date.toLocaleDateString(undefined, { month: 'long', day: '2-digit', year: 'numeric' })}</Subtitle>
          </div>}
        { parsedMarkdown !== undefined && 
          <div className="blog-page-content-container">
            {parsedMarkdown}
          </div>}
        { parsedMarkdown === undefined && <p>Failed to load post</p>}
      </div>
    </PageContainer>
  )
}