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
          title="truscoop"
          subtitle="Exposing Bias for Transparent News Consumption"
          backgroundImage="/images/truscoop.png"
          onClick={scrollDown}
        />
        <section id="main" className="grid grid-cols-2 lg:w-5/6 md:grid-cols-4 gap-3 p-3 self-center">
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            In today’s media landscape, bias can often obscure the truth. <CustomLink href={"https://github.com/orgs/truscoop/repositories"} className="grad-red underline grad-red decoration-[#B31B1B] bg-[#B31B1B] md:bg-inherit">truscoop</CustomLink> is here to change that. We empower users to make informed decisions about content they consume.
          </p>
        </div>
        <Project title="github" img="/images/github.webp" link="https://github.com/orgs/truscoop/repositories" className="bg-[#1E1E1E] row-span-1 aspect-square" type="source code" />
        <div className="overflow-hidden border-4 border-[#333333] rounded-lg row-span-2">
          <Image src="/images/pages/truscoop/mock-1.png" alt={"truscoop mock 1"} className="object-cover w-full h-full" width={1024} height={1024} />
        </div>
        <div className="overflow-hidden border-4 border-[#333333] rounded-lg">
          <Image src="/images/pages/truscoop/dem.png" alt={"truscoop dem mock"} className="object-cover" width={1024} height={1024} />
        </div>
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <h3 className="text-2xl font-bold">Technology Stack</h3>
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            truscoop uses Python-Flask and SwiftUI for a reliable, scalable platform. Ensamble Machine learning models drive bias detection, integrated with the app via flask.
          </p>
        </div>
        <div className="w-full aspect-square bg-[#333333]"/>
        <div className="overflow-hidden border-4 border-[#333333] rounded-lg">
          <Image src="/images/pages/truscoop/rep.png" alt={"truscoop rep mock"} className="object-cover" width={1024} height={1024} />
        </div>
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <h3 className="text-2xl font-bold">The Future</h3>
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            We’re expanding to cover more news sources, enhancing bias detection with advanced techniques. Ultimately, truscoop empowers users to critically evaluate the information they trust.
          </p>
        </div>
        </section>
    </div>
    </>
  );
}