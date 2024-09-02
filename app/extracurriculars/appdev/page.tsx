'use client';

import Cursor from "@/components/Cursor/Cursor";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project/Project";
import Image from "next/image";
import gsap from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Button from "@/components/Button/Button";


export default function AppDev() {

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
          title="AppDev"
          subtitle="An open-source, student-run project team at Cornell that builds products to improve the lives of the community."
          backgroundImage="/images/appdev.png"
          onClick={scrollDown}
        />
        <section id="main" className="grid grid-cols-2 lg:w-5/6 md:grid-cols-4 gap-3 p-3 self-center">
        <div className="overflow-hidden border-4 border-[#333333] rounded-lg row-span-2 hidden md:block">
          <Image src="/images/appdev.png" alt={"truscoop mock 1"} className="object-cover w-full h-full" width={1024} height={1024} />
        </div>
        <div className="flex col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            AppDev is committed to empowering students to create impactful apps while fostering a supportive, collaborative community.
          </p>
        </div>
        <Project title="appdev" img="/images/pages/appdev/appdev-logo.png" link="https://www.cornellappdev.com/" className="bg-[#1E1E1E] row-span-1 aspect-square" type="main website" />
        <Project title="courses" img="/images/pages/appdev/courses.png" link="https://www.cornellappdev.com/courses/" className="bg-[#1E1E1E] row-span-1 aspect-square" type="appdev website" />
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <h3 className="text-2xl font-bold">Courses</h3>
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            We offer a variety of courses to help students learn how to build apps. Students get hands-on experience and learn from our members.
          </p>
        </div>
        <Project title="intro to iOS" img="/images/pages/appdev/swift.png" link="https://ios-course.cornellappdev.com/" className="bg-[#1E1E1E] row-span-1 aspect-square" type="course website" />
        <div className="w-full aspect-square bg-[#333333] md:hidden"/>
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <h3 className="text-2xl font-bold">Intro to iOS Development</h3>
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            I am currently teaching a credit-bearing course on iOS development open to all that are interested. Students learn how to build apps using Swift and Xcode. 
          </p>
        </div>
        <div className="w-full aspect-square bg-[#333333] hidden md:block"/>
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <h3 className="text-2xl font-bold">Apps</h3>
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            We build and offer a suite of apps that are beneficial to the Cornell community. There are apps for dining, transportation, and more.
          </p>
        </div>
        <Project title="apps" img="/images/pages/appdev/apple.png" link="https://www.cornellappdev.com/apps/" className="bg-[#1E1E1E] row-span-1 aspect-square" type="appdev website" />
        <div className="overflow-hidden border-4 border-[#333333] rounded-lg row-span-2">
          <Image src="/images/appdev.png" alt={"truscoop mock 1"} className="object-cover w-full h-full" width={1024} height={1024} />
        </div>
        <Project title="eatery" img="/images/pages/appdev/eatery.png" link="https://apps.apple.com/us/app/eatery-cornell-dining/id1089672962/" className="bg-[#1E1E1E] row-span-1 aspect-square" type="app download" />
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <h3 className="text-2xl font-bold">Eatery</h3>
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            I have been an iOS developer working on eatery, an app that helps students find dining locations on campus. We have 10K+ monthly active users.
          </p>
        </div>
        <div className="w-full aspect-square bg-[#333333]"/>
        <Project title="apply" img="/images/pages/appdev/appdev-logo.png" link="https://www.cornellappdev.com/apply" className="bg-[#1E1E1E] row-span-1 aspect-square" type="appdev website" />
        <div className="flex flex-col col-span-2 bg-[#333333] p-4 aspect-[2/1] md:aspect-auto">
          <h3 className="text-2xl font-bold">Join Us</h3>
          <p className="text-white text-[4vw] md:text-[16px] lg:text-lg xl:text-xl tracking-widest">
            We are always looking for new members to join our team. If you are interested in building apps, consider joining AppDev.
          </p>
        </div>
      </section>
    </div>
    </>
  );
}