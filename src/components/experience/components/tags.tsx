import { ProjectAttr } from '../../../models'
import './tags.css'

export interface ProjectTagsProps {
  tags: ProjectAttr[]
}

export function ProjectTags({ tags }: ProjectTagsProps) {

  let pills: JSX.Element[] = []
  tags.sort((a,b) => a.localeCompare(b)).forEach(t => {
    let icon = <></>
    switch(t) {
      // Product Tags
      case ProjectAttr.fullstack:
        icon = <i className="fa-solid fa-arrows-up-down"></i>
        break;
      case ProjectAttr.frontend:
        icon = <i className="fa-solid fa-arrow-up"></i>
        break;
      case ProjectAttr.backend:
        icon = <i className="fa-solid fa-arrow-down"></i>
        break;
      case ProjectAttr.react:
        icon = <div className="tag-circle tag-aqua"></div>
        break;
      case ProjectAttr.angular:
        icon = <div className="tag-circle tag-red"></div>
        break;
      case ProjectAttr.ionic:
        icon = <div className="tag-circle tag-blue"></div>
        break;
      case ProjectAttr.mobile:
        icon = <div className="tag-circle tag-green"></div>
        break;
      case ProjectAttr.product_management:
        icon = <div className="tag-circle tag-orange"></div>
        break;
      case ProjectAttr.team_lead:
        icon = <div className="tag-circle tag-yellow"></div>
        break;
      case ProjectAttr.ui_ux:
        icon = <div className="tag-circle tag-purple"></div>
        break;
      case ProjectAttr.design:
        icon = <div className="tag-circle tag-pink"></div>
        break;
      // Leadership Tags
      case ProjectAttr.eboard:
        icon = <div className="tag-circle tag-blue"></div>
        break;
      case ProjectAttr.top_dog:
        icon = <div className="tag-circle tag-red"></div>
        break;
      case ProjectAttr.volunteer:
        icon = <div className="tag-circle tag-green"></div>
        break;
      case ProjectAttr.promotion:
        icon = <div className="tag-circle tag-purple"></div>
        break;
      case ProjectAttr.elected:
        icon = <div className="tag-circle tag-aqua"></div>
        break;
      default: 
        icon = <div className="tag-circle tag-grey"></div>
    }
    pills.push(<ProjectTag tag={t} icon={icon} />)
  })
  return (
    <div className="project-tag-container">{pills}</div>
  )
}

export interface ProjectTagProp {
  tag: ProjectAttr
  icon: JSX.Element
}

export function ProjectTag({tag, icon}: ProjectTagProp) {

  return (
    <div className="project-tag">{icon}{tag}</div>
  )
}