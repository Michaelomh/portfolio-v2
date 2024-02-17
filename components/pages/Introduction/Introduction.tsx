import './Introduction.css'

export const Introduction = () => {
  return (
    <div>
      <div>
        <h1 className="title-animation font-heading w-fit text-3xl font-extrabold tracking-[0.03em] text-transparent">
          Michael Ong
        </h1>
        <div className="desktop:my-8 my-4 text-balance">
          <h2 className="font-heading text-[24px] tracking-[0.06em]">Senior React Engineer</h2>
          <h3 className="font-heading text-[18px] tracking-[0.06em]">Design Systems & Interaction Design</h3>
        </div>
      </div>

      <div className="flex max-w-[400px] flex-col gap-4">
        <p className="text-balance text-lg font-normal  tracking-[0.03em] text-stone-400">
          Tempor et voluptate adipiscing magna in ipsum eiusmod culpa dolor nisi nostrud proident ex ipsum. Ut et
          deserunod non enim.
        </p>

        <p className="text-balance text-lg font-normal tracking-[0.03em] text-stone-400">
          Fugiat qui do adipiscing quis fugiat adipiscing elit nulla ad qui nulla{' '}
          <span className="font-semibold text-stone-100">qui amet sint ullamco sint anim. </span>
        </p>
      </div>
    </div>
  )
}
