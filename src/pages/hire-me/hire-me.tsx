import { Experience, HeaderOne, PageContainer, Profile, Title } from '../../components'
import Icon from '../../assets/curiousbean-icon-color.svg'
import './hire-me.css'
import { HeaderTwo } from '../../components/headers/headerTwo'

export function HireMe() {

  return (
    <PageContainer>
      <Title>Hire Me</Title>
      <div className="hire-me-container">
        <Profile />
        <div className="hire-me-cb-overview">
          <HeaderOne>Curious Bean LLC</HeaderOne>
          <div>
            <img src={Icon} alt="curiousbean-icon" height="100vh" />            
            <p>My freelancing company is Curious Bean LLC. More information on my services can be found on <a href="https://curiousbean.dev">curiousbean.dev</a>.</p>
            <p>Information on my personal experience is below, like a resume of sorts.</p>
            <HeaderTwo>Product Development</HeaderTwo>
            <p>I work with founders to build the early stages of their product. I'm equipped to synthesize a product vision into a development roadmap & minimum viable product (MVP), build that MVP, and facilitate customer interviews & beta testing.</p>
            <HeaderTwo>Design Thinking Consulting</HeaderTwo>
            <p>Whether you want to unstick your team, get a fresh perspective in the room, or identify your company's next steps, I'm here to help!</p>
            <p>I'm equipped to facilitate design thinking workshops in-person or online for small to large groups.</p>
            <p>I'm also equipped to strategically consult a team or department directly on a particular problem.</p>
          </div>
        </div>
        <Experience />
      </div>
    </PageContainer>
  )
}