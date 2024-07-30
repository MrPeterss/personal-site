"use client";

import badges from "@/helpers/badges";
import Link from "next/link";
import Image from "next/image";
import { MouseEventHandler, useRef, useState } from "react";
import gsap from "gsap";

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  img: string;
  description: string;
  link: string;
  frameworks?: string[];
}
export default function Project({
  title,
  img,
  description,
  link,
  frameworks = [],
  children,
  ...attributes
}: ProjectProps) {

  const backgroundRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    var offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left - e.currentTarget.getBoundingClientRect().width / 2;
    var offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top - e.currentTarget.getBoundingClientRect().height / 2;
    
    gsap.fromTo(
        backgroundRef.current,
        { x: offsetX, y: offsetY, scale: 0, opacity: 0},
        { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.25 }
    );

    setHovered(true);
}

const mouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    gsap.to(backgroundRef.current, { scale: 0, duration: 0.25 });
    gsap.to(childRef.current, { x: 0, y: 0, duration: 0.25 });
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

        gsap.to(childRef.current, { x: offsetX / 8, y: offsetY / 8, duration: 0.1 });
    }
}

  return (
    <div
      {...attributes}
      className={
        `md:h-[216px] relative rounded-lg shadow-lg bg-gray-900 border-4 border-white overflow-hidden should-hide`
      }
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className={`flex flex-col justify-end w-full p-4 gap-2 h-44 md:h-full bg-right-top bg-contain bg-no-repeat pointer-events-none ` + img}>
        <h3 className="font-semibold text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{title}</h3>
        <div className="flex gap-1">{children}</div>
        <div
          className={
            "absolute duration-500 w-full h-full top-0 rounded-lg p-6 left-0 bg-black bg-opacity-75 text-sm flex flex-col justify-between opacity-0"
          }
          ref={backgroundRef}
        >
          <p>{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-0.5 flex-wrap w-1/2">
              {frameworks.map((framework, index) => (
                <img
                  key={index}
                  src={
                    badges.frameworks[
                      framework as keyof typeof badges.frameworks
                    ]
                  }
                  alt={framework}
                  className="h-7"
                />
              ))}
            </div>
            <Link
              className="p-2 w-24 flex items-center justify-center h-10 rounded-md shadow-lg bg-blue-500 font-semibold text-white"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={"/outside.png"} alt="external link" width={24} height={24} className="ml-[-8px]" />
              Code
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          "transition-all duration-500 w-full top-0 rounded-lg p-6 left-0 bg-white bg-opacity-90 text-sm flex flex-col justify-between md:hidden"
        }
      >
        <p className="pb-6">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-0.5 flex-wrap w-1/3">
            {frameworks.map((framework, index) => (
              <img
                key={index}
                src={
                  badges.frameworks[framework as keyof typeof badges.frameworks]
                }
                alt={framework}
                className="h-7"
              />
            ))}
          </div>
          <Link
            className="w-24 flex items-center justify-center h-10 rounded-md shadow-lg bg-blue-500 font-semibold text-white"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Code
          </Link>
        </div>
      </div>
    </div>
  );
}
