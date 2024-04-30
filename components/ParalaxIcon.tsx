'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from "next/image";


interface ParalaxIconProps {
  img: string;
  alt: string;
  className?: string;
  rotation?: string;
}

export default function ParalaxIcon({ img, alt, className, rotation }: ParalaxIconProps) {

  

  return (
    <Parallax translateX={[0, 1000]} className={className}>
      <img src={img} alt={alt} className={rotation}/>
    </Parallax>
  );
}