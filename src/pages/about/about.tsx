import { Experience, PageContainer, Profile, Title } from '../../components';
import './about.css';

export function About() {

  return (
    <PageContainer>
      <Title>About</Title>
      <div className="about-container">
        <Profile />
        <Experience />
      </div>
    </PageContainer>
  )
}