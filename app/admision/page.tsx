"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MailIcon, LocationMarkerIcon, CheckCircleIcon } from "@heroicons/react/outline";

const ProcesoAdmision = dynamic(() => import("@/components/admision/ProcesoAdmision"), { ssr: false });
const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"), { ssr: false });

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
    <h3 className="text-base font-bold text-slate-900">{title}</h3>
    <div className="mt-3 text-sm text-slate-600">{children}</div>
  </div>
);

export default function AdmisionPage() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image/panorama2.jpg"
            alt="Admisión - Colegio Daniel Goleman"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Image src="/image/icongole.png" alt="Logo" fill className="object-contain p-2" />
            </div>
            <div>
              <p className="text-sm text-white/80">Admisión</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Proceso de Admisión
              </h1>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Revisa los pasos, requisitos y documentos. Si tienes dudas, te ayudamos por WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/51996960012"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
            >
              WhatsApp admisión
            </a>
            <Link
              href="#proceso"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
            >
              Ver pasos ↓
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="proceso" className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white p-4 sm:p-8 shadow-sm ring-1 ring-slate-200">
                <Suspense fallback={<DashboardSkeleton />}>
                  <ProcesoAdmision />
                </Suspense>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <InfoCard title="Resumen rápido">
                <ul className="space-y-2">
                  {[
                    "Completa el formulario de solicitud",
                    "Presenta documentos requeridos",
                    "Entrevista / evaluación (según nivel)",
                    "Confirmación y matrícula",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-blue-700" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title="Contacto">
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <PhoneIcon className="h-5 w-5 text-slate-900" />
                    <span>(+51) 996 960 012</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MailIcon className="h-5 w-5 text-slate-900" />
                    <span>infodgedu@gmail.com</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <LocationMarkerIcon className="h-5 w-5 text-slate-900" />
                    <span>Juliaca, Perú</span>
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/51996960012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Escribir por WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Formulario
                  </Link>
                </div>
              </InfoCard>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
