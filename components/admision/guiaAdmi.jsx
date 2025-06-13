"use client";

import React from "react";
import { motion } from "framer-motion";

const Graduate = () => {
  return (
    <section id="/diplomados" className="bg-transparent">
      <div className="p-6 sm:p-10 flex flex-col items-center">
        {/* Proceso de Admisión Colegio Goleman */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-7xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight">
            Proceso de Admisión 2026
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((step, i) => {
              const titles = [
                "Bienvenida y presentación institucional",
                "Envío de formulario de admisión",
                "Entrevista personalizada",
                "Resultados",
                "Pago de matrícula",
                "Inicio del proceso de acogida",
              ];
              const texts = [
                "Participa en nuestras charlas mensuales para conocer al Colegio Intercultural Daniel Goleman. Llenando el formulario de contacto te agendaremos una cita virtual con nuestro equipo pedagógico y directivo.",
                "Luego de la presentación, te haremos llegar el formulario oficial de postulación para ser completado en los plazos indicados.",
                "Nuestro equipo de admisión se comunicará para coordinar una entrevista con la familia postulante.",
                "Los resultados serán comunicados vía correo electrónico en un plazo de 10 días posteriores a la entrevista.",
                "Las familias admitidas deberán abonar la cuota correspondiente en un plazo de 7 días para confirmar su vacante.",
                "Desde noviembre, iniciamos el acompañamiento con las familias admitidas para su integración a la comunidad Goleman.",
              ];
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="text-left bg-white rounded-lg shadow-md p-6 border border-gray-200"
                >
                  <div className="text-blue-700 font-bold text-xl flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 border-2 border-blue-800 rounded-full flex items-center justify-center text-lg">
                      {step}
                    </div>
                    <span>{titles[i]}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {texts[i]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Graduate;
