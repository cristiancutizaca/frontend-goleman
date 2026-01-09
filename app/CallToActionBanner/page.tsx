"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";

const CallToActionBanner = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero / Banner */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <motion.section
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-indigo-700 to-cyan-600 text-white rounded-3xl p-10 md:p-14 shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                Convocatorias
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
                ¡Necesitamos tu talento!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
                Ayúdanos a transformar la educación. ¿Listo para inspirar a la próxima generación?
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                {[
                  { emoji: "💡", label: "Innovación educativa" },
                  { emoji: "🚀", label: "Impulsa tu carrera" },
                  { emoji: "👥", label: "Red de impacto" },
                ].map((x) => (
                  <div key={x.label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-amber-300">{x.emoji}</span>
                    <span className="text-sm font-medium">{x.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:flex-col gap-3 text-sm sm:text-base">
              <a
                href="tel:+51996960012"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow hover:shadow-md transition"
              >
                📞 Llámanos: +51 996 960 012
              </a>
              <a
                href="mailto:infodgedu@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/15 text-white font-semibold rounded-xl shadow-sm backdrop-blur hover:bg-white/20 transition"
              >
                ✉️ Escríbenos: infodgedu@gmail.com
              </a>
              <Link
                href="/convocatoria"
                className="inline-flex items-center justify-center text-center bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-extrabold shadow hover:shadow-md transition"
              >
                Postula ahora
              </Link>
            </div>
          </div>
        </motion.section>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-8">
              <h2 className="text-2xl font-extrabold text-slate-900">¿Qué buscamos?</h2>
              <p className="mt-2 text-slate-600">
                Personas con vocación, responsabilidad y ganas de construir una comunidad educativa fuerte.
              </p>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  "Docentes comprometidos y creativos",
                  "Comunicación clara con padres y estudiantes",
                  "Trabajo en equipo y cultura de mejora",
                  "Uso básico de herramientas digitales",
                ].map((t) => (
                  <div key={t} className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4 flex gap-3">
                    <FaRegCheckCircle className="mt-0.5 text-emerald-600" />
                    <div className="text-sm font-semibold text-slate-800">{t}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-amber-50 ring-1 ring-slate-200 p-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Proceso de postulación</h2>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Postula", desc: "Completa el formulario con tus datos." },
                  { step: "2", title: "Entrevista", desc: "Coordinamos una reunión contigo." },
                  { step: "3", title: "Ingreso", desc: "Te damos respuesta y fecha de inicio." },
                ].map((s) => (
                  <div key={s.step} className="rounded-2xl bg-white ring-1 ring-slate-200 p-5">
                    <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-extrabold">
                      {s.step}
                    </div>
                    <h3 className="mt-3 font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Beneficios</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {[
                  "Capacitaciones y acompañamiento",
                  "Ambiente profesional y colaborativo",
                  "Reconocimiento a desempeño",
                  "Crecimiento y línea de carrera",
                ].map((b) => (
                  <li key={b} className="flex gap-2">
                    <FaRegCheckCircle className="mt-0.5 text-emerald-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/convocatoria"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 text-white py-2 font-semibold hover:bg-slate-800 transition"
              >
                Ir al formulario
              </Link>
            </div>

            <div className="rounded-3xl bg-slate-900 text-white p-6">
              <h3 className="text-lg font-extrabold">¿Tienes dudas?</h3>
              <p className="mt-2 text-sm text-white/80">
                Escríbenos por WhatsApp y te respondemos rápido.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-400 text-slate-900 py-2 font-extrabold hover:brightness-95 transition"
              >
                Contacto
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CallToActionBanner;
