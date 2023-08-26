'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import LoadLoading from '../../../../components/loadings/LoadLoading'
import { getData, urlFor } from '../../../../sanity/utils'
import CartIcon from '../../../../public/icons/Cart'
import { Button } from '@mui/material'
import LoadError from '../../../../components/loadings/LoadError'
import ProductCard from '../../../../components/common/ProductCard'

type categoryProducts = {
    category: any,
    products: any[]
}[]

const Categories = () => {


    const [categories, setCategories] = useState<any[]>();
    const [categoryProducts, setCategoryProducts] = useState<categoryProducts>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [product, setproduct] = useState<any>();
    let a: categoryProducts = [];

    useEffect(() => {
        const fetchData = async () => {
            const categories = await getData(` *[ _type == 'categories' ]{name,image} `)
            const products = await getData(` *[ _type == 'product' ]{...,'category':category[]->name}`);
            setCategories(categories)
            setproduct(products)
            for (let i = 0; i < categories.length; i++) {

                let category = categories[i];

                let result: { category: string, products: any[] } = {
                    category: category,
                    products: []
                }

                for (let j = 0; j < products.length; j++) {

                    let selectedProduct = products[j];
                    let SPcategory = selectedProduct.category[0];

                    if (category.name == SPcategory) {
                        result['products'].push(selectedProduct);
                    }

                }
                a[i] = result
            }

            setCategoryProducts(a);
        }
        fetchData();

    }, [])

    if (!product || !categories) {
        return (
            <LoadLoading />
        )
    }



    return (
        <>
            <div className="space-y-5">
                <div className="text-5xl text-center text-black font-sans font-extrabold">Categories</div>
                <div className="flex flex-row flex-wrap bg-gray-50 !px-4 !py-5">

                    {
                        categoryProducts && categoryProducts.map((category, i) => {
                            return (
                                <>
                                    <div className="w-full text-3xl font-sans my-3 font-extrabold text-center capitalize" key={i}>{category.category.name}</div>
                                    <div className="flex flex-row flex-wrap justify-center items-center w-full bg-gray-100 rounded-md" >

                                        {
                                            category.products.map((product, i) => {
                                                const { name, description, image, price, slug, rating, _id } = product;

                                                return (
                                                    <>
                                                        <ProductCard name={name} price={price} image={image[0]} rating={rating} slug={slug} key={_id} _id={_id}></ProductCard >
                                                        </>
                                    )

                                                })
                                            }
                                </div >

                                </>
                )
                        })
                    }
            </div>
        </div >
        </>
    )
}


export default Categories;
