"use client";

import { getData } from "../../../sanity/utils";
import { Fragment, useEffect, useState } from "react";
import LoadLoading from "../../loadings/LoadLoading";
import ProductCard from "../../common/ProductCard";

const RecommendedProducts = () => {
  const [products, setproducts] = useState<any>();

  const noOfProducts = 4;
  useEffect(() => {
    const fetchData = async () => {
      const products = await getData(
        ` *[_type == "product" && recommended == true][0..${noOfProducts - 1}] `
      );
      setproducts(products);
    };
    fetchData();
  }, []);

  if (!products) {
    return (
      <LoadLoading />
      // null
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center my-20 ">
        <div className="text-3xl text-blue-500 text-center font-extrabold tracking-[0.1rem] ">
          Recommended Products
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center">
          {products.map((e: any) => {
            const { name, _id, image, price, slug } = e;
            return (
              <Fragment key={_id}>
                <ProductCard
                  name={name}
                  price={price}
                  image={image[0]}
                  rating={4}
                  slug={slug}
                  _id={_id}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecommendedProducts;
