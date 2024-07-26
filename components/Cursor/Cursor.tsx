import React, { useRef, useState } from "react";
import gsap from 'gsap';

export default function Cursor() {

  const [hidden, setHidden] = useState(false);
  const [overText, setOverText] = useState(false);

  const pointer = useRef(null);

  if (window) {
    window.addEventListener('mousemove', (e) => {
      gsap.to("#pointer", {
        x: e.clientX - 16,
        y: e.clientY - 16
      });
    });
  }

  // when hovering over a link, change the pointer to a pointer
  window.addEventListener('mouseover', (e: MouseEvent) => {
    var fire = e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement;
    if (fire && !hidden) {
      setHidden(true);
    } else if (hidden) {
      setHidden(false);
    }
  });




  return (
    <div className={`fixed pointer-events-none left-0 top-0 w-10 h-10 z-[9999] bg-white rounded-full ${hidden ? "opacity-0": "opacity-90"}`} id="pointer" ref={pointer} />
  );
}