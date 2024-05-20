// import { socialAccounts } from "@/data/data";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
// import { getIconComponent } from "../../data/data";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {};

const SupHeader = (props: Props) => {
  return (
    <div
      className={`${montserrat.className} px-6 lg:px-32 bg-black  text-white p-3 md:flex hidden flex-col md:flex-row justify-between items-start md:items-center text-sm md:h-10 h-20`}
    >
      <div className="justify-start flex gap-4 items-center">
        <div className="flex gap-1 font-semibold justify-center items-center">
          <MdOutlineLocalPhone fontSize={18} />
          <span className={`${montserrat.className} `}>+234 2016361010</span>
        </div>
      </div>
    </div>
  );
};

export default SupHeader;
