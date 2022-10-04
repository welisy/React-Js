type Text = {
  text: string,
  color?: string,
}

export default function Text({ text, color }: Text) {
  return(
    <h2 style={{color: color}}>{text}</h2>
  )
}