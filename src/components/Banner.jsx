


"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: " Summer Sale 50% OFF",
      desc: "Grab your favorite summer products at amazing prices!",
      img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      btn: "Shop Now",
    },
    {
      title: "🔥 Hot Deals",
      desc: "Up to 50% OFF on sunglasses & beach essentials.",
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      btn: "Explore",
    },
    {
      title: "🏖️ Beach Essentials",
      desc: "Everything you need for perfect summer vacation.",
      img: "https://images.unsplash.com/photo-1624280217162-466a76286d0f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      btn: "Browse",
    },
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[80vh] flex items-center bg-base-100 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 w-full">

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {slides[current].title}
          </h1>

          <p className="text-gray-600 max-w-md">
            {slides[current].desc}
          </p>

          <Link href="/products">
            <button className="btn btn-primary mt-2">
              {slides[current].btn}
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-[500px]">
          <Image
            src={slides[current].img}
            alt="hero"
            width={500}
            height={300}
            className="rounded-xl shadow-lg object-cover w-full h-[350px]"
          />
        </div>

      </div>

      {/* Controls */}
      <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="btn btn-circle"
        >
          ❮
        </button>

        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="btn btn-circle"
        >
          ❯
        </button>
      </div>

    </div>
  );
}