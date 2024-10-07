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
          title="Fr(i)ction"
          subtitle="Designing a Human-AI Feedback Sensemaking Tool to Scaffold Reflection and Revision in Argumentative Writing "
          backgroundImage="/images/friction.png"
          onClick={scrollDown}
        />
        <section id="main" className="grid grid-cols-2 lg:w-5/6 md:grid-cols-4 gap-3 p-3 self-center">
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            <b>Friction</b> is an AI tool that helps novice writers turn feedback into actionable revisions. It breaks down feedback, provides adaptive hints, and guides users through reflection and revision.          
          </p>
        </div>
        <Project title="friction" img="/images/friction.png" link="https://friction-omega.vercel.app/" className="bg-[#1E1E1E] row-span-1 aspect-square" type="demo" />
        <div className="w-full bg-[#333333] row-span-2"/>

        <div className="overflow-hidden border-4 border-[#333333] rounded-lg">
          <Image src="/images/pages/friction/friction_bars.png" alt={"friction bars"} className="object-cover" width={1024} height={1024} />
        </div>
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            <b>Feedback Navigation:</b> Friction categorizes feedback through a heatmap, highlighting areas that need improvement. This makes organizing feedback and detecting issues easier.
          </p>
        </div>

        <div className="w-full aspect-square bg-[#333333]"/>
        <div className="overflow-hidden border-4 border-[#333333] rounded-lg">
          <Image src="/images/pages/friction/friction_ai.png" alt={"truscoop rep mock"} className="object-cover" width={1024} height={1024} />
        </div>
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            <b>Reflective Planning:</b> Users turn feedback into action plans with AI-generated hints for diagnosing issues and developing strategies, promoting deeper engagement with revisions.
          </p>
        </div>

        <div className="overflow-hidden border-4 border-[#333333] rounded-lg">
          <Image src="/images/pages/friction/friction_revision.png" alt={"truscoop rep mock"} className="object-cover" width={1024} height={1024} />
        </div>
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            <b>Iterative Revision:</b> Friction supports multiple revisions by providing real-time AI evaluations, encouraging users to continuously refine their writing.
          </p>
        </div>
        <div className="w-full aspect-square bg-[#333333]"/>

        </section>
    </div>
    </>
  );
}