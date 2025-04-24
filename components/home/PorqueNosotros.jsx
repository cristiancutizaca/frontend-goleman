"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

// Hook para animar los contadores
const useCounter = (endValue, isVisible) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.ceil(progress * endValue));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [endValue, isVisible]);

  return count;
};

// Card individual
const InfoCard = memo(({ img, count, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 w-full max-w-[250px] mx-auto"
  >
    <Image
      src={img}
      alt="Icono"
      width={50}
      height={50}
      unoptimized
      className="mx-auto mb-2"
    />
    <h2 className="text-lg md:text-2xl font-bold text-black">+{count}</h2>
    <p className="text-black text-sm">{text}</p>
  </motion.div>
));

// Componente principal
const PorqueNosotros = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Lógica para el efecto de inclinación (tipo TiltCard)
  const reff = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 50, damping: 20 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    const rect = reff.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (mouseY - centerY) / 8;
    const rotateY = (mouseX - centerX) / 8;

    x.set(-rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const studentsCount = useCounter(1500, isVisible);
  const diplomasCount = useCounter(50, isVisible);
  const coursesCount = useCounter(400, isVisible);
  const impartedCoursesCount = useCounter(1000, isVisible);

  const cardData = [
    { count: studentsCount, text: "Alumnos beneficiados", img: "/gif/pers2.gif" },
    { count: diplomasCount, text: "Diplomados Disponibles", img: "/gif/graduate2.gif" },
    { count: coursesCount, text: "Cursos Disponibles", img: "/gif/doc1.gif" },
    { count: impartedCoursesCount, text: "Clases virtuales impartidas", img: "/gif/star3.gif" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-16 md:py-24 bg-[#1a2b44]"
    >
      {/* Título + texto */}
      <motion.div
        className="text-center mb-12 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 uppercase mb-4">
          ¿Por qué elegir el Colegio Goleman?
        </h2>
        <p className="text-black text-lg md:text-xl">
          En el Colegio Goleman, nos comprometemos con la formación integral de nuestros estudiantes,
          impulsando su desarrollo académico, emocional y personal. Nuestra educación de calidad abre
          puertas a un futuro brillante lleno de oportunidades.
        </p>  
      </motion.div>

      {/* Grid principal con la imagen en el centro */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center justify-center max-w-7xl mx-auto px-4">
        {/* Lado izquierdo */}
        <div className="flex flex-col gap-6 items-center lg:col-span-2">
          <InfoCard {...cardData[0]} />
          <InfoCard {...cardData[2]} />
        </div>

        {/* Imagen centrada con efecto 3D tipo TiltCard */}
        <motion.div
          ref={(node) => {
            reff.current = node;
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-center lg:col-span-1 w-full max-w-[380px] mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            transformStyle: "preserve-3d",
            transform,
          }}
        >
          <div
            className="rounded-xl shadow-xl bg-white p-4"
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/image/icongole.png"
              alt="Imagen central"
              width={380}
              height={380}
              className="object-contain mx-auto rounded-xl"
            />
          </div>
        </motion.div>

        {/* Lado derecho */}
        <div className="flex flex-col gap-6 items-center lg:col-span-2">
          <InfoCard {...cardData[1]} />
          <InfoCard {...cardData[3]} />
        </div>
      </div>
    </section>
  );
};

export default memo(PorqueNosotros);
