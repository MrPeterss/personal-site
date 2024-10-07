'use client';

import Cursor from "@/components/Cursor/Cursor";
import Hero from "@/components/Hero/Hero";
import CustomLink from "@/components/Link/Link";
import Project from "@/components/Project/Project";
import Image from "next/image";
import gsap from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";


export default function Truscoop() {

  gsap.registerPlugin(ScrollToPlugin);

  const scrollDown = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#main",
      ease: "power2.inOut"
    });
  };

  return (
    <>
      <Cursor />
      <div className="flex flex-col items-center bg-[#1E1E1E]">
        <Hero
          title="Melo Tomorrow"
          subtitle="Thoughtfully crafted clothing for sensitive needs, blending comfort with design precision."
          backgroundImage="/images/melo-tomorrow.png"
          onClick={scrollDown}
        />
        <section id="main" className="grid grid-cols-2 lg:w-5/6 md:grid-cols-4 gap-3 p-3 self-center">
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            Melo Tomorrow offers a range of accessible clothing options specifically for people with hypersensitivity. The project emphasizes comfort and inclusion, addressing sensory issues through thoughtful design.
          </p>
        </div>
        <Project title="melo tomorrow" img="/images/melo-tomorrow.png" link="https://melotomorrow.com" className="bg-[#1E1E1E] row-span-1 aspect-square" type="main website" />
        <div className="overflow-hidden border-4 border-[#333333] rounded-lg row-span-2" />

        <div className="overflow-hidden border-4 border-[#333333] rounded-lg aspect-square" />
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            <b>Web & Payment System:</b> The frontend website, built with React and TypeScript, includes an integrated backend payment system powered by Spring Boot and PostgreSQL to ensure secure and seamless transactions for customers.
          </p>
        </div>
        <div className="w-full aspect-square bg-[#333333]"/>

        <div className="overflow-hidden border-4 border-[#333333] rounded-lg aspect-square" />
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            <b>Clothing for Hypersensitivity:</b> Each garment is designed to reduce discomfort for individuals who struggle with tactile sensitivities, offering styles that balance aesthetics and functionality.
          </p>
        </div>
        </section>
    </div>
    </>
  );
}