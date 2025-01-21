import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../../data";
import Section from "./Section";

const Grid = () => {
  return (
    <Section
      id="about-us"
      className="-mt-[340px] lg:-mt-[280px] md:-mt-[410px] p-[100px] sm:-mt-[270px]"
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
    </Section>
  );
};

export default Grid;
