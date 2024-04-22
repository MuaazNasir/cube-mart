"use client";

import React, { useState, useEffect } from "react";
import { getData, urlFor } from "../../../../../sanity/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LoadLoading from "../../../../../components/loadings/LoadLoading";
import { addProduct } from "@/redux/slices/useReducer";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import ProductCard from "../../../../../components/common/ProductCard";

const Product = ({ props }: any) => {
  const selector: string | string[] = useSelector(
    (state: any) => state.CartProducts
  );
  const dispatch = useDispatch();
  const slug = usePathname()?.split("/").pop();
  const [product, setProduct] = useState<any>({});
  const [categoryProducts, setCategoryProducts] = useState<any>([]);
  const [largeImage, setLargeImage] = useState<string>("");
  const [Error, setError] = useState<boolean | undefined>();
  const notify = () => toast("Product Added To Cart", { duration: 3000 });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getData(
          `*[_type == 'product' && slug.current == "${slug}"]{..., 'category': category[0]->name}`
        );

        if (productData.length === 0) {
          setError(true);
          return;
        }

        const product = productData[0];

        setProduct(product);
        setLargeImage(urlFor(product.image[0]).size(350, 350).url());

        const fetchedCategoryProducts = await getData(
          `*[_type == "product" && category[0]->name == "${product.category}" && name != "${product.name}"]`
        );

        setCategoryProducts(fetchedCategoryProducts);
        setError(false);
      } catch (err) {
        setError(true);
        console.error(err);
      }
    };

    fetchProduct();
  }, [slug, getData, urlFor]);

  if (Error) {
    return <div>Product not found !!!</div>;
  }
  if (!Object.keys(product).length) {
    return <LoadLoading />;
  }
  const { name, image, category, description, price, _id } = product;
  const smallImg = 150;

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-20 w-[90%] mx-auto">
        <div className="bg-gray-100 rounded-md w-full mx-auto flex flex-col md:flex-row items-center md:justify-around p-5">
          {/* small images */}
          <div className="flex flex-row md:flex-col justify-center items-center space-y-2 space-x-2 md:space-x-0 w-full md:w-[20%] flex-wrap ">
            {image &&
              image.map((img: any, i: number) => (
                <Image
                  key={i}
                  src={urlFor(img).size(smallImg, smallImg).url()}
                  alt={"img"}
                  height={smallImg}
                  width={smallImg}
                  className="bg-gray-200 rounded-lg cursor-pointer"
                  onMouseEnter={() =>
                    setLargeImage(urlFor(img).size(350, 350).url())
                  }
                />
              ))}
          </div>

          {/* large image */}
          <div className="w-full md:w-[45%] flex flex-row justify-center items-center">
            <Image src={largeImage} alt={"img"} height={350} width={350} />
          </div>

          {/* detail section */}
          <div className="flex flex-col justify-center items-center md:items-center w-full md:w-[35%] space-y-6 ">
            {/* name and category */}
            <div className="space-y-3">
              <div className="text-3xl text-gray-950 font-extrabold font-sans tracking-widest capitalize">
                {name}
              </div>
              <div className="text-2xl text-gray-500 font-bold font-sans tracking-widest capitalize border-l-4 border-gray-600 px-3">
                {category}
              </div>
            </div>

            {/* Quantity */}
            {/* <div className="flex flex-row items-center justify-center space-x-10 flex-wrap">
              <div className="text-lg text-gray-700 font-semibold font-sans tracking-wide capitalize my-3 text-left hidden sm:block">
                quantity :
              </div>
              <div className="">
                <button className="bg-gray-500 rounded-full py-1 px-3 text-lg text-white" onClick={() => setQuantity(quantity + 1)}> + </button>
                <input className="w-[40px] text-center text-lg p-2" type="number" value={quantity} disabled></input>
                <button className="bg-gray-500 rounded-full py-1 px-3 text-xl text-white" onClick={() => { quantity <= 1 ? null : setQuantity(quantity - 1) }}> - </button>
              </div>
            </div> */}

            {/* price and cart */}
            <div className="flex flex-row justify-start items-center space-x-5 flex-wrap space-y-2">
              <button
                className="bg-gray-900 py-3 px-5 rounded-2xl text-lg font-sans font-semibold text-white capitalize"
                onClick={() => {
                  if (selector.includes(`"${_id}"`)) {
                    return;
                  }
                  dispatch(addProduct([`"${_id}"`]));
                  notify();
                }}
              >
                add to cart
              </button>
              <div className="text-3xl text-gray-950 font-extrabold ">
                ${price}
              </div>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="w-full">
          <div className="relative flex flex-row py-5 md:py-10 lg:py-12 border-b-2 border-gray-400 overflow-hidden">
            <div className="absolute top-0 left-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl -z-10 text-gray-100 tracking-[0.5rem] font-sans font-extrabold uppercase">
              overview
            </div>
            <div className="text-2xl sm:text-4xl text-gray-800 tracking-widest font-sans font-extrabold capitalize">
              product information
            </div>
          </div>

          {/* content */}
          <div className="my-3">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start space-x-6">
              <div className="text-xl text-gray-700 font-extrabold font-sans tracking-wide capitalize my-3 text-left w-[30%]">
                description :
              </div>
              <div className="text-lg text-gray-700 font-semibold font-sans tracking-wide capitalize my-3 text-left w-[70%]">
                {description}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start space-x-6">
              <div className="text-xl text-gray-700 font-extrabold font-sans tracking-wide capitalize my-3 text-left w-[30%]">
                tips to use :
              </div>
              <div className="text-lg text-gray-700 font-semibold font-sans tracking-wide capitalize my-3 text-left w-[70%]">
                <ul className="list-disc">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
            </div>
          </div>
          {categoryProducts.length > 0 && (
            <div className="flex flex-col justify-center items-center my-5 border-t-2 border-gray-500 py-5">
              <div className="text-2xl sm:text-4xl text-gray-800 tracking-widest font-sans font-extrabold capitalize">
                more from this category
              </div>
              <div className="flex flex-row items-center justify-center gap-2 w-full flex-wrap">
                {categoryProducts.map((elem: any) => {
                  const { name, price, rating, image, _id, slug } = elem;
                  return (
                    <ProductCard
                      name={name}
                      price={price}
                      rating={rating}
                      image={image[0].asset}
                      _id={_id}
                      slug={slug}
                      key={_id}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "bg-green-300 text-lg text-white font-bold tracking-wide",
        }}
      />{" "}
    </>
  );
};

export default Product;
