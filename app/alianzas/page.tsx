// pages/alianzas.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AlianzasEstrategicas() {
  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="bg-cyan-600 text-white py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Alianzas estratégicas</h1>
            <p>
              En el Colegio Daniel Goleman creemos firmemente en el valor de trabajar
              junto a organizaciones, empresas e instituciones para enriquecer la
              experiencia educativa de nuestros estudiantes. Estas alianzas nos
              permiten brindar oportunidades únicas de desarrollo, aprendizaje y
              proyección futura.
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/image/ali1.jpg"
              alt="Alianza estratégica"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
        </div>
      </section>

      {/* Preparación para el éxito */}
      <section className="bg-white py-16 px-4 md:px-20">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Preparación para el éxito</h2>
        <p className="mb-4 max-w-4xl">
          El propósito de las alianzas estratégicas de Goleman es ofrecer a los estudiantes experiencias donde logren profundizar en sus intereses y pasiones, trasladando todo el valor de sus aprendizajes e investigación a contextos reales.
        </p>
        <p className="font-semibold mb-6">Objetivos:</p>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/2">
            <Image
              src="/image/subida.png"
              alt="Preparación para el éxito"
              width={500}
              height={300}
              className="rounded"
            />
          </div>
          <div className="md:w-1/2 bg-blue-700 text-white p-6 rounded">
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Formar ciudadanos globales.</li>
              <li>Conectar a nuestros estudiantes con lo que pasa a nivel global y local.</li>
              <li>Generar impacto social.</li>
              <li>Motivar nuevos aprendizajes que van más allá del aula.</li>
              <li>Conectar con otros contextos, perfiles y culturas.</li>
              <li>Brindar más oportunidades de formación.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Alianzas destacadas - Carrusel estilo destacado
      <section className="bg-white py-16 px-4 md:px-20">
        <p className="text-center text-gray-600 mb-2">A continuación, te presentamos nuestras alianzas estratégicas:</p>
        <h2 className="text-3xl font-bold text-center text-white bg-blue-700 inline-block px-4 py-2 mb-10">Alianzas destacadas</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="bg-gray-100 p-6 rounded shadow-md max-w-4xl mx-auto">
              <div className="flex items-center gap-6">
                <Image
                  src="/images/alianzas/lpde.png"
                  alt="LPDE"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Liga Peruana de Debate Escolar</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Iniciativa del Centro de Investigación para el Desarrollo Educativo (CIDE-Didáctica) con el respaldo de la Universidad de Lima. A través de debates, torneos y encuentros, fortalece la expresión oral en inglés y español. Esta alianza brinda a los estudiantes la oportunidad de conocer a más de 148 colegios en 13 regiones del Perú y participar en certámenes internacionales.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-100 p-6 rounded shadow-md max-w-4xl mx-auto">
              <div className="flex items-center gap-6">
                <Image
                  src="/images/alianzas/round-square.png"
                  alt="Round Square"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Round Square</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Desde 2023, Colegio Goleman forma parte de esta red internacional con 230 escuelas en 50 países. Las instituciones conectadas ofrecen programas y experiencias de clase mundial, desarrollando competencias globales, carácter y confianza. Nuestros estudiantes acceden a conferencias, colaboraciones y experiencias globales diversas.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section> */}

      {/* Viajes estudiantiles */}
      <section className="bg-white py-16 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-4">Viajes estudiantiles</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <Image
              src="/image/viajes.png"
              alt="Viaje estudiantil"
              width={500}
              height={300}
              className="rounded"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-sm mb-2">
              En los últimos años, nuestros estudiantes han visitado diversos lugares
              del país como parte de su formación integral, explorando nuevos
              contextos, aprendiendo en campo abierto y compartiendo experiencias
              memorables.
            </p>

          </div>
        </div>
      </section>

      {/* Proyectos en colaboración */}
      <section className="bg-cyan-600 text-white py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Proyectos en colaboración</h2>
            <p>
              Uno de nuestros principales objetivos es ofrecer proyectos estratégicos y
              experiencias que fortalezcan sus habilidades con resultados visibles y
              reales.
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/image/colaboracion.png"
              alt="Proyectos en colaboración"
              width={400}
              height={300}
              className="rounded"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
