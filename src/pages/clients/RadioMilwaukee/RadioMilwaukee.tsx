import { HeaderOne, Title, PageContainer } from '../../../components'
import './RadioMilwaukee.css'

const README: JSX.Element[] = [
  <p>This public page displays the resulting iframes & some supplementary notes for the Radio Milwaukee Spinitron iframe CSS spruce up.</p>,
  <p>Other assets for this work including a copy of the stylesheet for each website and screenshots can be found <a href="https://drive.google.com/file/d/1WR6EPDy895OvJOFq3tm6Q4ZTKImjDUlI/view?usp=sharing" target="_blank" rel="noreferrer">here.</a></p>,
  <p>-</p>,
  <p>Each playlist view has its own {'<iframe>'} tag, which can receive its own styling for things like height, width, border, etc.</p>,
  <p>Height, width, & border are attributes that cannot be controlled from within the {'<iframe>'}, that is, they cannot be controlled from entering any CSS rules in the Spinitron Admin "Web Customization Stylesheet"</p>,
  <p>Each radiomilwaukee.org & hyfin.org will <strong>need to include</strong> some <em>minimal styling</em> on the {'<iframe>'} tag that is dropped in, namely the following</p>,
  <code>height: 100%; width: 100%; border: none;</code>
]

const NOTE_FONTS: JSX.Element[] = [
  <p>The custom CSS in Spinitron includes specific font & color declarations for each website.</p>,
  <p>This means that once the {'<iframe>'} is dropped into its respective website, it will grab the fonts that are already cached in the browser from the parent website.</p>,
  <p>This requires us to have slightly different custom stylesheets for each website in the Spinitron admin web customization, where each knows about its expected font family & color scheme.</p>,
  <p>For example, the WYMS stylesheet includes:</p>,
  <p className="rm-font-roboto">@font-face {'{'} font-family: "Roboto", sans-serif; {'}'}</p>,
  <p className="rm-font-roboto-condensed">@font-face {'{'} font-family: "Roboto Condensed", sans-serif; {'}'}</p>,
  <p>Whereas the HYFIN stylesheet includes:</p>,
  <p className="rm-font-syne">@font-face {'{'} font-family: "Syne", sans-serif; {'}'}</p>,
  <p className="rm-font-archivo-black">@font-face {'{'} font-family: "Archivo Black", sans-serif; {'}'}</p>,
  <p>NOTE!! I was able to get the iframe to grab the fonts by declaring the font-faces in the Spinitron Web Customization CSS exactly as they appear in the browser's cache, so this might be fragile. I assumed this is a risk worth taking.</p>
]

const MORE_TIME: JSX.Element[] = [
  <p>With a day's effort, I aimed to meet the requirements of: simple, cleaner, readable, & use the website fonts.</p>,
  <p>Here's a couple ideas of what "more" could look like:</p>,
  <ol>
    <li>(~ 1/2 day) Include the album/release info alongside the song name & artist. It was tricky styling around whether or not there was release information while maintaining uniform height of each row. Certainly doable, but I just didn't figure it out within the day.</li>
    <li>(~ 1/2 day) Figure out why the social/download links don't show on the Current Playlist (despite showing up on Now Playing)</li>
  </ol>,
]

