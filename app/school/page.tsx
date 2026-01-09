"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GalleryLightbox, { type GalleryImage } from "@/components/school/GalleryLightbox";
import { HeartIcon, GlobeAltIcon, SparklesIcon, AcademicCapIcon, BookOpenIcon, PhotographIcon, UserGroupIcon } from "@heroicons/react/outline";

const Feature = ({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-slate-900 p-3 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-base font-bold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  </div>
);

const ValueCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
    <h4 className="text-base font-bold text-slate-900">{title}</h4>
    <p className="mt-2 text-sm text-slate-600">{desc}</p>
  </div>
);

export default function SchoolPage() {
  const galleryImages: GalleryImage[] = [
    { src: "/image/panorama2.jpg", alt: "Patio y espacios del colegio" },
    { src: "/image/kinder.png", alt: "Nivel Inicial" },
    { src: "/image/primaria.webp", alt: "Nivel Primaria" },
    { src: "/image/secundaria.webp", alt: "Nivel Secundaria" },
    { src: "/image/colaboracion.png", alt: "Trabajo colaborativo" },
    { src: "/image/teache.webp", alt: "Acompañamiento docente" },
    { src: "/image/viajes.png", alt: "Actividades y salidas educativas" },
    { src: "/image/0001.jpg", alt: "Momentos escolares" },
  ];

  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image/panorama.jpg"
            alt="Nuestra escuela - Colegio Daniel Goleman"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
              Nuestra escuela
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Un colegio que forma <span className="text-blue-200">personas</span>
            </h1>
            <p className="mt-5 text-lg text-white/90">
              Promovemos el aprendizaje significativo y el desarrollo integral: académico, social y emocional,
              en un entorno seguro, cercano y con identidad intercultural.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admision"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Admisión
              </Link>
              <Link
                href="/events"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                Ver eventos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Feature
              title="Enfoque socioemocional"
              desc="Fortalecemos habilidades emocionales y sociales para convivir, aprender y liderar."
              Icon={HeartIcon}
            />
            <Feature
              title="Interculturalidad"
              desc="Valoramos la identidad, el respeto y la integración cultural como base del aula."
              Icon={GlobeAltIcon}
            />
            <Feature
              title="Aprendizaje activo"
              desc="Metodologías prácticas para resolver problemas con creatividad y pensamiento crítico."
              Icon={SparklesIcon}
            />
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-900 p-3 text-white">
                  <BookOpenIcon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">Misión</h2>
              </div>
              <p className="mt-4 text-slate-600">
                Brindar una educación de calidad centrada en el desarrollo integral del estudiante,
                potenciando competencias académicas, sociales y emocionales para que sea agente de cambio
                en su entorno.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-900 p-3 text-white">
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">Visión</h2>
              </div>
              <p className="mt-4 text-slate-600">
                Ser una institución educativa reconocida por su excelencia académica y formación humana,
                que inspire estudiantes responsables, críticos, solidarios y comprometidos con su comunidad
                y el mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Nuestros valores</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Lo que cuidamos todos los días para construir una comunidad educativa sólida.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              title="Respeto"
              desc="Promovemos el trato digno, la escucha y la convivencia saludable."
            />
            <ValueCard
              title="Responsabilidad"
              desc="Fomentamos hábitos, compromiso y autonomía en el aprendizaje."
            />
            <ValueCard
              title="Solidaridad"
              desc="Trabajamos en equipo y desarrollamos sentido de comunidad."
            />
            <ValueCard
              title="Identidad"
              desc="Valoramos la cultura y fortalecemos el orgullo por nuestras raíces."
            />
            <ValueCard
              title="Excelencia"
              desc="Buscamos mejorar continuamente con metas claras y acompañamiento."
            />
            <ValueCard
              title="Cuidado"
              desc="Priorizamos el bienestar emocional y un ambiente seguro para todos."
            />
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-900 p-3 text-white">
                <PhotographIcon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">Vida escolar</h2>
            </div>
            <p className="mt-2 text-slate-600">
              Actividades que fortalecen habilidades, valores y comunidad.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: "/image/kinder.png", label: "Inicial" },
                { src: "/image/primaria.webp", label: "Primaria" },
                { src: "/image/secundaria.webp", label: "Secundaria" },
                { src: "/image/viajes.png", label: "Actividades" },
                { src: "/image/colaboracion.png", label: "Colaboración" },
                { src: "/image/panorama2.jpg", label: "Comunidad" },
              ].map((it) => (
                <div
                  key={it.label}
                  className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200"
                >
                  <div className="relative h-44 w-full">
                    <Image src={it.src} alt={it.label} fill className="object-cover transition duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {it.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admision"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Postular / Admisión
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 text-white ring-1 ring-slate-800">
            <div className="absolute inset-0 opacity-20">
              <Image src="/image/sky.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-extrabold">¿Listo para conocer el colegio?</h2>
              <p className="mt-2 max-w-2xl text-white/80">
                Escríbenos para agendar una visita o resolver cualquier duda sobre admisión.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/51996960012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
                >
                  WhatsApp
                </a>
                <Link
                  href="/admision"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Ver admisión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GalleryLightbox images={galleryImages} />
</div>
  );
}
