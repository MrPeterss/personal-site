"use client";

import Badge from "@/components/Project/Badge";
import Project from "@/components/Project/Project";
import Resume from "@/components/resume/Resume";
import badges from "@/helpers/badges";
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from "react";
import Cursor from "@/components/Cursor/Cursor";
import Button from "@/components/Button/Button";
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from "gsap/ScrollToPlugin";
import CustomLink from "@/components/Link/Link";

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  useGSAP(() => {
    
    gsap.fromTo(
      "#intro > *",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5
      }
    );

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 0.2,
      }
    })

    t1.fromTo("#main-bg", {
      opacity: 0,
    }, {
      opacity: 1,
    });

    t1.fromTo("#sec-1 > *", {
      y: 0,
      opacity: 1,
    }, {
      y: -100,
      opacity: 0,
    });

  });

  const jumpIn = () => {
    console.log("jumping in");
    gsap.to(window, {
      duration: 1,
      scrollTo: "#sec-2",
      ease: "power2.inOut"
    });


  };


  return (
    <>
      <div id="main-bg" className="left-0 top-0 fixed w-screen h-screen z-[-10] bg-[#181818]" />
      <Cursor />
      <section id="sec-1" className="h-screen flex flex-col md:flex-row items-center justify-around p-20">
        <div className="w-64 text-6xl font-medium flex flex-col content-between justify-around gap-4" id="intro">
          <h2>Hi...</h2>
          <h2>I'm Peter</h2>
          <div className="flex gap-4">
            <Button className="rounded-full w-48 h-16" onClick={jumpIn}>
              <h3 className="text-3xl">🎯jump in</h3>
            </Button>
          </div>
        </div>
        <Image
          src="/peter-headshot.png"
          alt="Peter Headshot"
          width={2048}
          height={2048}
          className="rounded-full md:w-[256px] lg:w-[384px]"
        />
      </section>
      <section id="sec-2" className="min-h-screen grid grid-cols-4 grid-rows-4">
        <div className="bg-white" />
        <div className="bg-gray-900" />
        <div className="flex col-span-2 row-span-2 border border-[#1E1E1E] p-4">
          <p className="text-white text-3xl p-4">
            I’m Peter, a <CustomLink href={"https://cis.cornell.edu/"} className="grad-red text-[#B31B1B] font-bold">Cornell University</CustomLink>{" "}
            Information Science student and full-stack developer with a passion
            for developing meaningful applications. I am an incoming software engineer intern at{" "}
            <a href={"https://www.onestream.com/"} className="text-[#3D64C9] font-bold" target="_blank" rel="noreferrer">OneStream Software</a>
          </p>
        </div>
        <div className="row-span-2 bg-gray-800" />
        <div className="col-span-2 row-span-2 bg-gray-500" />
        <div className="row-span-2 bg-gray-600" />
        <div className="bg-gray-400" />
      </section>
    </>
  );
}
