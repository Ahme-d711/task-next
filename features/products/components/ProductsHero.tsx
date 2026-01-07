"use client";

import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";

interface ProductsHeroProps {
    title?: string;
    outlineTitle?: string;
}

export default function ProductsHero({
    title = "Product Details",
    outlineTitle,
}: ProductsHeroProps) {
    const displayOutline = outlineTitle || title;

    return (
        <section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden bg-section-gray">
            {/* Background Image */}
            <Fade triggerOnce className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/hero-bg.svg"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </div>
            </Fade>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center text-center">
                {/* Outline Background Text */}
                <Zoom triggerOnce>
                    <h2
                        className="absolute min-w-[628px] text-[80px] font-bold text-transparent pointer-events-none select-none"
                        style={{ WebkitTextStroke: "1px #E5E5E5" }}
                    >
                        {displayOutline}
                    </h2>
                </Zoom>

                {/* Main Title */}
                <Fade direction="up" triggerOnce delay={300}>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground z-10">
                        {title}
                    </h1>
                </Fade>
            </div>
        </section>
    );
}
