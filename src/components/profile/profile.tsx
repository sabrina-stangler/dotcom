import { BIO_PARAGRAPHS } from '../../constants'
import SelfiePurple from '../../assets/images/me/selfie-purple-head-square.jpg'
import './profile.css'
import { HeaderTwo } from '../headers/headerTwo'

export function Profile() {

  return (
    <div className="profile-container">
      <div className="profile-row">
        <div className="profile-primary-photo">
          <img src={SelfiePurple} alt="headshot selfie with bob-length purple hair, purple winged eyeliner, and clear glasses" className="profile-primary-photo-img" />
        </div>
        <div className="profile-info-container">
          <HeaderTwo>#README</HeaderTwo>
          <div className="profile-bio">{BIO_PARAGRAPHS.map(line => <div>{line}</div>)}</div>
        </div>
      </div>
    </div>
  )
}