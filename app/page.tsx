import Badge from "@/components/Project/Badge";
import Project from "@/components/Project/Project";
import badges from "@/helpers/badges";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex flex-col items-center justify-around p-10">
        <Image
          src="/peter-headshot-more.png"
          alt="Peter Headshot"
          width={2048}
          height={2048}
          className="rounded-full w-80 bg-blue-300"
        />
        <p className="text-xl">
          I’m Peter, a <b className="text-[#B31B1B]">Cornell University</b>{" "}
          Information Science student and full-stack developer with a passion
          for developing meaningful applications. I am an incoming intern at{" "}
          <b className="text-[#3D64C9]">OneStream Software</b>.
        </p>
      </section>
      <section className="bg-[#F2F2F2] p-6 flex flex-col gap-4">
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
      <section className="p-6 flex flex-col gap-6">
        <h2 className="text-4xl font-bold">Projects 🥰</h2>
        <Project
          title="truscoop"
          img="bg-[url(/truscoop.png)]"
          description="AI news app that leverages the power of Random Forest Classification and natural language processing techniques to predict the political leaning of news articles."
          link="https://github.com/orgs/truscoop/repositories"
          frameworks={["flask", "swiftui"]}
        >
          <Badge>Swift</Badge>
          <Badge>Python</Badge>
        </Project>
      </section>
    </main>
  );
}
