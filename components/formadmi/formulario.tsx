"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const FormularioPostulacion = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        (err) => {
          console.error(err);
          setStatus("error");
        }
      );
  };

  return (
    <section className="max-w-4xl mx-auto bg-green-100 rounded-3xl p-10 shadow-lg mb-24">
      <h3 className="text-2xl font-bold text-green-900 mb-6">¡Queremos conocerte!</h3>
      <p className="text-gray-700 mb-4">
        Completa este formulario y nos pondremos en contacto contigo.
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input name="email" type="email" required placeholder="Correo*" className="p-3 rounded border border-green-300" />
        <input name="nombre" type="text" placeholder="Nombre" className="p-3 rounded border border-green-300" />
        <input name="apellido" type="text" placeholder="Apellido" className="p-3 rounded border border-green-300" />
        <input name="dni" type="text" placeholder="Documento de identidad" className="p-3 rounded border border-green-300" />
        <input name="telefono" type="text" placeholder="Número de teléfono" className="p-3 rounded border border-green-300" />
        <select name="grado" className="p-3 rounded border border-green-300">
          <option>Grado académico</option>
          <option>Bachiller</option>
          <option>Licenciatura</option>
          <option>Maestría</option>
        </select>
        <input name="especialidad" type="text" placeholder="Área de especialidad" className="p-3 rounded border border-green-300" />
        <select name="nivel" className="p-3 rounded border border-green-300">
          <option>Nivel de interés</option>
          <option>Inicial</option>
          <option>Primaria</option>
          <option>Secundaria</option>
        </select>
        <input name="experiencia" type="text" placeholder="Años de experiencia" className="p-3 rounded border border-green-300" />
        <div className="md:col-span-2 space-y-2 text-sm">
          <p className="font-semibold">Nivel de inglés</p>
          <label className="block"><input type="radio" name="ingles" value="Básico" className="mr-2" />Básico</label>
          <label className="block"><input type="radio" name="ingles" value="Intermedio" className="mr-2" />Intermedio</label>
          <label className="block"><input type="radio" name="ingles" value="Avanzado" className="mr-2" />Avanzado</label>
        </div>
        <select name="nivel_cefr" className="p-3 rounded border border-green-300 md:col-span-2">
          <option>Indica tu nivel CEFR (si aplica)</option>
          <option>A1</option>
          <option>A2</option>
          <option>B1</option>
          <option>B2</option>
          <option>C1</option>
          <option>C2</option>
        </select>
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium">Adjuntar CV</label>
          <input name="cv" type="file" className="block w-full p-2 border border-green-300 rounded bg-white" />
        </div>
        <button type="submit" className="md:col-span-2 bg-green-700 text-white font-bold py-3 rounded hover:bg-green-800 transition">
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
        {status === "success" && <p className="md:col-span-2 text-green-700">¡Formulario enviado con éxito!</p>}
        {status === "error" && <p className="md:col-span-2 text-red-600">Hubo un error. Intenta nuevamente.</p>}
      </form>
    </section>
  );
};

export default FormularioPostulacion;
