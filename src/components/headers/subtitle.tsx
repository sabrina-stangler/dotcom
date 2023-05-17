import './subtitle.css'

interface SubtitleProps {
  children: any
}

export function Subtitle({ children }: SubtitleProps) {

  return (
    <div className="subtitle-container">
      <span className="subtitle-text">{children}</span>
    </div>
  )
}