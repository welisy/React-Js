enum TypeButton {
  default = 'default', 
  primary = 'primary',
}

interface ButtonProps {
  text: string,
  type: string,
  size?: string,
  onClick: () => void
}

export default function Button({
  text,
  type,
  onClick,
  size = 'medium',
}: ButtonProps) {
  if (type === 'default') {
    return (
      <button className={`btn btn-default btn-${size}`}
        onClick={() => onClick()}
      >{text}</button>
    )
  } else {
    return (
      <button className={`btn btn-primary btn-${size}`}
        onClick={() => onClick()}
      >{text}</button>
    )
  }
}