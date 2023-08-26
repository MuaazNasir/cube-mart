import React from 'react'

const LoadError = ({name}:{name:string}) => {
    return (
        <>
            <div className='text-xl capitalize font-bold font-sans bg-red-500 rounded-xl p-2'><span className="px-3 rounded-full bg-yellow-400 mx-2">!</span>could not load {name}</div>
        </>
    )
}

export default LoadError