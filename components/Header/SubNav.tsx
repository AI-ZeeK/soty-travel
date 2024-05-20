"use client";
import { navData } from "@/data/data";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

type Props = {};

const SubNav = (props: Props) => {
  const pathname = usePathname();
  const nav_pathname = pathname.split("/")[1];
  const { openSubNav } = useAppSelector((state) => state.AppSlice);
  return (
    <nav
      className={`${
        openSubNav
          ? "translate-y-0 opacity-100"
          : "translate-y-[-100%] opacity-0"
      }  transition-all  duration-300 bg-white text-black top-[5rem] left-0 w-full z-20 absolute md:hidden`}
    >
      <ul className="justify-center items-start flex flex-col w-full">
        {navData.map((data) => (
          <Link
            key={data.id}
            href={data.link}
            className={`${
              `/${nav_pathname}` === data.link
                ? "bg-black text-white"
                : "text-black"
            } cursor-pointer p-3 px-4 w-full transition-all hover:bg-[#b8b8b8] hover:text-white`}
          >
            <span>{data.head}</span>
          </Link>
        ))}

        <Link
          href={"/auth"}
          className="bg-[#0a0a0a] hover:bg-[#b8b8b8] text-white w-full cursor-pointer flex p-3 justify-start items-center gap-2"
        >
          <FaRegUser fontSize={18} />
          <span className="whitespace-nowrap">FLY WITH US</span>
        </Link>
      </ul>
    </nav>
  );
};

export default SubNav;
