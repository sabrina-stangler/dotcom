import './profile.css'
// import CaliStuntin from '../../assets/images/me/cali-stuntin-cropped.jpg'
import RBG from '../../assets/images/me/costume-rbg.jpg'
import Graduation from '../../assets/images/me/me-collin-graduation.jpg'
import SelfiePurple from '../../assets/images/me/selfie-purple-head-square.jpg'
import SXSWTrio from '../../assets/images/me/sxsw-trio.jpg'
// import SelfieLolla from '../../assets/images/me/selfie-lolla-blue.jpg'
import { NAME, BIO_PARAGRAPHS } from '../../constants'

export function Profile() {

  return (
    <div className="profile-container">
      <div className="profile-row">
        <div className="profile-primary-photo">
          <img src={SelfiePurple} alt="headshot selfie with bob-length purple hair, purple winged eyeliner, and clear glasses" className="profile-primary-photo-img" />
        </div>
        <div className="profile-info-container">
          <div className="profile-name">{NAME}</div>
          <div className="profile-tagline">#README</div>
          <div className="profile-bio">{BIO_PARAGRAPHS.map(line => <div>{line}</div>)}</div>
        </div>
      </div>
      <div className="profile-gallery">
        <img src={Graduation} alt="graduation from MSOE with my partner collin" className="profile-gallery-photo-img" />
        <img src={RBG} alt="halloween costume as ruth bader ginsburg (rbg) with a hammer as a gavel" className="profile-gallery-photo-img" />
        {/* <img src={SelfieLolla} alt="selfie from lollapalooza music festival with graphic eyeliner and face glitter" className="profile-gallery-photo-img" />
        <img src={CaliStuntin} alt="me posing with hands on hips and hips tilted away from the camera laterally, i'm slaying" className="profile-gallery-photo-img" /> */}
        <img src={SXSWTrio} alt="me and my uif cohort at south by southwest (sxsw) in 2018" className="profile-gallery-photo-img" />
      </div>
    </div>
  )
}