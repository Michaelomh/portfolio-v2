import { MobileIcon, CardStackIcon, DesktopIcon } from '@radix-ui/react-icons'

export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-stone-600 p-2 font-sans text-base font-semibold text-stone-200">
      <div className="tablet:hidden block">
        <MobileIcon className="h-6 w-6" />
      </div>
      <div className="tablet:block desktop:hidden hidden ">
        <CardStackIcon className="h-6 w-6" />
      </div>
      <div className="tablet:hidden desktop:block hidden ">
        <DesktopIcon className="h-6 w-6" />
      </div>
    </div>
  )
}
