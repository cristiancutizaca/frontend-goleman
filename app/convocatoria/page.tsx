"use client";

import React from "react";
import FormularioPostulacion from "@/components/formadmi/formulario"; // o ../../components/... según tu estructura

const Page = () => {
  return (
    <main className="py-12 px-4 bg-cyan-600 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Convocatorias Abiertas</h1>
      <FormularioPostulacion />
    </main>
  );
};

export default Page;
