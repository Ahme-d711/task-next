"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

import ProductCard from "./ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const similarProducts = [
    {
        id: 1,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
        category: "Dresses",
        price: 900,
        rating: 4.5,
        reviews: 2010,
        image: "/dress-1.svg",
        discount: null,
        colors: ["#C48B8B", "#333333", "#EEEEEE"],
        extraColors: 2
    },
    {
        id: 2,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
        category: "Dresses",
        price: 900,
        oldPrice: 1300,
        rating: 4.5,
        reviews: 2010,
        image: "/dress-2.svg",
        discount: "25% OFF",
        colors: ["#C48B8B", "#333333", "#EEEEEE"],
        extraColors: 2
    },
    {
        id: 3,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
        category: "Dresses",
        price: 900,
        rating: 4.5,
        reviews: 2010,
        image: "/dress-3.svg",
        actionIcon: "bag-check", // Special icon in design
        colors: ["#C48B8B", "#333333", "#EEEEEE"],
        extraColors: 2
    },
    {
        id: 4,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
        category: "Dresses",
        price: 900,
        oldPrice: 1300,
        rating: 4.5,
        reviews: 2010,
        image: "/dress-4.svg",
        discount: "25% OFF",
        colors: ["#C48B8B", "#333333", "#EEEEEE"],
        extraColors: 2
    },
    {
        id: 5,
        title: "Premium Elegant Evening Dress - New Arrival",
        category: "Dresses",
        price: 1200,
        rating: 4.8,
        reviews: 150,
        image: "/dress-5.png",
        colors: ["#1B5E20", "#333333"],
        extraColors: 1
    },
    {
        id: 6,
        title: "Modern Vibrant Tunic Shirt Dress",
        category: "Dresses",
        price: 850,
        oldPrice: 1100,
        rating: 4.2,
        reviews: 89,
        image: "/dress-6.png",
        discount: "15% OFF",
        colors: ["#2E7D32", "#1565C0"],
        extraColors: 3
    },
    {
        id: 7,
        title: "Sophisticated Boutique Wrap Dress",
        category: "Dresses",
        price: 1100,
        rating: 4.7,
        reviews: 230,
        image: "/dress-7.png",
        colors: ["#004D40", "#EEEEEE"],
        extraColors: 2
    },
];

export default function SimilarProducts() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="py-12 min-h-[400px]" />;
    }

    return (
        <section className="w-full py-12 overflow-hidden">
            {/* Title Container - Still constrained to 1440px */}
            <Fade direction="up" triggerOnce>
                <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 mb-10">
                    <h2 className="text-2xl font-bold relative inline-block">
                        Similar Items
                        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#C48B8B] rounded-full"></div>
                    </h2>
                </div>
            </Fade>

            {/* Slider Container - Bleeds to the right */}
            <div className="relative group/swiper pl-5 md:pl-8 lg:pl-10 2xl:pl-[calc((100vw-1440px)/2+2.5rem)]">
                <Slide direction="right" triggerOnce>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={13}
                        slidesPerView={1.5}
                        grabCursor={true}
                        navigation={{
                            nextEl: ".similar-next",
                            prevEl: ".similar-prev",
                        }}
                        breakpoints={{
                            480: { slidesPerView: 2 },
                            768: { slidesPerView: 3.5 },
                            1024: { slidesPerView: 4.5 },
                            1280: { slidesPerView: 5.5 },
                        }}
                        className="pb-16"
                    >
                        {similarProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="transition-all duration-300">
                                    <ProductCard product={product} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Slide>

                {/* Custom Navigation */}
                <div className="flex justify-center items-center gap-4 mt-8 2xl:mr-[calc((100vw-1440px)/2+2.5rem)] pr-5 md:pr-8 lg:pr-10">
                    <button className="similar-prev w-12 h-12 rounded-full bg-[#C48B8B] flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="similar-next w-12 h-12 rounded-full bg-[#C48B8B] flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
