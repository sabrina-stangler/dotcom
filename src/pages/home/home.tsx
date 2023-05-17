import { PageContainer, Title } from '../../components';
import { CB_TAGLINE } from '../../constants';
import CodeBrackets from '../../assets/images/services/code-brackets.svg'
import Phone from '../../assets/images/services/phone.svg'
import DthinkingSteps from '../../assets/images/services/dthinking-steps.svg'
import PenPostIt from '../../assets/images/services/pen-post-it.svg'
import StrategyMindmap from '../../assets/images/services/strategy-mindmap.svg'

import './home.css';

export function Home() {

  return (
    <PageContainer>
      <div className="header">
        <Title>Curious Bean</Title>
        {CB_TAGLINE.map(line => <p>{line}</p>)}
      </div>
      <div className="content">
        <div className="service-container">
          <div className="service-description">
            <h2>Web & Mobile Development</h2>
            <p>You got an idea? I'd love to bring it to life!</p>
          </div>
          <div className="service-image-pair">
            <img src={CodeBrackets} alt="code brackets" height="100vw" className="home-service-image" />
            <img src={Phone} alt="phone with apps" height="150vw" className="home-service-image" />
          </div>
        </div>
        <div className="service-container">
          <img src={StrategyMindmap} alt="mindmap with five circles extending from a larger center circle" height="175vw" className="home-service-image" />
          <div className="service-description">
            <h2>Product Strategy Consulting</h2>
            <p>You got an idea, but not sure how to approach getting to market? I'd love to help you identify an MVP, build a product roadmap, or synthesize your idea into a tangible product.</p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-description">
            <h2>Design Thinking Consulting</h2>
            <p>Need help getting your team started, unstuck, or just want a fresh perspective? I'd be happy to run you through a workshop or consult strategically to get you moving!</p>
          </div>
          <div className="service-image-pair">
            <img src={PenPostIt} alt="pen and post-it" height="125vw" className="home-service-image" />
            <img src={DthinkingSteps} height="150vw" alt="five steps of design thinking: empathize, define, ideate, prototype, and test" className="home-service-image" />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}