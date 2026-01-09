"use client";

import React from "react";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import FormularioPostulacion from "@/components/formadmi/formulario";

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-14 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white/90 text-sm backdrop-blur">
            Convocatorias abiertas
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            Trabaja con nosotros
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Completa tu postulación y nos pondremos en contacto contigo. Tu información es confidencial y solo se usará para el proceso.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+51996960012"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold shadow hover:shadow-md transition"
            >
              <FiPhoneCall /> +51 996 960 012
            </a>
            <a
              href="mailto:infodgedu@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white/15 text-white px-4 py-2 font-semibold backdrop-blur hover:bg-white/20 transition"
            >
              <MdEmail /> infodgedu@gmail.com
            </a>
            <Link
              href="/CallToActionBanner"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 text-slate-900 px-4 py-2 font-extrabold shadow hover:shadow-md transition"
            >
              Ver beneficios
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            {/* El formulario ya es card por dentro */}
            <FormularioPostulacion />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-6">
              <h2 className="text-lg font-extrabold text-slate-900">¿Qué pasa después?</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  "Revisamos tu postulación.",
                  "Te contactamos por correo o teléfono.",
                  "Coordinamos entrevista y evaluación.",
                  "Te damos respuesta final.",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <FaRegCheckCircle className="mt-0.5 text-emerald-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-indigo-50 to-amber-50 ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Tip rápido</h3>
              <p className="mt-2 text-sm text-slate-600">
                Completa tus datos con calma. Si adjuntas experiencia y área, te ubicamos más rápido en una vacante acorde.
              </p>
              <div className="mt-4">
                <Link
                  href="/SocialShowcase"
                  className="inline-flex items-center justify-center w-full rounded-xl bg-slate-900 text-white py-2 font-semibold hover:bg-slate-800 transition"
                >
                  Ver nuestras redes
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Page;
