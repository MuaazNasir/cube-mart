"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getData, urlFor } from '../../../../sanity/utils';
import LoadLoading from '../../../../components/loadings/LoadLoading';
import CloseIcon from '@mui/icons-material/Close';
import { deleteProduct } from '@/redux/slices/useReducer';
import LoadError from '../../../../components/loadings/LoadError';

const page = () => {

    const selector = useSelector((state: any) => state.CartProducts);
    const dispatch = useDispatch();
    const [cartProducts, setCartProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                if (selector.length == 0) {
                    setError(true);
                }
                else {
                    const data = await getData(`*[_id in [${selector}]]`);
                    setCartProducts(data);
                    setError(false)
                }
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [selector])

    useEffect(() => {
        localStorage.setItem('cart', selector)
    }, [selector]);


    if (error) {
        return (
            <div className="w-full flex items-center justify-center">
                <Image src={'/gifs/cart.gif'} alt='cart' height={300} width={300} className='' />
            </div>
        )
    }

    if (loading) {
        return (
            <LoadLoading />
        )
    }


    return (
        <>

            <div className="">
                <div className="text-5xl font-sans font-extrabold my-4 text-center">Your Cart</div>
                <div className="flex flex-row justify-between items-center w-[80%] mx-auto">
                    {/* products */}
                    <div className="w-[50%] space-y-5">
                        {
                            cartProducts.map((product, i) => {
                                const { name, price, _id, image }: any = product;

                                return (
                                    <>
                                        <CartProductCard name={name} key={_id} image={image[0].asset} price={price} setTotalPrice={setTotalPrice} setTotalQuantity={setTotalQuantity} _id={_id} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="w-[20rem] h-[15rem] p-8 flex flex-col justify-start items-center bg-gray-100 border-2 border-gray-200 rounded-lg shadow-md shadow-gray-300 space-y-5">
                        <div className="text-2xl font-sans font-bold">Order Summary</div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="text-xl font-sans font-bold uppercase">Quantity : </div>
                                <div className="text-lg font-sans font-semibold">{totalQuantity} Product{totalQuantity > 1 && "s"}</div>
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                                <div className="text-xl font-sans font-bold uppercase">subtotal : </div>
                                <div className="text-lg font-sans font-semibold">${totalPrice}</div>
                            </div>
                        </div>
                        <Button variant='contained' className='bg-black text-gray-50 rounded-none w-[80%] border-[1px] border-solid border-t-gray-500 border-l-gray-500 border-b-gray-400 border-r-gray-400 hover:bg-gray-900'>Chech Out</Button>
                    </div>
                </div>
            </div>

        </>
    )
}


const CartProductCard = ({ name, image, price, setTotalPrice, setTotalQuantity, _id }: any) => {
    const [quantity, setQuantity] = useState<number>(1);
    const selector = useSelector((state: any) => state.CartProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        setTotalPrice((prev: number) => prev + price)
        setTotalQuantity((prev: number) => prev + 1)
    }, [])

    const deleteCartProduct = (_id: string) => {
        dispatch(
            deleteProduct(`"${_id}"`)
        )
    }

    return (
        <div className="flex flex-row items-center justify-around bg-gray-50 border-gray-800 border-2 rounded-md relative ">
            <Image src={urlFor(image).size(200, 200).url()} width={200} height={200} alt=''></Image>
            <div className="">
                <div className="text-xl font-sans font-bold capitalize">{name}</div>
                <div className="text-lg font-sans font-semibold">${price}</div>
                <div className="">
                    <button className="bg-gray-500 hover:bg-gray-600 transition-colors rounded-full py-1 px-3 text-lg text-white"
                        onClick={() => {
                            setQuantity(quantity + 1);
                            setTotalPrice((prev: number) => prev + price)
                            setTotalQuantity((prev: number) => prev + 1)
                        }}
                    > + </button>
                    <input className="w-[5rem] text-center text-lg p-2 bg-transparent" type="number" value={quantity} disabled></input>
                    <button className="bg-gray-500 hover:bg-gray-400 transition-colors rounded-full py-1 px-3 text-xl text-white"
                        onClick={() => {
                            if (quantity > 1) {
                                setQuantity(quantity - 1)
                                setTotalPrice((prev: number) => prev - price)
                                setTotalQuantity((prev: number) => prev - 1)
                            };

                        }}
                    > - </button>
                    <button className='absolute bottom-2 right-2 bg-red-500 rounded-full p-3 hover:bg-red-400 transition-colors '
                        onClick={() => deleteCartProduct(_id)}
                    >
                        <CloseIcon className='text-2xl text-white' />
                    </button>
                </div>
            </div>
        </div >
    )
}
export default page;