import './headerTwo.css'

interface HeaderTwoProps {
  children: any
}

export function HeaderTwo({ children }: HeaderTwoProps) {
  return <h2 className="h2">{children}</h2>
}