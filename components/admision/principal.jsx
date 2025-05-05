import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DiplomadosNav = dynamic(() => import("@/components/admision/diplomadosNav"));
const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"));

export default function Main() {
  return (
    <div className="bg-transparent min-h-screen mx-auto max-w-screen-2xl px-4 md:px-8 mb-12">
      <div className="flex flex-col items-center justify-center mt-8 mb-8">
        <div className="relative w-full max-w-2xl aspect-video rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // <-- reemplaza con el ID real
            title="Video institucional Colegio Daniel Goleman"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <h1 className="text-4xl font-bold text-center text-white drop-shadow-md mt-6">
          Colegio Intercultural Daniel Goleman
        </h1>
        <p className="text-center text-white text-lg max-w-2xl mt-2">
          Educación para la sabiduría, el conocimiento y la integración cultural.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 mt-8 text-center text-2xl font-bold text-white dark:text-black md:mb-6 lg:text-4xl">
          Nuestros Diplomados
        </h2>
        <p className="mx-auto text-center text-white dark:text-black md:text-xl">
          Explora Nuestra Trayectoria Educativa: Descubre Nuestros Programas de Formación
        </p>
      </div>

      <div>
        <Suspense fallback={<DashboardSkeleton />}>
          <DiplomadosNav />
        </Suspense>
      </div>
    </div>
  );
}
