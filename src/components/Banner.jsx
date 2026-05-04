"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import "animate.css";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "🌞 Summer Sale 50% OFF",
      desc: "Grab your favorite summer products at amazing prices!",
      img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1170&auto=format&fit=crop",
      btn: "Shop Now",
    },
    {
      title: "🔥 Hot Deals",
      desc: "Up to 50% OFF on sunglasses & beach essentials.",
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=880&auto=format&fit=crop",
      btn: "Explore",
    },
    {
      title: "🏖️ Beach Essentials",
      desc: "Everything you need for perfect summer vacation.",
      img: "https://images.unsplash.com/photo-1624280217162-466a76286d0f?q=80&w=735&auto=format&fit=crop",
      btn: "Browse",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-5 relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">

     
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

   
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">

       
        <div className="space-y-5 text-center md:text-left animate__animated animate__fadeInLeft">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            {slides[current].title}
          </h1>

          <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            {slides[current].desc}
          </p>

          <Link href="/products">
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition transform hover:scale-105 animate__animated animate__pulse animate__infinite">
              {slides[current].btn}
            </button>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="w-full md:w-[450px] lg:w-[500px] animate__animated animate__zoomIn">
          <Image
            key={slides[current].img}
            src={slides[current].img}
            alt="hero"
            width={500}
            height={300}
            className="rounded-2xl shadow-2xl object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* controls */}
      <div className="absolute left-3 right-3 top-1/2 flex justify-between -translate-y-1/2">

        <button
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="bg-white text-gray-950 px-4 py-2 rounded-full
          "
        >
          ❮
        </button>

        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="bg-white/80 px-4 py-2 rounded-full hover:bg-white transition"
        >
          ❯
        </button>

      </div>

    </div>
  );
}