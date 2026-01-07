"use client";

import Image from "next/image";

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
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.svg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center text-center">
                {/* Outline Background Text */}
                <h2
                    className="absolute min-w-[628px] text-[80px] font-bold text-transparent pointer-events-none select-none"
                    style={{ WebkitTextStroke: "1px #E5E5E5" }}
                >
                    {displayOutline}
                </h2>

                {/* Main Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground z-10">
                    {title}
                </h1>
            </div>
        </section>
    );
}
