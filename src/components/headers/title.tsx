import './title.css'

interface TitleProps {
  children: any;
  nestedPage?: boolean;
}

export function Title({ children, nestedPage = false }: TitleProps) {
  
  return (
    <div className={nestedPage ? 'title-container title-container-tertiary' : 'title-container'}>
      <span className="title">{children}</span>
    </div>
  )
}