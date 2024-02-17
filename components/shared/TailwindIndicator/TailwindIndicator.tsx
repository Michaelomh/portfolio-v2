import { MobileIcon, CardStackIcon, DesktopIcon } from '@radix-ui/react-icons'

export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="text-base fixed bottom-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-stone-600 p-2 font-sans font-semibold text-stone-200">
      <div className="block tablet:hidden">
        <MobileIcon className="h-6 w-6" />
      </div>
      <div className="hidden tablet:block desktop:hidden ">
        <CardStackIcon className="h-6 w-6" />
      </div>
      <div className="hidden tablet:hidden desktop:block ">
        <DesktopIcon className="h-6 w-6" />
      </div>
    </div>
  )
}
