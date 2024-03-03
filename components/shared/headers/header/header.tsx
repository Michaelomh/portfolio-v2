// SHOULD ADD SOME COOL TRANSITIONS HERE.
export const Header = ({ title }: { title: string }) => {
  return (
    <p className="pb-2 font-heading text-xl font-medium uppercase tracking-[0.03em] text-stone-600">
      <span className="pr-2 text-xl font-black">/</span>
      {title}
    </p>
  )
}
