import { Organization } from '../../../models'
import { ProjectCard } from './project'
import './project-category.css'

interface ProjectCategoryProps {
  category: Organization
}

export function ProjectCategory({ category }: ProjectCategoryProps) {

  return (
    <div className="project-category-container">
      <div className="project-category-header">
        {category.name}
      </div>
      <div className="project-category-list">
        {category.projects.map(p => <ProjectCard project={p} />)}
      </div>
    </div>
  )
}