import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {disablePageScroll, enablePageScroll} from "scroll-lock";

import {  lala } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";




const Header = () => {
  const pathname = useLocation(); // used to remember the URL of the current page when the menu option is pressed
  const [Navigation, setNavigation] = useState(false);
  const currentPath = `${pathname.pathname}${pathname.hash || ""}`;

  // Toggle navigation
const toggleNavigation = () => {
  if (Navigation) {
    setNavigation(false);
    enablePageScroll();
  } else {
    setNavigation(true);
    disablePageScroll();
  }
};

  // Close navigation
  const handleClick = () => {
    if (!Navigation) {
        return;
    }

    enablePageScroll();
    setNavigation(false);
  };

  // Update body background color when menu state changes
  // useEffect(() => {
  //   if (Navigation) {
  //     document.body.classList.add("bg-n-8");
  //   } else {
  //     document.body.classList.remove("bg-n-8");
  //   }
  //   return () => {
  //     document.body.classList.remove("bg-n-8");
  //   };
  // }, [Navigation]);

  // Handle viewport resize and reset state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && Navigation) {
        setNavigation(false); // Close menu when screen is resized above breakpoint
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [Navigation]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        Navigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 top-0 lg:px-7.5 xl:px-10 max-lg:py-0.5">
        {/* w-[9rem] xl:mr-8*/}
        <a href="/#hero" className="w-[9rem] block">
          <img src={lala} width={90} alt="JuvoU Logo" />
        </a>
        <nav
          className={`${
            Navigation ? "flex mt-[95px] font-semibold font-code" : "hidden "
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1  
                         hover:text-color-1 transition-colors
                         ${
                           item.onlyMobile ? "lg:hidden" : ""
                         } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold font-code
                         ${
                           currentPath === item.url
                             ? "z-2 lg:text-color-1 rounded-full  shadow-[0px_0px_200px_28px_rgba(200,165,131,1)]"
                             : "  lg:text-n-2"
                         } lg:leading-5 lg:hover:text-n-3 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <Button className="hidden lg:flex" href="/contact">
          Contact us
        </Button>

        <Button
          className="lg:hidden ml-auto"
          px="px-4"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={Navigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
