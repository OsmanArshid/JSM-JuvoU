"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Section from "./Section";
import PlusSvg from "../assets/svg/PlusSvg";


const Approach = () => {
  return (
    <Section>
      <section id="roadmap" className="py-24">
        <h1 className="heading font-now">
          Our <span className="text-color-1"> Approach</span>
        </h1>
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4 px-16 bg-n-8">
          <Card
            title="Understanding Your needs: Planning & Scheduling"
            icon={<AceternityIcon order="Phase 1" />}
            description=""
          >
            <CanvasRevealEffect
              animationSpeed={3.5}
              containerClassName="bg-black"
              colors={[[196, 165, 113]]}
              dotSize={3}
            />
          </Card>

          <Card
            title="Infinite Loop: Strategizing & Progress Update"
            icon={<AceternityIcon order="Phase 2" />}
            description=""
          >
            <CanvasRevealEffect
              animationSpeed={3.5}
              containerClassName="bg-black"
              colors={[[52, 53, 64]]}
              dotSize={4}
            />
          </Card>

          <Card
            title="Objective Accomplishment: Optimum Time Complexity"
            icon={<AceternityIcon order="Phase 3" />}
            description=""
          >
            <CanvasRevealEffect
              animationSpeed={3.5}
              containerClassName="bg-black"
              colors={[[196, 165, 113]]}
              dotSize={3}
            />
          </Card>
        </div>
      </section>

      <div className="hidden absolute top-[60.85rem] left-2 right-2 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[60.5275rem] left-[0.175rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[60.5275rem] right-[0.18rem] z-2 pointer-events-none xl:block" />
    </Section>
  );
}


const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-n-4 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[33rem] rounded-xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-n-3" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-n-3" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-n-3" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-n-3" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-2xl opacity-0 text-center font-now group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white text-sm opacity-0 text-center font-now group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        style={{color: '#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
    <div>
      <button className="inline-flex h-16 animate-shimmer items-center justify-center rounded-md border border-color-1 bg-[linear-gradient(110deg,#000103,45%,#c4a571,55%,#000103)] bg-[length:200%_100%] px-10 mt-20 font-now font-medium text-n-2 transition-colors">
        {order}
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;