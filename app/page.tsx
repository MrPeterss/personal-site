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

export default function Home() {

  const backgroundRef = useRef<HTMLDivElement>(null);
  const [jumped, setJumped] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

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
        trigger: "#sec-1",
        start: "top top",
        end: "+=500",
        scrub: 1,
      }
    })

    t1.fromTo("#main-bg", {
      scale: 0,
      rotate: 0
    }, {
      scale: 2.5,
      rotate: 180,
    });

    t1.fromTo("#sec-1", {
      opacity: 1,
    }, {
      opacity: 0,
    }, 0.5);

  });

  const jumpIn = () => {
    if (jumped) return;
    setJumped(true);

  };


  return (
    <>
      <div className="flex items-center fixed w-screen h-screen z-[-10] content-center">
        <Image id="main-bg" className="scale-0" src={"/images/pinwheel.png"} alt={"pinwheel"} width={2048} height={2048} />
      </div>
      <Cursor />
      <section id="sec-1" className="h-screen flex items-center justify-around p-20">
        <div className="w-full text-6xl font-medium flex flex-col content-between justify-around gap-4" id="intro">
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
          className="rounded-full w-[512px]"
        />
        {/* <p className="text-xl max-w-[712px]">
          I’m Peter, a <a href={"https://cis.cornell.edu/"} className="text-[#B31B1B] font-bold" target="_blank" rel="noreferrer">Cornell University</a>{" "}
          Information Science student and full-stack developer with a passion
          for developing meaningful applications. I am an incoming software engineer intern at{" "}
          <a href={"https://www.onestream.com/"} className="text-[#3D64C9] font-bold" target="_blank" rel="noreferrer">OneStream Software</a>
        </p> */}
      </section>
      <section id="sec-2" className="p-6 flex flex-col gap-4 max-w-[712px] rounded-lg border-4 border-white">
        <h2 className="text-4xl font-bold">Tech I Use 💻</h2>
        <h3 className="text-2xl font-semibold">Languages:</h3>
        <div className="flex flex-wrap gap-1 justify-center">
          {Object.keys(badges.languages).map((language) => (
            <img src={badges.languages[language as keyof typeof badges.languages]} alt={language} />
          ))}
        </div>
        <h3 className="text-2xl font-semibold">Frameworks:</h3>
        <div className="flex flex-wrap gap-1 justify-center">
          {Object.keys(badges.frameworks).map((framework) => (
            <img src={badges.frameworks[framework as keyof typeof badges.frameworks]} alt={framework} />
          ))}
        </div>
        <h3 className="text-2xl font-semibold">Tools:</h3>
        <div className="flex flex-wrap gap-1 justify-center">
          {Object.keys(badges.tools).map((tool) => (
            <img src={badges.tools[tool as keyof typeof badges.tools]} alt={tool} />
          ))}
        </div>
      </section>
      <section className="p-6 flex flex-col gap-6 max-w-[712px] md:w-[712px]">
        <h2 className="text-4xl font-bold">Projects 🥰</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Project
            title="truscoop"
            img="bg-[url(/truscoop.png)]"
            description="AI news app using NLP techniques and RF classification to predict the political leaning of news articles. Cornell AppDev Hack Challenge Winner FA23."
            link="https://github.com/orgs/truscoop/repositories"
            frameworks={["flask", "swiftui"]}
          >
            <Badge>Swift</Badge>
            <Badge>Python</Badge>
          </Project>
          <Project
            title="All In"
            img="bg-[url(/allin.png)]"
            description="A sports betting app for Cornell students featuring an options-style contract trading mechanic, offering a fun way for students to engage with Cornell basketball. Presented at Millennium SP24."
            link="https://github.com/cuappdev/all-in-ios-swiftui/"
            frameworks={["swiftui"]}
          >
            <Badge>Swift</Badge>
          </Project>
          <Project
            title="Melo Tomorrow"
            img="bg-[url(/melo.png)]"
            description="A full-stack clothing brand app designed to sell clothing for individuals with tactile hypersensitivities, offering a more inclusive fashion experience."
            link="https://github.com/orgs/truscoop/repositories"
            frameworks={["next.js", "flask"]}
          >
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
          </Project>
          <Project
            title="Crumb-less"
            img="bg-[url(/crumb-less.png)]"
            description="A personalized restaurant recommendation web app for Tucson, built with text Mining techniques and similarity metrics in Flask and MySQL."
            link="https://github.com/MrPeterss/crumb-less/"
            frameworks={["flask"]}
          >
            <Badge>Python</Badge>
            <Badge>SQL</Badge>
          </Project>
          <Project
            title="Minecraft Terra Mapper"
            img="bg-[url(/mc-terra-mapper.png)]"
            description="A simple tool for creating realistic terrain from real world data in Minecraft"
            link="https://github.com/MrPeterss/minecraft-terra-mapper/"
            frameworks={["spigot", "next.js"]}
          >
            <Badge>Java</Badge>
            <Badge>Typescript</Badge>
          </Project>
          <Project
            title="Healthy Eating in Dining Halls"
            img="bg-[url(/carrot.png)]"
            description="A project that predicts the healthiness of foods in dining halls using a linear regression model generate NutriScores, helping students make healthier food choices."
            link="https://github.com/MrPeterss/healthy-dining/"
            frameworks={["sklearn", "pandas"]}
          >
            <Badge>Python</Badge>
          </Project>
        </div>
      </section>
      <section className="p-6 flex flex-col gap-6 max-w-[712px]">
        
        <Resume />
      </section>
    </>
  );
}
