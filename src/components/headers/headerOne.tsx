import './headerOne.css'

interface headerOneProps {
  children: any
}

// Totally borrowed from a stack overflow thread
// Shoutout @electrophanteau on Stack Overflow
// SO Thread: https://stackoverflow.com/questions/15557627/heading-with-horizontal-line-on-either-side
// JSFiddle: http://jsfiddle.net/gKve7/
export function HeaderOne({ children }: headerOneProps) {
  return <h1 className="decorated h1"><span>{children}</span></h1>
}