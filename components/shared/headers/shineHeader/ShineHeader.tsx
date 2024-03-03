import '../header.css'

export const ShineHeader = ({ title }: { title: string }) => {
  return (
    <p className="shine">
      <span className="pr-2 text-xl font-black">/</span>
      {title}
    </p>
  )
}
