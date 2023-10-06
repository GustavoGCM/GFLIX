"use client"

import { ReactNode, useRef } from "react";
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";

interface Props {
  children: ReactNode
}

const ScrollListSection = ({children}: Props) => {
  const ref = useRef(null);

  const scrollChange = (action: "r" | "l") => {
    const list: HTMLUListElement = ref.current!;
    if (action == "r") {
      list.scrollLeft += list.clientWidth;
    } else if (action == "l") {
      list.scrollLeft -= list.clientWidth;
    }
  };

  return (
    <>
      <ul className="section-poster margin-left" ref={ref}>
        <div className="hidden w-screen h-full absolute left-0 top-0 pr-16 max-w-[100vw] md:flex justify-between items-center px-6">

        <button onClick={(e) => scrollChange("l")} className="scroll-button">
          <CgChevronLeft />
        </button>
        <button onClick={(e) => scrollChange("r")} className="scroll-button">
          <CgChevronRight />
        </button>
        </div>
        {children}
      </ul>
    </>
  );
};

export default ScrollListSection;
