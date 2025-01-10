import { brainwave } from "../assets";
import {navigation} from "../constants";
import {useLocation} from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";


const Header = () => {
    // this gives us the current URL we are on our site
    const pathname = useLocation();
    const [Navigation, setNavigation] = useState(false);
    const [open, setOpen] = useState(false);
    
    // to make the menu appear when the button is pressed
    const toggleNavigation = () => {
        if (Navigation) {
          setNavigation(false);
        } else {
          setNavigation(true);
        }

        setOpen(!open);
    };

    // a func to close the menu when a feature is pressed
    const handleClick = () => {
        setNavigation(false);
    };
  
    return (
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          Navigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
          <a href="#hero" className="block w-[12rem] xl:mr-8">
            <img src={brainwave} width={190} height={40} alt="brainwave" />
          </a>

          <nav
            className={` ${
              Navigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code text-2xl uppercase text-n-1  
                         hover:text-color-1 transition-colors
                         ${
                           item.onlyMobile ? "lg:hidden" : ""
                         } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold font-code
                         ${
                           pathname.hash === item.url
                             ? "z-2 lg:text-color-1 rounded-full  shadow-[0px_0px_183px_38px_rgba(200,165,131,1)]"
                             : "  lg:text-n-2"
                         } lg:leading-5 lg:hover:text-n-3 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <HamburgerMenu open={open}/>
          </nav>

          <Button className="hidden lg:flex" href="#contact">
            Contact us
          </Button>

          <Button className="lg:hidden ml-auto" px="px-4" onClick={toggleNavigation}>
            <MenuSvg openNavigation={Navigation}/>
          </Button>
        </div>
      </div>
    );
};

export default Header;
