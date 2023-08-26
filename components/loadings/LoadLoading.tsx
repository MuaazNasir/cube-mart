import React from 'react'

const LoadLoading = () => {
  return (
    // <div className='text-xl capitalize font-bold font-sans bg-yellow-400 rounded-xl p-2'>Loading... Please Wait</div>
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center backdrop-blur-[5px]">
      <div className="absolute inset-0 bg-blue-500 opacity-80 "></div>
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-8 border-white"></div>
      </div>
    </div>
  )
}

export default LoadLoading
