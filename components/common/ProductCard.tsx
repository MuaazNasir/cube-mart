"use client"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "../../sanity/utils"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { addProduct } from "@/redux/slices/useReducer"
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast'


const ProductCard = ({ name, price, rating, image, _id, slug }: any) => {


    const notify = () => toast('Product Added To Cart', { duration: 3000 })
    const dispatch = useDispatch();
    const selector: string | string[] = useSelector((state: any) => state.CartProducts);

    const ratingArr = [];
    for (let index = 0; index <= 4; index++) {
        ratingArr.push(0);
    }

    const handleCartClick = (_id: string) => {
        if (selector.includes(`"${_id}"`)) {
            return;
        };
        dispatch(
            addProduct([`"${_id}"`])
        );
        // setShowAlert(true)
        notify()
    }

    useEffect(() => {
        localStorage.setItem('cart', String(selector))
    }, [selector])

    return (
        <>
            <div className="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg m-5 transition-all hover:shadow-gray-400 shadow-md">
                <Toaster position="top-center" toastOptions={{
                    className: "bg-green-300 text-lg text-white font-bold tracking-wide"
                }} />

                <Link href={`/products/${slug.current}`} passHref>
                    <Image className="p-8 rounded-t-lg mx-auto hover:scale-105 transition-all" src={urlFor(image).size(250, 250).url()} height={250} width={250} alt="product image" />
                </Link>
                <div className="px-5 pb-5">
                    <Link href={`/products/${slug.current}`} passHref>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 capitalize">{name}</h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5 cursor-default">
                        {
                            ratingArr.map((elem, i) => {
                                return (
                                    <>
                                        <svg className={`w-4 h-4 ${rating - 1 >= i ? "text-yellow-300" : "text-gray-400"} mr-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </>
                                )
                            })
                        }

                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 cursor-default">{rating}.0</span>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-5 flex-wrap ">
                        <span className="text-3xl font-bold text-gray-900 cursor-default">${price}</span>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={() => handleCartClick(_id)}>Add to cart</button>

                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductCard