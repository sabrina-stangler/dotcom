import { Link } from 'react-router-dom'
import Icon from '../../assets/curiousbean-icon-color.svg'
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
        <img src={Icon} alt="curiousbean-icon" height="40vh" />
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/clients">Clients</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/about">About</Link>
      </div>
      {children}
      <Footer />
    </div>
  )
}