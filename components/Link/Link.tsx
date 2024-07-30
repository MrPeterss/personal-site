import Link from "next/link"
import { MouseEventHandler, useRef, useState } from "react";
import gsap from 'gsap';

export default function CustomLink({ href, children, className, ...props}: { href: string, children: React.ReactNode, className: string, props?: any }) {

  const [shown, setShown] = useState(false);

  const mouseOver: MouseEventHandler = (e) => {
    gsap.to('#pointer', { opacity: 0, duration: 0.1 });
    setShown(true);
  }

  const mouseOut: MouseEventHandler = (e) => {
    gsap.to('#pointer', { opacity: 1, duration: 0.1 });
    setShown(false);
  }


  return (
    <Link href={href} onMouseOver={mouseOver} onMouseLeave={mouseOut} className={`md:cursor-none highlight ${shown ? 'shown' : ''} ${className}`} target="_blank" rel="noreferrer">
      {children}
    </Link>
  );
}
