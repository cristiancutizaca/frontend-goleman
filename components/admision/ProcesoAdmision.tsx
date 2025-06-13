"use client";

import React from "react";
import Admipros from "@/components/admision/guiaAdmi";
import Precios from "@/components/admision/precios";
import Formulario from "@/components/admision/AdmissionForm";
import Documentos from "@/components/admision/documentos";

const ProcesoAdmision = () => {
  return (
    <div className="space-y-20">
      <Formulario />
      <Admipros />
      <Precios />
      <Documentos />
    </div>
  );
};

export default ProcesoAdmision;
