import React, { useRef, useState } from "react";
import gsap from 'gsap';

export default function Cursor() {

  const [hidden, setHidden] = useState(false);

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
    if (e.target instanceof HTMLButtonElement && !hidden) {
      setHidden(true);
    } else if (hidden) {
      setHidden(false);
    }
  });




  return (
    <div className={`fixed pointer-events-none left-0 top-0 w-8 h-8 rounded-full z-[9999] bg-white ${hidden ? "opacity-0": "opacity-80"}`} id="pointer" ref={pointer} />
  );
}