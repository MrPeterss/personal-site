"use client";

import Badge from "@/components/Project/Badge";
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
import Project from "@/components/Project/Project";

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
          className="rounded-full w-[256px] lg:w-[384px]"
        />
      </section>
      <section id="sec-2" className="grid grid-cols-2 lg:w-5/6 md:grid-cols-4 gap-3 p-3 self-center">
        <div className="flex col-span-2 bg-[#333333] p-4">
          <p className="text-white text-[16px] lg:text-lg xl:text-xl tracking-widest">
            I’m Peter, a <CustomLink href={"https://cis.cornell.edu/"} className="grad-red underline grad-red decoration-[#B31B1B] bg-[#B31B1B] md:bg-inherit">Cornell University</CustomLink>{" "}
            Information Science student and full-stack developer with a passion
            for developing meaningful applications. I am an incoming software engineer intern at{" "}
            <CustomLink href={"https://www.onestream.com/"} className="grad-blue underline decoration-[#3D64C9] bg-[#3D64C9] md:bg-inherit">OneStream Software</CustomLink>
          </p>
        </div>
        <Project title="truscoop" img="/images/truscoop.png" link="/truscoop" className="bg-[#1E1E1E] row-span-1 aspect-square" type="project" />
        <Project title="appdev" img="/images/appdev.png" link="/appdev" className="bg-[#1E1E1E] aspect-square md:aspect-auto md:row-span-2" type="extracurricular" />
        
        <Project title="friction" img="/images/friction.png" link="/friction" className="bg-[#1E1E1E] row-span-1 aspect-square" type="research project" />
        <Project title="melo tomorrow" img="/images/melo-tomorrow.png" link="/melo-tomorrow" className="bg-[#1E1E1E] aspect-square md:aspect-auto md:row-span-2" type="company/project" />
        <div className="w-full aspect-square bg-[#333333]"/>
        <div className="w-full aspect-square bg-[#333333]"/>
        <Project title="all in" img="/images/caution.png" link="/all-in" className="bg-[#1E1E1E] row-span-1 aspect-square" type="project" />
        <div className="w-full aspect-square bg-[#333333]"/>
        <Project title="coming soon" img="/images/caution.png" link="/all-in" className="bg-[#1E1E1E] row-span-1 aspect-square" type="under construction" />
        <div className="w-full col-span-2 bg-[#333333]"/>
        <Project title="coming soon" img="/images/caution.png" link="/all-in" className="bg-[#1E1E1E] row-span-1 aspect-square" type="under construction" />
      </section>
    </>
  );
}
