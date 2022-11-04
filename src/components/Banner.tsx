import { HiOutlineSpeakerphone } from 'react-icons/hi'

export const Banner = () => {
  return (
    <>
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <HiOutlineSpeakerphone
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <div className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">Coding Test</span>
                <span className="hidden md:inline">A Blog Web App.</span>
              </div>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"></div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3"></div>
          </div>
        </div>
      </div>
    </>
  )
}
