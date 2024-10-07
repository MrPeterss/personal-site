import Link from "next/link";
import Button from "../Button/Button";
import { usePathname, useRouter } from 'next/navigation'


interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  onClick?: () => void;
}

export default function Hero({ title, subtitle, backgroundImage, onClick, ...props }: HeroProps) {

  const pathname = usePathname();
  const router = useRouter();

  var compoundPath = "/";
  var pathnames = pathname.split("/").filter((path) => path !== "");

  const compoundPathnames = pathnames.map((path) => {
    var temp = compoundPath + path + "/";
    compoundPath = temp; 
    return temp;
  });

  console.log(compoundPathnames)


  return (
    <div
      className={`relative bg-cover bg-center h-96 w-full flex py-10 items-end justify-center text-white border-b-8 border-[#333333]`}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})`: "" }}
      {...props}
    >
      <div className={`absolute inset-0 bg-opacity-85 ${backgroundImage ? "bg-black" : ""}`}></div>
        <div className="relative z-10 h-full flex flex-col md:flex-row justify-between md:items-end w-11/12 gap-6">
          <div className="flex flex-col h-full justify-end">
            <div className="h-full items-start">
              <div className="flex gap-3">
                {compoundPath !== "/" && (
                  <Button
                    className="rounded-full w-12 h-12"
                    onClick={() => router.push("/")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </Button>
                )}
                <div className="flex">
                  {pathnames && pathnames.length > 0 && pathnames.map((path, index) => {
                    return (
                      <div key={index} className="flex items-center">
                        <Link className="text-xl md:text-2xl hover:underline cursor-none" href={compoundPathnames[index]}>{path.replaceAll("-", " ")}</Link>
                        {index !== pathnames.length - 1 && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
            {subtitle && <p className="mt-4 text-lg md:text-2xl max-w-[500px]">{subtitle}</p>}
          </div>
          <Button 
            className="rounded-full w-40 h-14"
            onClick={onClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <h3 className="text-2xl">see it!</h3>
          </Button>
        </div>
    </div>
  );
}