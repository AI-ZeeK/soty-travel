"use client";
import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import { closeSubNav } from "@/redux/features/AppSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import Footer from "../Footer/Footer";
type Props = {};

const Layout = ({
  children,
  modeKey,
}: Readonly<{
  children: React.ReactNode;
  modeKey: string;
}>) => {
  const headerRef: any = useRef(null);
  const bodyRef: any = useRef(null);
  const footerRef: any = useRef(null);
  const pathname = usePathname();
  const nav_pathname = pathname.split("/")[1];

  const dispatch = useAppDispatch();
  const { openSubNav } = useAppSelector((state) => state.AppSlice);

  const handleClickOutside = (event: any) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target) &&
      bodyRef.current.contains(event.target)
    ) {
      dispatch(closeSubNav());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    dispatch(closeSubNav());
  }, [dispatch, pathname]);

  const excludeSubNav = ["/auth", "/contact"];
  return (
    <ChakraProvider>
      <AnimatePresence mode="wait">
        <motion.div
          key={modeKey}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ delay: 0.25, ease: "easeOut", duration: 0.25 }}
        >
          <header ref={headerRef} className="sticky z-40 top-0">
            <Header />
          </header>
          <section ref={bodyRef}>
            <main className="">{children}</main>
            {
              <footer>
                <Footer />
              </footer>
            }
          </section>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  );
};

export default Layout;
