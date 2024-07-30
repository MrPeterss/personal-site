import React, { RefObject, useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

export default function Cursor() {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window) {
      window.addEventListener('mousemove', (e) => {
        gsap.to(ref.current, {
          x: e.clientX - 16,
          y: e.clientY - 16,
          duration: 0.1
        });
      });
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#pointer svg",
      {
        y: -2,
      },
      {
        y: 2,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        stagger: 0.2
      }
    );
  });

  return (
    <div className={`fixed pointer-events-none left-0 top-0 w-12 h-12 z-[9999] bg-white rounded-full hidden md:flex items-center justify-center`} id="pointer" ref={ref}>
      <svg className="w-6 h-6 opacity-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22L1 11M12 22L23 11M12 22V2" stroke="#1E1E1E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}