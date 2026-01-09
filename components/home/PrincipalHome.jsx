"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const desktopImages = [
  "/image/fondo_1.jpeg",
  "/image/fondo_2.jpg",
  "/image/fondo_3.webp",
];

const mobileImages = [
  "/image/fond-cel.webp",
  "/image/fond-cel2.webp",
  "/image/fond-cel.webp",
];

const FullScreenCarousel = ({ className = "" }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // menos de 768px es mobile/tablet
    };

    handleResize(); // correr una vez al cargar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const currentImages = isMobile ? mobileImages : desktopImages;

  return (
    <div className={`relative w-full h-[620px] md:h-[560px] sm:h-[460px] overflow-hidden ${className}`}>
      {currentImages.map((src, i) => (
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
