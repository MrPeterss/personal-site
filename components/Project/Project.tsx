'use client';

import Link from "next/link";
import Image from "next/image";
import { MouseEventHandler, useRef } from "react";
import { gsap } from "gsap";


interface ProjectProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  img: string;
  link: string;
  type: string;
}

export default function Project({
  title,
  img,
  link,
  type,
  children,
  className,
  ...attributes
}: ProjectProps) {

  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  const mouseEnter: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (window.innerWidth < 768) return;

    gsap.fromTo(imgRef.current, { filter: "brightness(1) blur(0px)", }, { filter: "brightness(0.2) blur(10px)", duration: 0.2 });
    gsap.to(contentRef.current, { opacity: 1, duration: 0.3 });
    gsap.to('#pointer', { scale: 0.8, duration: 0.2 });
    gsap.to('#pointer svg', { opacity: 1, duration: 0.2 });
  }

  const mouseLeave: MouseEventHandler<HTMLAnchorElement> = () => {
    if (window.innerWidth < 768) return

    gsap.to(imgRef.current, { filter: "brightness(1) blur(0px)", duration: 0.2 });
    gsap.to(contentRef.current, { opacity: 0, duration: 0.3 });
    gsap.to('#pointer', { scale: 1, duration: 0.2 });
    gsap.to('#pointer svg', { opacity: 0, duration: 0.2 });
  }

  const linkHasProtocol = link.includes("http") || link.includes("https");


  return (
    <Link href={link} target={linkHasProtocol ? "_blank" : ""} rel={linkHasProtocol ? "noreferrer" : ""} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
      className={`relative w-full h-full overflow-hidden md:cursor-none border-4 border-[#333333] rounded-lg ` + className}
      {...attributes}
    >
      <Image ref={imgRef} src={img} alt={title} className="object-cover w-full h-full pointer-events-none" width={1024} height={1024} />
      <div ref={contentRef} className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none bg-black bg-opacity-45 hidden md:flex flex-col items-center justify-center">
        <h3 ref={textRef} className="text-xl font-normal tracking-widest pointer-events-none">{title}</h3>
        <h4 className="text-sm font-light pointer-events-none bottom-0 left-0 opacity-50">{type}</h4>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-24 pointer-events-none bg-black bg-opacity-65 md:hidden flex flex-col items-center justify-center">
        <h3 className="text-xl font-normal tracking-widest pointer-events-none">{title}</h3>
        <h4 className="text-sm font-light pointer-events-none bottom-0 left-0 opacity-50">{type}</h4>
      </div>
    </Link>
  );
}