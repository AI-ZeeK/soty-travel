import { footerData } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

type Props = {};

const Footer = (props: Props) => {
  const pathname = usePathname();
  const nav_pathname = pathname.split("/")[1];
  return (
    <section
      className={`${inter.className} p-8 py-16 lg:px-32 bg-black text-white grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:gap-32 gap-8`}
    >
      <div className="flex flex-col justify-start items-start gap-8">
        <Link
          href={"/"}
          className="text-2xl uppercase w-40 h-16 flex flex-col justify-start items-start"
        >
          <div>Fly</div>
          <strong className="translate-x-4">Travels</strong>
        </Link>
        <p className={`${inter.className} tracking-wide text-sm`}>
          Elevate your travel experience
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex lg:gap-16 ">
        {footerData.map((footerItem) => (
          <div key={footerItem.id} className={` flex flex-col gap-4`}>
            <h1 className="text-xl h-full sm:h-12 flex justify-start whitespace-nowrap items-center">
              {footerItem.head}
            </h1>
            <ul
              className={`flex flex-col justify-center text-sm items-start gap-2`}
            >
              {footerItem.links.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    `/${nav_pathname}` === item.link
                      ? "text-[#23A6F0]"
                      : "text-[#CFCFCF]"
                  } hover:text-[#23A6F0]`}
                >
                  <Link href={item.link} className={` whitespace-nowrap`}>
                    {" "}
                    {item.desc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
