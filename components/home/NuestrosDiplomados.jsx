"use client";

import React from "react";

const NuestraHistoria = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-video rounded-md overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LuNuB1_Lnlk"
              title="Video Institucional"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left mb-6">
            Nuestra historia
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-slate-900">
            Nuestra metodología educativa está alineada con las neurociencias y los últimos
            estudios sobre el aprendizaje efectivo y significativo.
          </h3>

          <p className="mb-4">
            La propuesta se basa en formar personas competentes, que conocen sus capacidades, las
            fortalecen a partir de la autoevaluación y práctica continua, y que tienen un fuerte
            sentido de comunidad.
          </p>
          <p className="mb-4">
            Vemos el colegio como un gran taller en el que los alumnos aprenden a resolver problemas
            con rigurosidad, creatividad, innovación y sentido del bien común.
          </p>
          <p className="mb-4">
            La curiosidad es el motor para profundizar en temas que son de su interés y que se
            conectan con contextos reales. Relacionar los intereses con la emoción asegura, como
            confirman las investigaciones, aprendizajes significativos que impactan en su
            construcción como individuos.
          </p>
          <p>
            Desarrollar el aspecto socioemocional y el pensamiento crítico frente a situaciones que
            viven y a las que están expuestos genera seguridad para pensar de manera divergente y
            original.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;
  