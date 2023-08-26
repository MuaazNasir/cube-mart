"use client"
import Link from "next/link";
import CartIcon from "../../public/icons/Cart";
import { Button, Switch } from "@mui/material";
import Hamburger from "../../public/icons/HamBurger";
import CloseIcon from "../../public/icons/Close";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icon from "../common/Icon";
import NavCartIcon from "../common/NavCartIcon";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/slices/useReducer";


const Navbar = () => {

  const [isNavOpen, setNavOpen] = useState(false);


  const dispatch = useDispatch();

  useEffect(() => {
    const localData = JSON.stringify(localStorage.getItem('cart'));
    if (localData !== "") {
      let parsed = JSON.parse(localData);
      if (parsed) {
        parsed = parsed.split(',')
        dispatch(
          addProduct(parsed)
        )
      }
    }
  }, [dispatch])

  return (
    <>
      <header className="">
        <nav className="w-[95%] flex flex-row justify-around items-center mx-auto py-5">
          <div className="flex flex-row items-center space-x-5">
            <Icon></Icon>
            <div className="text-2xl text-center text-black font-bold">
              Cube-Mart
            </div>
          </div>

          <div className="">

            <ul className={`${isNavOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:justify-around space-y-5 md:space-y-0 justify-center items-center space-x-0 md:space-x-5 text-md font-semibold absolute md:static w-[100%] h-[100%] bg-blue-500 bg-opacity-90 backdrop-blur-90 md:bg-transparent top-0 left-0 z-50 backdrop-blur-md`}>

              <li>
                <Link href={'/'} onClick={() => { setNavOpen(false) }} className={`${isNavOpen?"text-white font-semibold":"text-black"}`}>Home</Link>
              </li>
              <li>
                <Link href={'/products'} onClick={() => { setNavOpen(false) }} className={`${isNavOpen?"text-white font-semibold":"text-black"}`}>Products</Link>
              </li>
              <li>
                <Link href={'/categories'} onClick={() => { setNavOpen(false) }} className={`${isNavOpen?"text-white font-semibold":"text-black"}`}>Categories</Link>
              </li>
              <li className=" block md:hidden">
                <Link href={'/cart'} passHref className="rounded-full overflow-hidden" onClick={() => { setNavOpen(false) }}>
                  <Button variant="text" className="rounded-full">
                    <CartIcon size={30} color="white"></CartIcon>
                  </Button>
                </Link>
              </li>
              <li className=" block md:hidden">
                <Link href={'/'} passHref>
                  <Button variant="outlined" onClick={() => { setNavOpen(false) }} className="border-black text-black">Login</Button>
                </Link>
              </li>

            </ul>
          </div>

          <div className="">

            <ul className="hidden flex-row items-center justify-center space-x-4 md:flex">
              <li>
                <Link href={'/'} passHref>
                  <Button variant="outlined" onClick={() => { setNavOpen(false) }} className="border-black text-black">Login</Button>
                </Link>
              </li>
              <li>
                <NavCartIcon />
                {/* <Link href={'/cart'} className="rounded-full overflow-hidden">
                  <Button variant="text" className="rounded-full">
                    <CartIcon size={30} ></CartIcon>
                  </Button>
                </Link> */}
              </li>
            </ul>


          </div>
          {
            isNavOpen ? (
              <CloseIcon className="md:hidden pl-4 border-l-2 border-l-black z-50" size={50} clickValue={() => setNavOpen(false)} />
            ) : (
              <Hamburger className="md:hidden pl-4 border-l-2 border-l-black" size={50} clickValue={() => setNavOpen(true)}></Hamburger>
            )
          }


        </nav>
      </header >
    </>
  )
}

export default Navbar