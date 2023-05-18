import { PageContainer, Profile, Title } from '../../components'
import CaliStuntin from '../../assets/images/me/cali-stuntin-cropped.jpg'
import RBG from '../../assets/images/me/costume-rbg.jpg'
import Graduation from '../../assets/images/me/me-collin-graduation.jpg'
import SXSWTrio from '../../assets/images/me/sxsw-trio.jpg'
import SelfieLolla from '../../assets/images/me/selfie-lolla-blue.jpg'
import './about.css'

export function About() {
  return (
    <PageContainer>
      <Title>Sabrina Stangler</Title>
      <div className='about-container'>
        <Profile />
        <div className="about-gallery">
          <img src={Graduation} alt="graduation from MSOE with my partner collin" className="about-gallery-photo-img" />
          <img src={RBG} alt="halloween costume as ruth bader ginsburg (rbg) with a hammer as a gavel" className="about-gallery-photo-img" />
          <img src={SelfieLolla} alt="selfie from lollapalooza music festival with graphic eyeliner and face glitter" className="about-gallery-photo-img" />
          <img src={CaliStuntin} alt="me posing with hands on hips and hips tilted away from the camera laterally, i'm slaying" className="about-gallery-photo-img" />
          <img src={SXSWTrio} alt="me and my uif cohort at south by southwest (sxsw) in 2018" className="about-gallery-photo-img" />
        </div>
      </div>
    </PageContainer>
  )
}
