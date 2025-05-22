"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaFilePdf } from "react-icons/fa";

const schema = z.object({
  nombres: z.string().min(3, "Nombre muy corto"),
  apellidos: z.string().min(3),
  email: z.string().email("Correo inválido"),
  celular: z.string().regex(/^\d{9}$/, "Debe ser un número de 9 dígitos"),
  nivel: z.enum(["Inicial", "Primaria", "Secundaria"]),
  mensaje: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const Graduate = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      console.log("Formulario enviado:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const files = [
    { label: "Calendario del año lectivo 2025", href: "#" },
    { label: "Horario de clases 2025", href: "#" },
    { label: "Condiciones Económicas 2025", href: "#" },
    { label: "Histórico de cuotas y pensiones", href: "#" },
    { label: "Carta compromiso 2025", href: "#" },
    { label: "Vacantes disponibles 2025", href: "#" },
    { label: "Plan curricular 2025", href: "#" },
    { label: "Reglamento interno 2025", href: "#" },
    { label: "Resolución que...", href: "#" },
  ];

  return (
    <section id="/diplomados" className="bg-white text-[#124559]">
      <div className="p-5 flex flex-col">
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B8457] mb-12">Proceso de Admisión</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {["Bienvenida y presentación institucional", "Envío de formulario de admisión", "Entrevista personalizada", "Resultados", "Pago de matrícula", "Inicio del proceso de acogida"].map((title, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} className="text-left">
                <div className="text-[#0B8457] font-bold text-xl flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 border-2 border-[#0B8457] rounded-full flex items-center justify-center text-lg">{index + 1}</div>
                  <span>{title}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">Descripción del paso {index + 1}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className="mb-20 lg:mb-10">
          <h3 className="text-2xl font-bold text-[#0B8457] text-center mb-4">Guía de Admisión</h3>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Tenemos presentaciones del colegio todos los meses. Para participar, se debe llenar el formulario de contacto y la coordinadora de admisión del colegio se contactará con ustedes. Luego, se completa la solicitud, se agenda entrevista, y se recibe la respuesta.
          </p>
        </section>

        <section className="mb-20 lg:mb-10">
          <h3 className="text-2xl font-bold text-[#0B8457] text-center mb-4">Matrícula y Pensiones</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { title: "Cuota de ingreso 2024–2025–2026", value: "S/ 30,000*" },
              { title: "Matrícula y pensión 2024 - 3 años", value: "S/ 1,750" },
              { title: "Prekinder y kinder", value: "S/ 2,600" },
              { title: "Primaria y secundaria", value: "S/ 3,270" },
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 p-6 bg-transparent rounded shadow-sm">
                <h3 className="text-sm font-bold text-gray-700 mb-4">{item.title}</h3>
                <p className="text-3xl font-semibold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 lg:mb-10">
          <h3 className="text-2xl font-bold text-[#0B8457] text-center mb-4">Documentos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {files.map((file, idx) => (
              <a key={idx} href={file.href} className="flex flex-col items-center gap-2 text-[#124559] hover:scale-105 transition-transform">
                <FaFilePdf className="text-5xl" />
                <span className="text-sm font-semibold text-center leading-tight">{file.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-20 lg:mb-10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0B8457] text-center mb-6">Formulario de Admisión</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label>Nombres</label>
              <input {...register("nombres")} className="input" />
              {errors.nombres && <p className="error">{errors.nombres.message}</p>}
            </div>
            <div>
              <label>Apellidos</label>
              <input {...register("apellidos")} className="input" />
              {errors.apellidos && <p className="error">{errors.apellidos.message}</p>}
            </div>
            <div>
              <label>Email</label>
              <input {...register("email")} type="email" className="input" />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div>
              <label>Celular</label>
              <input {...register("celular")} className="input" />
              {errors.celular && <p className="error">{errors.celular.message}</p>}
            </div>
            <div>
              <label>Nivel educativo</label>
              <select {...register("nivel")} className="input">
                <option value="">Seleccione</option>
                <option value="Inicial">Inicial</option>
                <option value="Primaria">Primaria</option>
                <option value="Secundaria">Secundaria</option>
              </select>
              {errors.nivel && <p className="error">{errors.nivel.message}</p>}
            </div>
            <div>
              <label>Mensaje (opcional)</label>
              <textarea {...register("mensaje")} className="input" rows={4}></textarea>
            </div>
            <button type="submit" disabled={status === "loading"} className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-600">
              {status === "loading" ? "Enviando..." : "Enviar solicitud"}
            </button>
            {status === "success" && <p className="text-green-600 mt-2">¡Formulario enviado con éxito!</p>}
            {status === "error" && <p className="text-red-600 mt-2">Ocurrió un error al enviar.</p>}
          </form>
          <style jsx>{`
            .input {
              width: 100%;
              padding: 0.5rem;
              border: 1px solid #ccc;
              border-radius: 0.375rem;
            }
            .error {
              color: red;
              font-size: 0.875rem;
            }
          `}</style>
        </section>
      </div>
    </section>
  );
};

export default Graduate;
