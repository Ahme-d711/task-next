import React from "react";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

export default function ProductDetails() {
    return (
        <section className="container max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Images */}
            <ProductImages />

            {/* Right Side: Info */}
            <ProductInfo />
        </section>
    );
}
