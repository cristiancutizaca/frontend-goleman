"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBus, FaBookOpen, FaPalette, FaFutbol, FaCameraRetro } from "react-icons/fa";

const PrimaryPage = () => {
  const features = [
    {
      title: "Clases dinámicas",
      icon: <FaBookOpen className="text-5xl text-[#FFD166]" />,
      desc: "Aprendemos jugando con materiales didácticos, proyectos y trabajo en equipo.",
    },
    {
      title: "Excursiones educativas",
      icon: <FaBus className="text-5xl text-[#FF6B6B]" />,
      desc: "Salidas a museos, parques y lugares culturales que complementan el aprendizaje.",
    },
    {
      title: "Arte y creatividad",
      icon: <FaPalette className="text-5xl text-[#FFD166]" />,
      desc: "Pintura, teatro y manualidades para que los niños expresen su imaginación.",
    },
    {
      title: "Deporte y recreación",
      icon: <FaFutbol className="text-5xl text-[#054A57]" />,
      desc: "Fútbol, juegos, y educación física para fomentar el trabajo en equipo y la salud.",
    },
  ];

  const gallery = [
    "/images/viaje1.jpg",
    "/images/viaje2.jpg",
    "/images/clase1.jpg",
    "/images/deporte1.jpg",
    "/images/arte1.jpg",
    "/images/grupo1.jpg",
  ];

  return (
    <section className="bg-[#E0F7FA] text-[#37474F] font-sans">
      {/* Bienvenida */}
      <div className="text-center p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0796B0] drop-shadow-md"
        >
          Bienvenidos a Nuestra Escuela Primaria 🌟
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#37474F] leading-relaxed">
          Una experiencia educativa llena de alegría, creatividad y valores. Formamos ciudadanos felices y responsables.
        </p>
      </div>

      {/* Características */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto p-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform text-center border-t-8 border-[#0796B0]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-bold text-[#054A57] mb-2">{item.title}</h3>
            <p className="text-[#37474F] text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Galería de Fotos */}
      <div className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#0796B0] mb-10 drop-shadow">
          Nuestros Momentos Favoritos 📸
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-8 max-w-6xl mx-auto">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                alt={`foto-${i}`}
                className="w-full h-48 object-cover transition-all duration-300 hover:brightness-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Frase */}
      <div className="bg-[#C0F0F6] text-center py-12 px-6">
        <FaCameraRetro className="text-5xl text-[#054A57] mx-auto mb-4 animate-pulse" />
        <blockquote className="text-xl italic font-medium text-[#054A57] max-w-xl mx-auto">
          "Educar la mente sin educar el corazón no es educar en absoluto." – Aristóteles
        </blockquote>
      </div>

      {/* CTA */}
      <div className="text-center p-10 bg-gradient-to-r from-[#0796B0] to-[#054A57] text-white">
        <h3 className="text-2xl font-bold mb-4">¿Quieres que tu hij@ viva esta aventura educativa?</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Contáctanos para más información o agenda una visita guiada. ¡Te esperamos con los brazos abiertos! 🤗
        </p>
        <a
          href="#contacto"
          className="inline-block bg-[#FFD166] text-[#054A57] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffe18f] transition-colors"
        >
          Solicitar Información
        </a>
      </div>
    </section>
  );
};

export default PrimaryPage;
