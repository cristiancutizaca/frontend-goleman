"use client";

import React from "react";
import { FaFilePdf } from "react-icons/fa";

const files = [
  {
    label: "Calendario del año lectivo 2025",
    href: "https://drive.google.com/file/d/DRIVE_ID_1/view",
    external: true,
  },
  {
    label: "Horario de clases 2025",
    href: "/docs/horario-clases-2025.pdf",
    external: false,
  },
  {
    label: "Condiciones Económicas 2025",
    href: "/docs/condiciones-economicas-2025.pdf",
    external: false,
  },
  {
    label: "Histórico de cuotas y pensiones",
    href: "https://drive.google.com/file/d/DRIVE_ID_4/view",
    external: true,
  },
  {
    label: "Carta compromiso 2025",
    href: "/docs/carta-compromiso-2025.pdf",
    external: false,
  },
  {
    label: "Número máximo de estudiantes por aula y las vacantes disponibles 2025",
    href: "/docs/vacantes-maximas-2025.pdf",
    external: false,
  },
  {
    label: "Plan curricular 2025",
    href: "https://drive.google.com/file/d/DRIVE_ID_7/view",
    external: true,
  },
  {
    label: "Reglamento interno 2025",
    href: "/docs/reglamento-interno-2025.pdf",
    external: false,
  },
  {
    label: "Resolución que",
    href: "/docs/resolucion-2025.pdf",
    external: false,
  },
];

const Descargables = () => {
  return (
    <section className="bg-transparent py-16 px-4 text-center text-[#124559]">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0B85C1] mb-10">Documentos Descargables</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {files.map((file, idx) => (
          <a
            key={idx}
            href={file.href}
            target={file.external ? "_blank" : undefined}
            rel={file.external ? "noopener noreferrer" : undefined}
            download={!file.external}
            className="flex flex-col items-center gap-3 p-4 border border-[#E0E0E0] rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform bg-[#F8FBFF]"
          >
            <FaFilePdf className="text-4xl text-[#0B85C1]" />
            <span className="text-sm font-semibold text-center leading-tight text-[#124559]">
              {file.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Descargables;
