import './experience.css'
import { useContext, useState } from 'react'
import productExperience from '../../constants/product-experience'
import leadershipExperience from '../../constants/leadership-experience'
import { ProjectCategory } from './components/project-category'
import { HeaderOne } from '../headers'
import { ExperienceContext } from '../../contexts/useExperience'

enum ExperienceTab {
  product = 'product',
  leadership = 'leadership',
  speaking = 'speaking'
}

export function Experience() {
  const { showDetails, toggleDetails } = useContext(ExperienceContext)
  const orderedTabs = [ExperienceTab.product, ExperienceTab.leadership, ExperienceTab.speaking]
  const [currentTab, setCurrentTab] = useState<ExperienceTab>(ExperienceTab.product)

  return (
    <div className="experience-container">
      <HeaderOne>Experience</HeaderOne>
      <div className="experience-tabs">
        {orderedTabs.map(t => (
          <button
            className={"experience-tab" + (currentTab === t ? " selected-experience-tab" : "")}
            onClick={() => setCurrentTab(t)}
            >
              {t}
          </button>
        ))}
      </div>
      <button
        className="expand-details-button"
        onClick={() => toggleDetails()}
      >
        {showDetails ? '- hide project details' : '+ expand project details'}
      </button>
      {currentTab === ExperienceTab.product && 
        <div className="timeline">
          {productExperience.map(pe => <ProjectCategory category={pe} />)}
        </div>}
      {currentTab === ExperienceTab.leadership && 
        <div className="timeline">
          {leadershipExperience.map(le => <ProjectCategory category={le} />)}
        </div>}
      {currentTab === ExperienceTab.speaking &&
        <p>Coming soon!</p>
      }
    </div>
  )
}