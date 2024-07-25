import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function ArrowDown({ className, ...props }: { className?: string, props?: any }) {

    useGSAP(() => {
        gsap.fromTo(
            ".arrow-down",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                stagger: 0.2
            }
        );
    });

    return (
        <div className={`${className}`} {...props}>
            <Image src="/images/chevron-down.svg" alt="Arrow Down" className="arrow-down" width={38} height={38} />
            <Image src="/images/chevron-down.svg" alt="Arrow Down" className="arrow-down" width={38} height={38} />
        </div>
    )
}