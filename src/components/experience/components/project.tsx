import { useContext } from 'react'
import { ExperienceContext } from '../../../contexts/useExperience'
import { Project } from '../../../models'
import './project.css'
import { ProjectTags } from './tags'

export interface ProjectProps {
  project: Project
}

export function ProjectCard({ project }: ProjectProps) {
  const { title, description, bullets, attrs, links } = project
  const { showDetails } = useContext(ExperienceContext)
  
  return (
    <div className="project-container">
      <div className="project-content">
        <span className="project-title">{title}: {description}</span>
        {showDetails && <div className="project-bullets">
          {bullets && bullets.length > 0 &&
            <ul className="project-bullets-ul">
              {bullets.map(b => <li>{b}</li>)}
            </ul>}
        </div>}
        {showDetails && links && <div className="project-links">
          {links.map((l, i) => {
            let index = ''
            for(let j = 0; j<=i; j++) {
              index = index.concat('!')
            }
            return (
              <a href={l.href}>{index} {l.label}</a>
            )
          })}
        </div>}
      </div>
      <div className="project-attrs">
        <ProjectTags tags={attrs} />
      </div>
    </div>
  )
}