export function RadioMilwaukee() {
  return (
    <PageContainer>
      <div>
        <Title nestedPage>Radio Milwaukee</Title>
        <HeaderOne>README</HeaderOne>
        <div className="rm-section-container">
          {README.map(line => line)}
        </div>
        <HeaderOne>A note about fonts</HeaderOne>
        <div className="rm-section-container">
          {NOTE_FONTS.map(line => line)}
        </div>
        
        <HeaderOne>WYMS iframes</HeaderOne>
        <div className="rm-section-container">
          <h2 className="rm-iframe-header">Current Playlist</h2>
          <code>{'<div style={{"height": 750px}}><iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-playlist" src="//widgets.spinitron.com/widget/current-playlist?station=wyms"></iframe></div>'}</code>
          <p>This {'<iframe>'} is also sitting in a container with its height set to 750px for ease of viewing. The {'<iframe>'} beneath is NOT in a conatiner, and thus is only filling up its "allowed height", which is small.</p>
          <div style={{"height": "750px"}} className="rm-iframe-container">
            <iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-playlist" src="//widgets.spinitron.com/widget/current-playlist?station=wyms"></iframe>
          </div>

          <hr />

          <h2 className="rm-iframe-header">Current Playlist (no height container)</h2>
          <code>{'<iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-playlist" src="//widgets.spinitron.com/widget/current-playlist?station=wyms"></iframe>'}</code>
          <div className="rm-iframe-container">
            <iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-playlist" src="//widgets.spinitron.com/widget/current-playlist?station=wyms"></iframe>
          </div>
          
          <hr />

          <h2 className="rm-iframe-header">Now Playing</h2>
          <code>{'<iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-now-playing" src="//widgets.spinitron.com/widget/now-playing-v2?station=wyms&num=5&sharing=1&cover=1&player=1&merch=1" allow="encrypted-media"></iframe>'}</code>
          <p>1) I don't know why this includes social links but the current playlist does not. They are simply ~not there~ when I inspect the page elements.</p>
          <p>2) I don't know why the iframe for "Now Playing" is scrollable while the javascript widget currently on radiomilwaukee.org only shows the 1 song.</p>
          <div className="rm-iframe-container">
            <iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-now-playing" src="//widgets.spinitron.com/widget/now-playing-v2?station=wyms&num=5&sharing=1&cover=1&player=1&merch=1" allow="encrypted-media"></iframe>
          </div>
        </div>

        <HeaderOne>HYFIN iframes</HeaderOne>
        <div className="rm-section-container">
          <h2 className="rm-iframe-header">Current Playlist</h2>
          <code>{'<div style={{"height": 750px}}><iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-playlist" src="//widgets.spinitron.com/widget/current-playlist?station=hyfin"></iframe></div>'}</code>
          <p>This {'<iframe>'} is also sitting in a container with its height set to 750px for ease of viewing. The {'<iframe>'} beneath is NOT in a conatiner, and thus is only filling up its "allowed height", which is small.</p>
          <div style={{"height": "750px"}} className="rm-iframe-container">
            <iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-playlist" src="//widgets.spinitron.com/widget/current-playlist?station=hyfin"></iframe>
          </div>

          <hr />

          <h2 className="rm-iframe-header">Current Playlist (no height container)</h2>
          <code>{'<iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-playlist" src="//widgets.spinitron.com/widget/current-playlist?station=hyfin"></iframe>'}</code>
          <div className="rm-iframe-container">
            <iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-playlist" src="//widgets.spinitron.com/widget/current-playlist?station=hyfin"></iframe>
          </div>
          
          <hr />

          <h2 className="rm-iframe-header">Now Playing</h2>
          <code>{'<iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-now-playing" src="//widgets.spinitron.com/widget/now-playing-v2?station=hyfin&num=5&sharing=1&cover=1&player=1&merch=1" allow="encrypted-media"></iframe>'}</code>
          <div className="rm-iframe-container">
            <iframe height="100%" width="100%" style={{"border": "none"}} title="wyms-now-playing" src="//widgets.spinitron.com/widget/now-playing-v2?station=hyfin&num=5&sharing=1&cover=1&player=1&merch=1" allow="encrypted-media"></iframe>
          </div>
        </div>

        <HeaderOne>Given more time...</HeaderOne>
        <div className="rm-section-container">
          {MORE_TIME.map(line => line)}
        </div>
      </div>
    </PageContainer>
  )
}

/* From the custom stylesheet in Spinitron before I touched it
.view-page .head .station {
    display: none;
    flex-wrap: wrap;
    margin: 0 -0.5rem;
}
*/