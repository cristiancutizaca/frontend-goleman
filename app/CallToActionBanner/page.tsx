"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const CallToActionBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-blue-800 via-blue-600 to-green-400 text-white py-12 px-4 sm:px-8 md:px-10 rounded-3xl mb-10 shadow-2xl max-w-6xl mx-auto mt-20 animate-fade-in"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-5 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-tight drop-shadow-sm">
            ¡Necesitamos tu talento!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-50">
            Ayúdanos a transformar la educación. ¿Estás listo para inspirar a la próxima generación?
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-300">💡</span>
              <span className="text-sm font-medium">Innovación educativa</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-pink-300">🚀</span>
              <span className="text-sm font-medium">Impulsa tu carrera</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sky-300">👥</span>
              <span className="text-sm font-medium">Red de impacto</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center lg:flex-col gap-4 text-sm sm:text-base md:text-lg">
          <a
            href="tel:+51999999999"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow hover:bg-green-100 transition-all"
          >
            📞 Llámanos: +51 999 999 999
          </a>
          <a
            href="mailto:contacto@colegiogoleman.edu.pe"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow hover:bg-green-100 transition-all"
          >
            ✉️ Escríbenos: contacto@colegiogoleman.edu.pe
          </a>
          <motion.a
            href="#formulario"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-center  bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all"
          >
            Postula ahora
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToActionBanner;
