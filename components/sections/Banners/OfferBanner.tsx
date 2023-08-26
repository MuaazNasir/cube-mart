import Image from 'next/image'

const OfferBanner = () => {
    return (
        <>
            <div className="flex flex-col bg-gray-200 w-[80%] mx-auto p-5 my-10 h-min rounded-lg ">

                <div className="text-center text-4xl font-extrabold tracking-widest mt-2 mb-5 text-gray-700">
                    Hunter Offers
                </div>

                <div className="flex flex-col md:flex-row w-full justify-center items-center h-full space-y-5 md:space-y-0 md:space-x-5">

                    <div className="flex flex-col w-full space-y-2 justify-center items-center">

                        <div className="bg-blue-500 w-[90%] h-36 rounded-lg flex flex-col items-center justify-around">

                            <div className="text-center text-xl text-gray-100 tracking-widest font-sans capitalize font-extrabold mt-1">
                                the hunter offer
                            </div>
                            <div className="text-center text-blue-100 text-lg">
                                get upto <br /><div className="text-3xl bg-white bg-opacity-20 rounded-xl p-1 font-extrabold tracking-widest my-1">60% off</div> on all products
                            </div>

                        </div>

                        <div className="bg-gray-700 w-[90%] h-36 rounded-lg flex flex-col items-center justify-around">

                            <div className="text-white text-2xl text-center font-mono font-extrabold my-2 capitalize">
                                Get 30% off
                            </div>
                            <div className="space-y-1">
                                <div className="text-lg text-white font-light text-center">
                                    use the prome code
                                </div>
                                <div className="p-2 text-xl font-bold bg-white bg-opacity-10 rounded-lg text-gray-50 tracking-[0.4rem] uppercase">
                                    thecubesale
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="bg-green-500 w-full h-72 md:h-72 rounded-lg p-3 overflow-hidden">
                        <div className="capitalize text-left text-white font-mono font-lg font-bold">
                            bluetooth speaker
                        </div>
                        <div className="space-x-3">
                            <span className="line-through text-red-300 font-light tracking-widest">$750.00</span>
                            <span className="font-extrabold text-gray-100 text-lg">$599.00</span>
                        </div>
                        <div className="w-full relative">
                            <Image src={'/assets/speaker2.webp'} alt="" width={250} height={250} className='absolute top-1/2 left-1/2 -translate-x-1/2'></Image>
                        </div>
                    </div>

                    <div className="bg-orange-500 w-full h-72 md:h-72 rounded-lg p-3 overflow-hidden">
                        <div className="capitalize text-left text-white font-mono font-lg font-bold">
                            RGB Headphones
                        </div>
                        <div className="space-x-3">
                            <span className="line-through text-red-300 font-light tracking-widest">$2000.00</span>
                            <span className="font-extrabold text-gray-100 text-lg">$1500.00</span>
                        </div>
                        <div className="w-full relative">
                            <Image src={'/assets/headphones_a_4.webp'} alt="" width={250} height={250} className='absolute top-1/2 left-1/2 -translate-x-1/2'></Image>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OfferBanner