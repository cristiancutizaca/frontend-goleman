"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function sanitizePhone(input: string) {
  return (input || "").replace(/[^0-9]/g, "");
}

export default function Whatsapp() {
  const pathname = usePathname();

  const number = sanitizePhone(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999");

  const message = useMemo(() => {
    const map: Record<string, string> = {
      "/admision": "Hola, deseo información sobre admisión y matrícula. ¿Me apoyan con requisitos y costos?",
      "/school": "Hola, deseo información sobre la escuela y los niveles (inicial/primaria/secundaria).",
      "/events": "Hola, deseo información sobre próximos eventos y actividades del colegio.",
      "/contact": "Hola, deseo comunicarme con el colegio. ¿Me pueden apoyar con información?",
    };

    const base =
      pathname?.startsWith("/admision") ? "/admision" :
      pathname?.startsWith("/school") ? "/school" :
      pathname?.startsWith("/events") ? "/events" :
      pathname?.startsWith("/contact") ? "/contact" :
      "default";

    return (
      map[base] ||
      process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE ||
      "Hola, deseo información del Colegio Daniel Goleman."
    );
  }, [pathname]);

  if (!number) return null;

  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-5 right-5 z-[90] inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-4 py-3 text-white shadow-lg ring-1 ring-emerald-500/30 transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M21 11.5a8.5 8.5 0 1 1-4.1-7.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8.5 10.5c.4 1.4 1.6 2.6 3 3l1.1-.9c.3-.2.7-.2 1 0l1.1.7c.4.2.5.7.3 1.1l-.5 1c-.2.4-.6.6-1 .6-3.8 0-6.8-3-6.8-6.8 0-.4.2-.8.6-1l1-.5c.4-.2.9-.1 1.1.3l.7 1.1c.2.3.2.7 0 1l-.9 1.1Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M20.8 4.8 18 7.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-sm font-bold">WhatsApp</span>
        <span className="text-xs text-white/85">Escríbenos ahora</span>
      </span>
    </Link>
  );
}
