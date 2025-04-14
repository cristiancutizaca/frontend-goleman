"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/image/fondo_1.jpeg",
  "/image/fondo_2.jpg",
  "/image/fondo_3.webp",
];

const FullScreenCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((src, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-0 w-full h-full"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FullScreenCarousel;
