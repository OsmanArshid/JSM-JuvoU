import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] -left-[0.15rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:-left-[0.15rem]`}
      />

      <PlusSvg
        className={`hidden absolute  -top-[0.3125rem] right-[0.5rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[0.5rem]`}
      />
    </>
  );
};

export default SectionSvg;
