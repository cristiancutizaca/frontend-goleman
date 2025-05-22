// components/NivelEducativo.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

interface NivelProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  habilidades: { titulo: string; descripcion: string; icon?: string }[];
}

export default function NivelEducativo({
  title,
  subtitle,
  description,
  image,
  habilidades,
}: NivelProps) {
  const [expand, setExpand] = useState(false);

  return (
    <section className="border-b py-10 px-4 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-orange-600">{title}</h2>
          <h3 className="text-sm text-gray-600 font-semibold">{subtitle}</h3>
          <p className="text-sm text-gray-800 mt-2">{description}</p>
          <button
            onClick={() => setExpand(!expand)}
            className="mt-4 text-sm text-orange-700 hover:underline transition-all"
          >
            {expand ? "Cerrar" : "Ver más"}
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="rounded"
          />
        </div>
      </div>

      {expand && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          {habilidades.map((hab, idx) => (
            <div key={idx} className="flex items-start gap-3">
              {/* Aquí podrías agregar un ícono si lo tienes */}
              <div>
                <h4 className="font-bold text-orange-600">{hab.titulo}</h4>
                <p>{hab.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
