"use client";
import { navData } from "@/data/data";
import { setSubNav } from "@/redux/features/AppSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {};

const SubHeader = (props: Props) => {
  const pathname = usePathname();
  const nav_pathname = pathname.split("/")[1];
  const dispatch = useAppDispatch();
  const { openSubNav, isFilterNav } = useAppSelector((state) => state.AppSlice);

  return (
    <div
      className={`${
        openSubNav || isFilterNav
          ? "lg:border-b-2 lg:border-[#d3d3d3]"
          : "border-b-2 border-[#d3d3d3]"
      } p-4 bg-white text-black h-20 gap-4 flex justify-between w-full items-center px-6 lg:px-32`}
    >
      <div className="flex justify-start items-center gap-4">
        <Link
          href={"/"}
          className="text-2xl uppercase w-40 h-16 flex flex-col justify-start items-start"
        >
          <div>Fly</div>
          <strong className="translate-x-4">Travels</strong>
        </Link>
      </div>
      <ul className="justify-center items-center font-semibold  text-sm hidden md:flex gap-2">
        {navData.map((data) => (
          <Link
            key={data.id}
            href={data.link}
            className={`${
              `/${nav_pathname}` === data.link
                ? "after:w-full"
                : "text-[#737373]"
            } ${
              montserrat.className
            } flex justify-center tracking-wide items-center  cursor-pointer p-2 w-full transition-all relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-1  rounded-full  after:bg-black after:content-[''] after:transition-all hover:after:w-full`}
          >
            <span
              className={`${montserrat.className} text-sm whitespace-nowrap font-semibold`}
            >
              {data.head}
            </span>
          </Link>
        ))}
      </ul>
      <div className="flex justify-end items-center gap-1 ">
        <span
          className="p-2 md:hidden cursor-pointer"
          onClick={() => {
            dispatch(setSubNav());
          }}
        >
          {openSubNav ? (
            <IoMdClose fontSize={32} className="" />
          ) : (
            <RxHamburgerMenu fontSize={32} className="" />
          )}
        </span>
        {/* {!isUser && (
          <Link
            href={"/auth"}
            className="cursor-pointer md:flex p-2 hidden text-sm justify-center items-center gap-1 "
          >
            <FaRegUser fontSize={18} />
            <span
              className={`${montserrat.className} font-bold whitespace-nowrap tracking-wider`}
            >
              Login / Register
            </span>
          </Link>
        )} */}

        <Link
          href={"/shop/cart"}
          className="cursor-pointer whitespace-nowrap text-sm bg-[#D9D9D9] hover:bg-[#cccccc] md:flex hidden justify-center items-center gap-2 p-2 px-6 rounded-full h-10"
        >
          FLY WITH US
        </Link>
        {/* {isUser && (
          <Link
            href={"/account"}
            className="cursor-pointer md:flex p-2 hidden text-sm justify-center items-center gap-1 "
          >
            <FiUser fontSize={18} />
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default SubHeader;
