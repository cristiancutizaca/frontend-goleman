import React from "react";

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
    <section className="w-full py-12 px-4 bg-transparent text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-10">
        Matrícula y pensión
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 bg-transparent rounded shadow-sm"
          >
            <h3 className="text-sm font-bold text-gray-700 mb-4">
              {item.title}
            </h3>
            <p className="text-3xl font-semibold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-8 text-sm text-gray-600 leading-relaxed">
        <p>
          Consulta por nuestros beneficios y opciones de fraccionamiento. Aplica
          para hermanos de familias matriculadas en Áleph, familias matriculadas en
          la Casa Amarilla, colaboradores y nuevos postulantes.
        </p>
        <p className="mt-4">
          El proceso de admisión en Áleph se encuentra abierto para el año escolar
          2024, 2025 y 2026. Las vacantes son limitadas y sujetas a los aforos por
          clase.
        </p>
      </div>
    </section>
  );
};

export default MatriculaPension;
