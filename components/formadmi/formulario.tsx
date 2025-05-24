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
        "service_enocn9i",
        "template_iqxsiy8",
        formRef.current,
        "wPFS8-SDiJU5s3tun"
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
    <section className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-10 shadow-lg mb-24">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">¡Queremos conocerte!</h3>
      <p className="text-gray-700 mb-4">
        Completa este formulario y nos pondremos en contacto contigo.
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input name="email" type="email" required placeholder="Correo*" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <input name="nombre" type="text" placeholder="Nombre" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <input name="apellido" type="text" placeholder="Apellido" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <input name="dni" type="text" placeholder="Documento de identidad" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <input name="telefono" type="text" placeholder="Número de teléfono" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <select name="grado" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300">
          <option>Grado académico</option>
          <option>Bachiller</option>
          <option>Licenciatura</option>
          <option>Maestría</option>
        </select>
        <input name="especialidad" type="text" placeholder="Área de especialidad" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <select name="nivel" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300">
          <option>Nivel de interés</option>
          <option>Inicial</option>
          <option>Primaria</option>
          <option>Secundaria</option>
        </select>
        <input name="experiencia" type="text" placeholder="Años de experiencia" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <div className="md:col-span-2 space-y-2 text-sm">
          <p className="font-semibold text-black">Nivel de inglés</p>
          <label className="block text-black"><input type="radio" name="ingles" value="Básico" className="mr-2" />Básico</label>
          <label className="block text-black"><input type="radio" name="ingles" value="Intermedio" className="mr-2" />Intermedio</label>
          <label className="block text-black"><input type="radio" name="ingles" value="Avanzado" className="mr-2" />Avanzado</label>
        </div>
        <select name="nivel_cefr" className="p-3 rounded border border-blue-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300 md:col-span-2">
          <option>Indica tu nivel CEFR (si aplica)</option>
          <option>A1</option>
          <option>A2</option>
          <option>B1</option>
          <option>B2</option>
          <option>C1</option>
          <option>C2</option>
        </select>
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm text-black font-medium">Enlace a tu CV (Google Drive, Dropbox, etc.)</label>
          <input
            name="cv"
            type="text"
            placeholder="https://drive.google.com/..."
            className="block w-full p-2 border border-blue-400 text-black rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <button type="submit" className="md:col-span-2 bg-blue-700 text-white font-bold py-3 rounded hover:bg-blue-800 transition">
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
        {status === "success" && <p className="md:col-span-2 text-green-700">¡Formulario enviado con éxito!</p>}
        {status === "error" && <p className="md:col-span-2 text-red-600">Hubo un error. Intenta nuevamente.</p>}
      </form>
    </section>
  );
};

export default FormularioPostulacion;