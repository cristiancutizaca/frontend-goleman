"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { AcademicCapIcon, CalendarIcon, OfficeBuildingIcon } from "@heroicons/react/outline";
import PrincipalHome from "@/components/home/PrincipalHome";
import NewsSection from "@/components/home/NewsSection";

const PorqueNosotros = dynamic(() => import("@/components/home/PorqueNosotros"), {
  loading: () => <p className="text-center py-10 text-slate-500">Cargando...</p>,
  ssr: false,
});
const NuestrosDiplomados = dynamic(() => import("@/components/home/NuestrosDiplomados"), {
  loading: () => <p className="text-center py-10 text-slate-500">Cargando...</p>,
  ssr: false,
});
const ContactForm = dynamic(() => import("@/components/home/ContactForm"), {
  loading: () => <p className="text-center py-10 text-slate-500">Cargando...</p>,
  ssr: false,
});
const ScrollToBotButton = dynamic(() => import("@/components/home/bounceDown"), {
  loading: () => null,
  ssr: false,
});

const QuickCard = ({
  href,
  title,
  desc,
  Icon,
}: {
  href: string;
  title: string;
  desc: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => (
  <Link
    href={href}
    className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
  >
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-slate-900 p-3 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700">
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
        <span className="mt-4 inline-flex text-sm font-semibold text-blue-700">
          Ver más →
        </span>
      </div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <PrincipalHome className="h-[640px] md:h-[600px] sm:h-[520px]" />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-24 pb-28 sm:pt-20 sm:pb-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
              Educación intercultural • enfoque socioemocional • formación integral
            </p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Colegio Intercultural <span className="text-blue-200">Daniel Goleman</span>
            </h1>

            <p className="mt-5 text-lg text-white/90">
              Un espacio seguro y estimulante donde tus hijos desarrollan su máximo potencial académico,
              social y humano.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admision"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Ver proceso de admisión
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="mx-auto -mt-10 max-w-7xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            <QuickCard
              href="/admision"
              title="Admisión"
              desc="Requisitos, pasos y documentos para postular."
              Icon={AcademicCapIcon}
            />
            <QuickCard
              href="/school"
              title="Nuestra escuela"
              desc="Misión, visión y propuesta educativa."
              Icon={OfficeBuildingIcon}
            />
            <QuickCard
              href="/events"
              title="Eventos"
              desc="Actividades, campañas y fechas importantes."
              Icon={CalendarIcon}
            />
          </div>
        </div>
      </section>

      {/* Propuesta / historia */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            <NuestrosDiplomados />
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 px-2 sm:px-6">
            <PorqueNosotros />
          </div>
        </div>
      </section>

      <NewsSection />

      {/* Contacto */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            <ContactForm />
          </div>
        </div>
      </section>

      <ScrollToBotButton />
    </div>
  );
}
