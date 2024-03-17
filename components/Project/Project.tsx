"use client";

import badges from "@/helpers/badges";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...attributes}
      className={
        `lg:h-44 relative rounded-lg shadow-lg bg-[#F2F2F2]`
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex flex-col justify-end w-full p-4 gap-2 h-44 bg-right-top bg-contain bg-no-repeat ` + img}>
        <h3 className="font-semibold text-3xl">{title}</h3>
        <div className="flex gap-1">{children}</div>
        <div
          className={
            "absolute transition-all duration-500 w-full h-full top-0 rounded-lg p-6 left-0 bg-white bg-opacity-90 text-sm flex flex-col justify-between " +
            (!isHovered ? "opacity-0" : "opacity-0 lg:opacity-100")
          }
        >
          <p>{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-0.5 flex-wrap">
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
              Open Code
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          "transition-all duration-500 w-full top-0 rounded-lg p-6 left-0 bg-white bg-opacity-90 text-sm flex flex-col justify-between lg:hidden"
        }
      >
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-0.5 flex-wrap">
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
            className="p-2 w-24 flex items-center justify-center h-10 rounded-md shadow-lg bg-blue-500 font-semibold text-white"
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
