// this will be the lines between all the sections of the app
import SectionSvg from '../assets/svg/SectionSvg';

const Section = ({className, id, crosses, crossesOffset, customPaddings, children}) => {
  return (
    <div
      id={id}
      className={`relative 
            ${
              customPaddings ||
              `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} ${
                className || ""
              }`
            }`} >
      
      {children}

      <div className="hidden absolute top-0 -left-1 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-2 xl:left-2" />

      <div className="hidden absolute top-0 -right-[21px] w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:-right-2 xl:-right-2" />
    
      {crosses && (
        <>
            <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 
                            bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10`}/>
        
            <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
}

export default Section