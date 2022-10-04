interface InputProps {
  label: string,
  value: string | number,
  onChange: (value: string) => void
}
export default function Input({
  label,
  value,
  onChange,
}: InputProps){
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" value= {value} onChange={(event) => onChange(event.target.value) } />
    </div>
  )
}