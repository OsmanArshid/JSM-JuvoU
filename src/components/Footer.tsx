

import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import Section from "./Section";
import foot from "../assets/public/footer-grid.svg";
import Button from "./Button";
import link from "../assets/public/link.svg";


const Footer = () => {
  return (
    <Section>
      <footer className="w-full pt-20 pb-10">
        {/* background grid */}
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img src={foot} alt="grid" className="w-full h-full opacity-50 " />
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
            Let's get in touch
          </Button>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright &copy; {new Date().getFullYear()}{" "}
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            <a
              href="https://www.linkedin.com/company/juvou-digital/"
              target="_blank"
            >
              <img src={link} alt="icons" width={25} height={20} />
            </a>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
