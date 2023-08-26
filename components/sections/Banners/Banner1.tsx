"use client"
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Banner1 = () => {
    return (
        <>
            <div className="bg-darkestBlue p-5 rounded-2xl shadow-lg shadow-blue-400 h-96 relative my-5">

                <div className="flex flex-col justify-center items-center">
                    <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-400 tracking-widest my-7">
                        Buy The Best From
                    </div>
                    <div className="text-6xl font-[800] tracking-[0.09rem] text-gray-500 my-4 z-[1] ">
                        Cube-Mart
                    </div>
                    <div className="text-xl font-semibold tracking-[0.1rem] capitalize md:font-2xl text-gray-200 font-mono mt-14 mb-5 z-[1]">
                        here you can get the best gadgets .
                    </div>
                    <Link href={'/products'}>
                    <Button variant="outlined" className="border-2 border-blue-500 hover:border-2 hover:scale-105 transition-all z-[1] text-white font-bold tracking-wide">Shop Now !</Button>
                    </Link>
                </div>
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2">
                    <Image src={'/assets/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp'} alt='' width={300} height={300} priority></Image>
                </div>
            </div>
        </>
    )
}

export default Banner1