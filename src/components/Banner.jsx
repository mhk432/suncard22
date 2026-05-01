"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import img from "@/assets/sunglass.png";
import Image from "next/image";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "🌞 Summer Sale",
      desc: "Grab your favorite summer products at amazing prices!",
      img: "https://i.ibb.co/J7yF3cJ/tshirt.jpg",
      bg: "from-yellow-200 to-orange-300",
      btn: "Shop Now",
    },
    {
      title: "🔥 Hot Deals",
      desc: "Up to 50% OFF on selected summer items.",
      img: "https://i.ibb.co/3sKQ0Qh/sunglass1.jpg",
      bg: "from-pink-200 to-red-200",
      btn: "Explore",
    },
    {
      title: "🏖️ Beach Essentials",
      desc: "Everything you need for your perfect beach day.",
      img: "https://i.ibb.co/TYcYk5y/towel.jpg",
      bg: "from-blue-200 to-green-200",
      btn: "Browse",
    },
  ];

  // 🔁 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ⬅️➡️ Manual Control
  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div
      className={` px-40 min-h-[90vh] flex items-center rounded-xl bg-gradient-to-r ${slides[current].bg}`}
    >
      <div className=" flex flex-col lg:flex-row items-center justify-between w-full px-10 gap-10">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            {slides[current].title}
          </h1>

          <p className="py-4 max-w-md">
            {slides[current].desc}
          </p>

          <Link href="/products">
            <button className="btn btn-primary">
              {slides[current].btn}
            </button>
          </Link>
        </div>

        {/* Image */}
        <Image src={img} alt="Hero Image"  
        width={400} height={400} className="rounded-lg shadow-lg w-full">

        </Image>
      </div>

      {/* Controls */}
      <div className="px-20 absolute left-5 right-5 flex justify-between top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}