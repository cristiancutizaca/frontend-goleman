import React from "react";
import Image from "next/image";

const AdmisionSection = () => {
  return (
    <section style={{ backgroundColor: "#C4E3B0" }} className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Admisión</h2>
        <p className="text-white text-lg sm:text-xl font-semibold mb-10">
          Conoce más acerca de la propuesta educativa Áleph e inicia hoy nuestro proceso de admisión 2025-2026.
        </p>

        <div className="relative max-w-3xl mx-auto rounded overflow-hidden">
          <Image
            src="/image/admisiones.jpg" // <-- reemplaza con la ruta real
            alt="Niños jugando"
            width={960}
            height={540}
            layout="responsive"
            objectFit="cover"
            className="rounded"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-white bg-opacity-80 rounded-full p-4 shadow-md hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-black"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmisionSection;
