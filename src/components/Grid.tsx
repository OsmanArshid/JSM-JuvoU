import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../../data";
import Section from "./Section";
import PlusSvg from "../assets/svg/PlusSvg";

const Grid = () => {
  return (
    <Section
      id="about-us"
      className="-mt-[380px] lg:-mt-[395px] md:-mt-[410px] p-[30px] lg:p-[100px] sm:-mt-[270px]"
    >
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>

      <>
        <div className="hidden absolute top-[69.25rem] left-2 right-2 h-0.25 bg-n-6 pointer-events-none xl:block" />

        <PlusSvg className="hidden absolute top-[68.9375rem] left-[0.175rem] z-2 pointer-events-none xl:block" />

        <PlusSvg className="hidden absolute top-[68.9375rem] right-[0.18rem] z-2 pointer-events-none xl:block" />
      </>
    </Section>
  );
};

export default Grid;
