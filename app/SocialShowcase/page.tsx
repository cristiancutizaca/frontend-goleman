"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";

const SocialShowcase = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white/90 text-sm backdrop-blur">
            <IoSparklesOutline className="text-white" />
            Redes sociales del colegio
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Conéctate con nuestra comunidad
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Publicamos actividades, eventos, logros y avisos importantes. Síguenos para mantenerte al día.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold shadow hover:shadow-md transition"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/15 text-white px-4 py-2 font-semibold backdrop-blur hover:bg-white/20 transition"
            >
              <FaYoutube /> YouTube
            </a>
            <a
              href="#contenido"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 text-slate-900 px-4 py-2 font-extrabold shadow hover:shadow-md transition"
            >
              Ver contenido
            </a>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section id="contenido" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Facebook */}
          <div className="lg:col-span-1 rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <h2 className="text-lg font-bold">Facebook</h2>
              <p className="text-white/90 text-sm">Últimas publicaciones y novedades.</p>
            </div>

            <div className="p-4">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <iframe
                  title="Facebook Page Plugin"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false"
                  width="100%"
                  height="520"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>

              <p className="mt-4 text-sm text-slate-600">
                Si el recuadro no carga (por bloqueadores), abre Facebook directamente.
              </p>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 text-white py-2 font-semibold hover:bg-slate-800 transition"
              >
                Abrir Facebook
              </a>
            </div>
          </div>

          {/* YouTube + tarjetas */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
                <h2 className="text-lg font-bold">Video destacado</h2>
                <p className="text-white/90 text-sm">Momentos, actividades y presentaciones.</p>
              </div>

              <div className="p-4">
                <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl bg-slate-100">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/7NKku06T0wc?start=3285"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Instagram",
                  icon: <FaInstagram className="text-pink-600" />,
                  desc: "Fotos, historias y actividades del día a día.",
                },
                {
                  title: "TikTok",
                  icon: <FaTiktok className="text-slate-900" />,
                  desc: "Clips cortos de eventos y participación estudiantil.",
                },
                {
                  title: "YouTube",
                  icon: <FaYoutube className="text-red-600" />,
                  desc: "Videos completos: actos, talleres y presentaciones.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
                      {c.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{c.title}</h3>
                      <p className="text-xs text-slate-500">Próximamente integrado</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{c.desc}</p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-full rounded-xl bg-slate-900 text-white py-2 font-semibold hover:bg-slate-800 transition"
                      onClick={(e) => e.preventDefault()}
                    >
                      Añadir enlace luego
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-indigo-50 via-cyan-50 to-amber-50 ring-1 ring-slate-200 p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">¿Quieres enterarte primero?</h2>
              <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
                Guarda nuestros canales y revisa los próximos eventos en el calendario. (Cuando actives el calendario, aquí se mostrará automáticamente.)
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link href="/events" className="rounded-xl bg-slate-900 text-white px-5 py-2 font-semibold hover:bg-slate-800 transition">
                  Ver eventos
                </Link>
                <Link href="/admision" className="rounded-xl bg-amber-400 text-slate-900 px-5 py-2 font-extrabold hover:brightness-95 transition">
                  Admisión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SocialShowcase;
