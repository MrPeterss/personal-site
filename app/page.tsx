"use client";

import ParalaxIcon from "@/components/ParalaxIcon";
import Badge from "@/components/Project/Badge";
import Project from "@/components/Project/Project";
import badges from "@/helpers/badges";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="w-[100vw] flex flex-col items-center font-google">
      <div className="absolute top-32 overflow-x-clip w-[100vw]">
        <section className="flex flex-col gap-16 z-0 opacity-50 rotate-[-30deg] p-0">
          <div>
            <Parallax translateX={[-300, 0]} className={"flex gap-10"}>
              {Object.keys(badges.languages).map((language) => (
                <img src={badges.languages[language as keyof typeof badges.languages]} alt={language} className="h-16" />
              ))}
              {Object.keys(badges.languages).map((language) => (
                <img src={badges.languages[language as keyof typeof badges.languages]} alt={language} className="h-16" />
              ))}
            </Parallax>
          </div>
          <div>
            <Parallax translateX={[-150, 0]} className={"flex gap-10"}>
              {Object.keys(badges.frameworks).map((framework) => (
                <img src={badges.frameworks[framework as keyof typeof badges.frameworks]} alt={framework} className="h-16" />
              ))}
            </Parallax>
          </div>
        </section>
      </div>
      <section className="h-screen flex flex-col items-center justify-around p-10 z-10 relative">
        <Image
          src="/peter-headshot.png"
          alt="Peter Headshot"
          width={2048}
          height={2048}
          className="rounded-full w-80 bg-blue-300"
        />
        <p className="text-xl max-w-[712px]">
          I’m Peter, a <a href={"https://cis.cornell.edu/"} className="text-[#B31B1B] font-bold" target="_blank" rel="noreferrer">Cornell University</a>{" "}
          Information Science student and full-stack developer with a passion
          for developing meaningful applications. I am an incoming software engineer intern at{" "}
          <a href={"https://www.onestream.com/"} className="text-[#3D64C9] font-bold" target="_blank" rel="noreferrer">OneStream Software</a>
        </p>
      </section>
      <section className="bg-[#F2F2F2] p-6 flex flex-col gap-4 max-w-[712px]">
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
            description="Sports betting app for Cornell students with an options-style contract trading mechanic. Provides a fun way for students to interact with Cornell basketball. Presented at Millennium SP24"
            link="https://github.com/cuappdev/all-in-ios-swiftui"
            frameworks={["swiftui"]}
          >
            <Badge>Swift</Badge>
          </Project>
          <Project
            title="Melo Tomorrow"
            img="bg-[url(/melo.png)]"
            description="Full stack clothing brand app selling clothing for individuals with tactile hypersensitivities, aimed at providing a more inclusive fashion experience."
            link="https://github.com/orgs/truscoop/repositories"
            frameworks={["next.js", "flask"]}
          >
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
          </Project>
        </div>
      </section>
    </main>
  );
}
