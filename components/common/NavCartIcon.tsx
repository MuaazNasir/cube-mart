import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import CartIcon from '../../public/icons/Cart';
import { useSelector } from 'react-redux'

const NavCartIcon = () => {

    const selector = useSelector((state:any) => state.CartProducts);
    // console.log(selector)

    return (
        <Link href={'/cart'} className="rounded-full overflow-hidden relative">
            <Button variant="text" className="rounded-full">
                <CartIcon size={30} ></CartIcon>
                <span className='absolute top-0 right-0 bg-red-500 rounded-full h-[20px] w-[20px] text-center'>
                    {
                        selector.length
                    }
                </span>
            </Button>
        </Link>
    )
}

export default NavCartIcon