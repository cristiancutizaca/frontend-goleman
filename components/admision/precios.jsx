"use client";

import React from "react";
import { motion } from "framer-motion";

const MatriculaPension = () => {
  const data = [
    {
      title: "Cuota de ingreso 2024–2025–2026",
      value: "S/ 30,000*",
    },
    {
      title: "Matrícula y pensión 2024 - 3 años",
      value: "S/ 1,750",
    },
    {
      title: "Matrícula y pensión 2024 – Prekinder y kinder",
      value: "S/ 2,600",
    },
    {
      title: "Matrícula y pensión 2024 – Primaria y secundaria",
      value: "S/ 3,270",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-transparent text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-10">
        Matrícula y Pensión Escolar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-blue-100 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm"
          >
            <h3 className="text-base font-semibold text-blue-800 mb-3">
              {item.title}
            </h3>
            <p className="text-2xl font-bold text-[#124559]">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-10 text-sm text-gray-600 leading-relaxed">
        <p>
          Consulta por nuestros beneficios y opciones de fraccionamiento. Aplica
          para hermanos de familias matriculadas, colaboradores y nuevos postulantes.
        </p>
        <p className="mt-4">
          El proceso de admisión se encuentra abierto para los años escolares 2024, 2025 y 2026. Vacantes sujetas a aforo.
        </p>
      </div>
    </section>
  );
};

export default MatriculaPension;
