"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import GalleryLightbox from "@/components/school/GalleryLightbox";

const AREAS = [
  { title: "Comunicación", desc: "Comprensión lectora, expresión oral y escrita." },
  { title: "Matemática", desc: "Razonamiento lógico y resolución de problemas." },
  { title: "Ciencias", desc: "Investigación, laboratorio y pensamiento crítico." },
  { title: "Historia y Ciudadanía", desc: "Identidad, análisis social y valores." },
  { title: "Inglés", desc: "Comunicación global con enfoque práctico." },
  { title: "Tecnología", desc: "Competencias digitales y proyectos." },
];

const EVENTOS_DEMO = [
  { title: "Feria de ciencias", date: "14 Jun" },
  { title: "Reunión de padres", date: "26 Jul" },
  { title: "Campeonato deportivo", date: "09 Ago" },
  { title: "Aniversario institucional", date: "15 Sep" },
];

export default function SecundariaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/image/fond-se.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/20" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-300/15 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white/90 text-sm backdrop-blur">
            Nivel Secundaria
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Formación sólida, moderna y con valores
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Acompañamos a los estudiantes en su etapa clave: fortalecemos habilidades, identidad, pensamiento crítico y preparación para su futuro.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/admision"
              className="rounded-xl bg-amber-400 text-slate-900 px-5 py-3 font-extrabold shadow hover:shadow-md transition"
            >
              Admisión
            </Link>
            <a
              href="#areas"
              className="rounded-xl bg-white/15 px-5 py-3 font-semibold backdrop-blur hover:bg-white/20 transition"
            >
              Ver áreas académicas
            </a>
            <a
              href="#galeria"
              className="rounded-xl bg-white/15 px-5 py-3 font-semibold backdrop-blur hover:bg-white/20 transition"
            >
              Ver galería
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { k: "Metodología", v: "Activa y por proyectos" },
              { k: "Acompañamiento", v: "Tutoría y orientación" },
              { k: "Enfoque", v: "Tecnología + valores" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4 backdrop-blur">
                <div className="text-xs uppercase tracking-wider text-white/70">{s.k}</div>
                <div className="mt-1 font-bold">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad / bienestar */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-8 md:p-10 grid lg:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Bienestar y seguridad
            </h2>
            <p className="mt-3 text-slate-600">
              Promovemos un entorno respetuoso, con convivencia sana y acompañamiento constante para que cada estudiante aprenda con confianza.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {[
                "Tutorías y orientación",
                "Convivencia escolar y valores",
                "Comunicación con familias",
                "Prevención y soporte emocional",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <FaRegCheckCircle className="mt-0.5 text-emerald-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 text-white px-5 py-2.5 font-semibold hover:bg-slate-800 transition"
              >
                Contáctanos
              </Link>
              <Link
                href="/school"
                className="rounded-xl bg-slate-50 ring-1 ring-slate-200 text-slate-900 px-5 py-2.5 font-semibold hover:bg-white transition"
              >
                Nuestra escuela
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-amber-50 ring-1 ring-slate-200 p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "Disciplina", d: "Respeto y responsabilidad" },
                { t: "Proyectos", d: "Aprendizaje aplicado" },
                { t: "Comunicación", d: "Con familias y estudiantes" },
                { t: "Cultura", d: "Identidad y valores" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
                  <div className="text-sm font-extrabold text-slate-900">{x.t}</div>
                  <div className="mt-1 text-xs text-slate-600">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Áreas académicas */}
      <section id="areas" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Áreas académicas</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Refuerzo de competencias clave con enfoque práctico, proyectos y acompañamiento.
            </p>
          </div>
          <Link
            href="/aprendizaje"
            className="rounded-xl bg-amber-400 text-slate-900 px-5 py-2.5 font-extrabold hover:brightness-95 transition"
          >
            Propuesta educativa
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map((a) => (
            <motion.div
              key={a.title}
              whileHover={{ y: -2 }}
              className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-6"
            >
              <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-extrabold">
                {a.title[0]}
              </div>
              <h3 className="mt-4 font-extrabold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Galería</h2>
            <p className="mt-2 text-slate-600">Actividades, proyectos y momentos del año escolar.</p>
          </div>
        </div>

        <div className="mt-8">
          {/* Reutiliza el lightbox del proyecto */}
          <GalleryLightbox
            images={[
              { src: "/gallery/1.jpg", alt: "Actividad 1" },
              { src: "/gallery/2.jpg", alt: "Actividad 2" },
              { src: "/gallery/3.jpg", alt: "Actividad 3" },
              { src: "/gallery/4.jpg", alt: "Actividad 4" },
              { src: "/gallery/5.jpg", alt: "Actividad 5" },
              { src: "/gallery/6.jpg", alt: "Actividad 6" },
            ]}
            title=""
            subtitle=""
          />
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-amber-50 ring-1 ring-slate-200 p-8 md:p-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Próximos eventos</h2>
              <p className="mt-2 text-slate-600">
                (Demo) Luego se conectará automáticamente al calendario.
              </p>
            </div>
            <Link href="/events" className="rounded-xl bg-slate-900 text-white px-5 py-2.5 font-semibold hover:bg-slate-800 transition">
              Ver todos
            </Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EVENTOS_DEMO.map((e) => (
              <div key={e.title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-5">
                <div className="text-xs uppercase tracking-wider text-slate-500">{e.date}</div>
                <div className="mt-1 font-extrabold text-slate-900">{e.title}</div>
                <div className="mt-2 text-sm text-slate-600">Actividad institucional</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identidad */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 py-16 text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold">Nuestra identidad</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Formamos ciudadanos con valores, conocimiento y pasión por aprender.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/school" className="rounded-xl bg-white text-slate-900 px-5 py-2.5 font-extrabold hover:brightness-95 transition">
              Conócenos
            </Link>
            <Link href="/admision" className="rounded-xl bg-amber-400 text-slate-900 px-5 py-2.5 font-extrabold hover:brightness-95 transition">
              Solicitar vacante
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
