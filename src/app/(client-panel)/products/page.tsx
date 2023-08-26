"use client"

import react from 'react'
import { useEffect, useState } from "react";
import { getData, urlFor } from "../../../../sanity/utils";
import { usePathname } from "next/navigation";
import LoadLoading from "../../../../components/loadings/LoadLoading";
import Image from "next/image";
import { Button } from "@mui/material";
import CartIcon from "../../../../public/icons/Cart";
import ProductCard from '../../../../components/common/ProductCard';

const Page = () => {
  const slug = usePathname()?.split('/').pop();
  const [allProducts, setAllProducts] = useState<any>()
  const [recommended, setRecommended] = useState<any[]>([]);
  const [topRated, setTopRated] = useState<any[]>([]);
  const [mostSaled, setMostSaled] = useState<any[]>([]);
  const [choice, setChoice] = useState<any>('all')
  const [error, setError] = useState<any>(null);
  const [filteredProducts, setFilteredProducts] = useState<any>();


  const varitiesOptions = [
    {
      name: 'all',
      title: "All"
    },
    {
      name: 'recommended',
      title: "Recommended"
    },
    {
      name: 'topRated',
      title: "Top Rated"
    },
    {
      name: 'mostSaled',
      title: "Most Saled"
    },
  ]


  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const products = await getData(` *[ _type == 'product' ] `);
        setAllProducts(products)
        setFilteredProducts(products);
        for (let i = 0; i <= products.length; i++) {

          let isRecom = products[i].recommended == true;
          let isTopRated = (products[i].rating >= 4) == true;
          let isMostSaled = products[i].mostSaled == true;
          if (isRecom) {
            setRecommended((prev) => (
              [
                ...prev,
                products[i]
              ]
            ))
          }
          if (isTopRated) {
            setTopRated((prev) => (
              [
                ...prev,
                products[i]
              ]
            ))
          }
          if (isMostSaled) {
            setMostSaled((prev) => (
              [
                ...prev,
                products[i]
              ]
            ))
          }
        }
        setError(false);
      } catch (err) {
        setError(err);
      }
    };

    fetchProduct();
  }, [choice, allProducts, recommended, topRated, mostSaled, slug]);


  const handleClick = (e: any) => {

    setChoice(e.target.name);


  }

  useEffect(() => {
    if (choice == 'all') {
      setFilteredProducts(allProducts)
    }
    if (choice == 'recommended') {
      setFilteredProducts(recommended)
    }
    if (choice == 'topRated') {
      setFilteredProducts(topRated)
    }
    if (choice == 'mostSaled') {
      setFilteredProducts(mostSaled)
    }
  })

  if (!filteredProducts) {
    return (
      <LoadLoading />
    )
  }

  return (
    <>
      <div className="space-y-8">
        <div className="text-5xl text-gray-950 font-extrabold font-sans text-center my-4">Products</div>

        <div className="flex flex-row w-[50%] items-center justify-around">

          {
            varitiesOptions.map((elem, i) => {
              const { name, title } = elem;
              return (
                <>
                  <Button className={`${choice == name ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-black"} text-lg font-sans capitalize font-extrabold hover:bg-gray-700 hover:text-white transition-all duration-300 origin-center`} variant='outlined' name={name} onClick={handleClick}>{title}</Button>
                </>
              )
            })
          }
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center">
          {
            filteredProducts.map((elem: any, i: number) => {

              const { name, description, image, slug, price, _id, rating } = elem
              return (
                <>
                  <ProductCard name={name} image={image[0]} slug={slug} price={price} rating={rating} _id={_id} key={_id} />
                </>
              )
            })
          }
        </div>

      </div>
    </>
  );
};

export default Page;
