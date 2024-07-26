import Link from "next/link"
import { MouseEventHandler, useRef, useState } from "react";
import gsap from 'gsap';

export default function CustomLink({ href, children, className, ...props}: { href: string, children: React.ReactNode, className: string, props?: any }) {

  const [shown, setShown] = useState(false);
  const ref = useRef(null);

  const mouseOver: MouseEventHandler = (e) => {
    setShown(true);
  }

  const mouseOut: MouseEventHandler = (e) => {
    setShown(false);
  }


  return (
    <Link href={href} ref={ref} onMouseOver={mouseOver} onMouseLeave={mouseOut} className={`cursor-none highlight ${shown ? 'shown' : ''} ${className}`} target="_blank" rel="noreferrer">
      {children}
    </Link>
  );
}
