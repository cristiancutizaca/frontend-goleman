// components/admision/Proceso.tsx
"use client";
import React from "react";
import Admipros from "./guiaAdmi";
import Precios from "./precios";
import Formulario from "./AdmissionForm";
import Documentos from "./documentos";

export default function Proceso() {
  return (
    <>
      <Admipros />
      <Precios />
      <Documentos />
      <Formulario />
    </>
  );
}
