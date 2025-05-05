import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

const DiplomadosNav = dynamic(() => import("@/components/admision/diplomadosNav"));
const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"));

export default function Main() {
  return (
    <div className="animate-bgCycle transition-colors duration-1000 min-h-screen mx-auto max-w-screen-2xl px-4 md:px-8 mb-12">
      <div className="flex flex-col items-center justify-center mt-8 mb-8">
        <Image
          src="/logo-goleman.png" // Asegúrate de tener esta imagen en public/
          alt="Escudo Colegio Daniel Goleman"
          width={120}
          height={120}
          className="mb-4"
        />
        <h1 className="text-4xl font-bold text-center text-white drop-shadow-md">
          Colegio Intercultural Daniel Goleman
        </h1>
        <p className="text-center text-white text-lg max-w-2xl mt-2">
          Educación para la sabiduría, el conocimiento y la integración cultural.
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
