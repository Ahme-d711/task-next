"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { cn } from "@/lib/utils";
import DecorativeLayer from "@/components/shared/DecorativeLayer";
import { Fade, Slide } from "react-awesome-reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
    {
        src: "/young-adult-man-wearing-hoodie-beanie 1.svg",
        alt: "Man in light blue hoodie",
    },
    {
        src: "/hoodie-white.svg",
        alt: "White hoodie",
    },
    {
        src: "/hoodie-black.svg",
        alt: "Black hoodie",
    },
    {
        src: "/hoodie-red.svg",
        alt: "Red hoodie duplicate",
    },
];

export default function ProductImages() {
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Fade direction="left" triggerOnce>
            <div className="w-full space-y-6 relative">
                {/* Main Slider */}
                <div className="relative aspect-square w-full bg-[#F4F4F4] rounded-[48px] overflow-hidden group">
                    {/* Top Segment Navigation */}
                    <div className="absolute top-6 left-10 right-10 z-20 flex gap-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "h-1.5 flex-1 rounded-full transition-all duration-300",
                                    index === activeIndex ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "bg-white/30"
                                )}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/10 to-transparent z-10 pointer-events-none" />

                    <Swiper
                        spaceBetween={10}
                        loop={true}
                        onSwiper={setMainSwiper}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        modules={[FreeMode, Navigation]}
                        className="w-full h-full"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center p-12">
                                <div className="relative w-full h-full transform transition-transform duration-500 hover:scale-105">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/10 hover:bg-black/20 text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs border border-white/10">
                        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary/40 hover:bg-primary/60 text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs border border-white/10">
                        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                    </button>
                </div>

                {/* Thumbnails - Grid Layout (Max 3) */}
                <Slide direction="up" cascade damping={0.1} triggerOnce>
                    <div className="grid grid-cols-3 gap-4 md:gap-8 px-2">
                        {images.slice(0, 3).map((image, index) => {
                            const isActive = activeIndex === index || (index === 2 && activeIndex >= 2);
                            return (
                                <button
                                    key={index}
                                    onClick={() => mainSwiper?.slideToLoop(index)}
                                    className={cn(
                                        "relative aspect-square bg-[#F4F4F4] rounded-[32px] overflow-hidden transition-all duration-300 p-6 border-2 outline-none group",
                                        isActive ? "border-primary/40 bg-[#ECECEC]" : "border-transparent hover:border-primary/20"
                                    )}
                                >
                                    <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-contain px-2 py-0"
                                        />
                                    </div>
                                    {index === 2 && images.length > 3 && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-xs transition-opacity group-hover:bg-black/50">
                                            <span className="text-white text-4xl font-bold">+{images.length - 3}</span>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </Slide>

                <style jsx global>{`
                .swiper-button-disabled {
                  opacity: 0.3 !important;
                  cursor: not-allowed;
                }
              `}</style>
                <div className="absolute -bottom-8 left-0">
                    <DecorativeLayer className="opacity-80" />
                </div>
            </div>
        </Fade>
    );
}
