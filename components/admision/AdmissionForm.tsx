"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";

const schema = z.object({
  nombres: z.string().min(3, "Nombre muy corto"),
  apellidos: z.string().min(3),
  email: z.string().email("Correo inválido"),
  celular: z.string().regex(/^\d{9}$/, "Debe ser un número de 9 dígitos"),
  nivel: z.enum(["Inicial", "Primaria", "Secundaria"]),
  mensaje: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const AdmissionForm = () => {
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
      await emailjs.send(
        "service_xxx",     // 🔁 reemplaza con tu Service ID
        "template_xxx",    // 🔁 reemplaza con tu Template ID
        data,
        "user_xxx"          // 🔁 reemplaza con tu Public Key
      );
      setStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-6 bg-black shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Formulario de Admisión</h2>
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

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-600"
        >
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
  );
};

export default AdmissionForm;