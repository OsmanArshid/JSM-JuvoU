import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import Section from "./Section";
import foot from "../assets/public/footer-grid.svg";
import Button from "./Button";
import link from "../assets/public/link.svg";
import {footpic} from "../assets";

const Footer = () => {
  return (
    <Section>
      <footer>
        <div className="justify-center items-center text-lg flex lg:-mt-12 xl:-mt-20 font-now text-n-2 font-semibold">
          {" "}
          Not your typical
          <img src={footpic} width={30} />
          er
        </div>
        <div className="w-full pt-[65px] xl:-mb-[70px] lg:-mb-[50px] md:-mb-[24px] sm:-mb-[24px] ">
          {/* background grid */}
          <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img src={foot} alt="grid" className="w-full h-full opacity-50" />
          </div>

          <div className="flex flex-col items-center">
            <h1 className="heading font-now lg:max-w-[45vw]">
              Ready to take <span className="text-color-1">your</span> digital
              presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
              Reach out to <span className="text-color-1">JuvoU</span> today and
              let&apos;s discuss how we can help you achieve your goals.
            </p>

            <Button href="/contact" icon={<FaLocationArrow />}>
              Grow with us
            </Button>
          </div>

          <div className="flex mt-16 md:flex-row flex-col justify-between items-center mb-">
            <p className="px-8 md:text-base text-sm font-now">
              Copyright &copy;{" "}
              <span className="text-color-1"> {new Date().getFullYear()}</span>
              <br />
              <span className="ml-9">JuvoU</span>
            </p>

            <div className="xl:mt-0 mt-7 px-8 flex items-center md:gap-3 gap-6">
              <a
                href="https://www.linkedin.com/company/juvou-digital/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-14 h-8 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-sm"
                  src={link}
                  alt="icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;


          // <div className="mb-3 text-lg flex mt-5 sm:mt-5 sm:mr-0 md:mr-[85px] lg:mr-[85px] xl:mr-[85px] font-now text-n-2 font-semibold">
          //   {" "}
          //   Not your typical
          //   <img src={footpic} width={30} />
          //   er
          // </div>;
