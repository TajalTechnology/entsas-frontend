"use client";
import { AlignJustify, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

const NavBar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollPosition > 80 ? "bg-white" : "bg-transparent hover:bg-white"
      }  fixed z-10  h-20  content-center w-full grid grid-cols-3 px-12 `}
    >
      <div className="flex items-center gap-6 justify-start">
        <div className=" cursor-pointer flex gap-2 items-center">
          <AlignJustify size={20} strokeWidth={1.5} /> <p>Menu</p>
        </div>
        <div className=" cursor-pointer flex gap-2 items-center">
          <Search size={20} strokeWidth={1.5} />
          <p>Search</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <p className="text-3xl font-bold tracking-widest cursor-pointer">
            LOUIS VUITTON
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-6 justify-end">
        <div className=" cursor-pointer">Call Us</div>
        <p className=" cursor-pointer">Wishlist</p>
        <div className=" cursor-pointer">
          <User size={20} strokeWidth={1.5} />
        </div>
        <div className=" cursor-pointer relative ">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <p className="bg-black w-3.5 h-3.5 absolute -top-2 -right-4 rounded-full text-white text-center text-[10px] flex justify-center">
            0
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
