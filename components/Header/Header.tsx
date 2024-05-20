import React, { useEffect, useRef } from "react";
import SupHeader from "./SupHeader";
import SubHeader from "./SubHeader";
import SubNav from "./SubNav";
import { useAppDispatch } from "@/redux/hooks";
import { closeSubNav } from "@/redux/features/AppSlice";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="flex flex-col w-full z-40 relative">
      <section className="z-40">
        <SupHeader />
        <SubHeader />
      </section>
      <SubNav />
    </nav>
  );
};

export default Header;
