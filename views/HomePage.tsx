"use client"

import Banner1 from "../components/sections/Banners/Banner1"
import RecommnededProducts from '../components/sections/Products/RecommendedProducts'
import Categories from "../components/sections/Products/Categories"
import OfferBanner from "../components/sections/Banners/OfferBanner"
import LoadLoading from "../components/loadings/LoadLoading"



const HomePage = () => {


    return (
        <>
            <div className="">
                <Banner1></Banner1>
                <Categories></Categories>
                <RecommnededProducts></RecommnededProducts>
                <OfferBanner />

            </div>
        </>
    )

}

export default HomePage