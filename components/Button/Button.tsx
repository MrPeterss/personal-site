import { MouseEventHandler, useRef, useState } from "react";
import gsap from 'gsap';

export default function Button({ children, onClick, className, ...props }: { children?: React.ReactNode, onClick?: () => void, className?: string, props?: any }) {

    const [hovered, setHovered] = useState(false);

    const backgroundRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLImageElement>(null);

    const mouseEnter: MouseEventHandler<HTMLButtonElement> = (e) => {
        var offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left - e.currentTarget.getBoundingClientRect().width / 2;
        var offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top - e.currentTarget.getBoundingClientRect().height / 2;
        
        gsap.fromTo(
            backgroundRef.current,
            { x: offsetX, y: offsetY, scale: 0 },
            { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.25 }
        );

        setHovered(true);
    }
    
    const mouseLeave: MouseEventHandler<HTMLButtonElement> = (e) => {
        gsap.to(backgroundRef.current, { scale: 0, duration: 0.25 });
        gsap.to(childRef.current, { x: 0, y: 0, duration: 0.25 });
        setHovered(false);
    }
    
    const mouseMove: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (hovered) {

            var centerX = 0;
            var centerY = 0;
            var mouseLocX = e.clientX - e.currentTarget.getBoundingClientRect().left - e.currentTarget.getBoundingClientRect().width / 2;
            var mouseLocY = e.clientY - e.currentTarget.getBoundingClientRect().top - e.currentTarget.getBoundingClientRect().height / 2;

            var offsetX = mouseLocX - centerX;
            var offsetY = mouseLocY - centerY;

            gsap.to(childRef.current, { x: offsetX / 8, y: offsetY / 8, duration: 0.1 });
        }
    }

    return (
        <button onClick={onClick} className={`border-4 border-white flex items-center justify-center overflow-hidden cursor-none ${className}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={mouseMove} {...props}>
            <div id="scroll-bg" className={`border-4 border-white absolute bg-white pointer-events-none opacity-0 z-[-999] ${className}`} ref={backgroundRef}/>
            <div ref={childRef} className={`pointer-events-none ${hovered ? "brightness-0" : ""}`}>
                {children}
            </div>
        </button>
    );
}