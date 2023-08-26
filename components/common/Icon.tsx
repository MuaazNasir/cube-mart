import React from 'react'
import Image from 'next/image'

const Icon = () => {
    return (
        <Image src={'/icons/cube.png'} height={50} width={50} alt='cube' />
    )
}

export default Icon