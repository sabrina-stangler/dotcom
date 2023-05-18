import { Link } from 'react-router-dom'
import { Footer } from '../footer'
import './page-container.css'

interface PageContainerProps {
  // children: React.ReactElement
  children: any // is this allowed????
}

export function PageContainer({children}: PageContainerProps) {

  return (
    <div className="page-container">
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/hire-me">Hire Me</Link>
        <Link className="nav-link" to="/about">About</Link>
      </div>
      {children}
      <Footer />
    </div>
  )
}