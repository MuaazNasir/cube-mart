"use client"

import Image from "next/image"
import { getData, urlFor } from "../../../sanity/utils"
import LoadError from "../../loadings/LoadError"
import LoadLoading from "../../loadings/LoadLoading";
import { useRouter } from "next/navigation";

const Categories = async () => {

    const categories = await getData(`*[_type == 'categories']`);


    const colors = [
        [
            'bg-blue-400',
            'bg-red-500'
        ],
        [
            'bg-green-400',
            'bg-yellow-500'
        ],
        [
            'bg-gray-400',
            'bg-red-500'
        ],
        [
            'bg-red-400',
            'bg-pink-500'
        ]
    ]

    if( !categories ){
        return (
            <LoadLoading/>
        )
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">

                <div className="text-4xl text-blue-500 font-extrabold tracking-widest my-5">
                    Categories
                </div>

                <div className="flex flex-row w-[75%] mx-auto bg-gray-100 rounded-lg shadow-lg shadow-gray-200 p-5 justify-between flex-wrap lg:justify-around ">


                    {
                        
                                categories.map((elem: any, i: number) => {
                                    const { name, _id, image } = elem;
                                    return (
                                        <CategoryBox imgUrl={urlFor(image).size(100, 100).url()} text={name} bgClr={colors[i][0]} hvrClr={colors[i][1]} key={_id}/>
                                    )
                                })
                            
                    }

                </div>

            </div>
        </>
    )
}

const CategoryBox = ({ imgUrl, text, bgClr, hvrClr }: any) => {
    const router = useRouter();
    return (
        <>
            <div className={`${bgClr} rounded-xl p-2 w-full sm:w-full md:w-full lg:w-[20rem] h-[8rem] group relative overflow-hidden my-3 md:mx-3 lg:mx-0lg:m-5 md:basis-[45%] lg:basis-[45%]`} onClick={()=>router.push(`/categories`)}>

                <Image src={imgUrl} alt="" height={100} width={100}></Image>
                <div className={`text-lg text-white rotate-[-90deg] absolute top-[50%] right-[0px] -translate-y-1/2 group-hover:rotate-[0deg] group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all group-hover:text-white group-hover:text-xl z-[1] font-mono font-bold`}>
                    {text}
                </div>
                <div className={`w-[100%] h-[100%] ${hvrClr} absolute top-0 left-[-100%] rounded-xl backdrop-blur-60 bg-opacity-80 group-hover:left-[0] transition-all`}>

                </div>
            </div>
        </>
    )
}

export default Categories