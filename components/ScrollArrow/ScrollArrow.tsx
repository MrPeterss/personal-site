import React, { MouseEventHandler, useRef, useState } from "react";
import Image from "next/image";
import gsap from 'gsap';

export default function ScrollArrow() {

  const [hovered, setHovered] = useState(false);

  const scrollBackgroundRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLImageElement>(null);

  const mouseEnter: MouseEventHandler<HTMLButtonElement> = (e) => {
    var offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left - e.currentTarget.getBoundingClientRect().width / 2;
    var offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top - e.currentTarget.getBoundingClientRect().height / 2;
    
    gsap.fromTo(
      scrollBackgroundRef.current,
      { x: offsetX, y: offsetY, scale: 0 },
      { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.25 }
    );

    setHovered(true);
  }

  const mouseLeave: MouseEventHandler<HTMLButtonElement> = (e) => {
    gsap.to(scrollBackgroundRef.current, { scale: 0, duration: 0.25 });
    gsap.to(chevronRef.current, { x: 0, y: 0, duration: 0.25 });
    setHovered(false);
  }

  const mouseMove: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (hovered) {

      var centerX = 0;
      var centerY = 0;
      var mouseLocX = e.clientX - e.currentTarget.getBoundingClientRect().left - e.currentTarget.getBoundingClientRect().width / 2;
      var mouseLocY = e.clientY - e.currentTarget.getBoundingClientRect().top - e.currentTarget.getBoundingClientRect().height / 2;

      var offsetX = mouseLocX - centerX;
      var offsetY = mouseLocY - centerY;

      gsap.to(chevronRef.current, { x: offsetX / 3, y: offsetY / 3, duration: 0.1 });
    }
  }


  return (
    <button id="but" className="border-4 border-white rounded-full w-16 aspect-square flex items-center justify-center overflow-hidden cursor-none" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={mouseMove}>
      <div id="scroll-bg" className="w-16 h-16 absolute bg-white rounded-full pointer-events-none opacity-0 z-[-999]" ref={scrollBackgroundRef}/>
      <Image className={`pointer-events-none ${hovered ? "brightness-0" : ""}`} src="/images/chevron-down.png" alt="chevron down" width={28} height={28} ref={chevronRef} />
    </button>
  );
}