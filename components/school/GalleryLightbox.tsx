"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export type GalleryImage = {
  src: string;
  alt: string;
};

export default function GalleryLightbox({
  images,
  title = "Galería",
  subtitle = "Un vistazo a nuestras actividades, espacios y momentos.",
}: {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const safeImages = useMemo(() => images.filter(Boolean), [images]);

  const close = () => setOpen(false);

  const go = (dir: 1 | -1) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return safeImages.length - 1;
      if (next >= safeImages.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, safeImages.length]);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-600">Fotos</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
            </div>

            <p className="text-sm text-slate-500">
              Click en una imagen para ampliar
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {safeImages.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                aria-label={`Abrir imagen: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open && safeImages[index] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imágenes"
          onMouseDown={(e) => {
            // cerrar si clic fuera del contenido
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/10">
            <div className="relative aspect-video w-full">
              <Image
                src={safeImages[index].src}
                alt={safeImages[index].alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-white">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {safeImages[index].alt}
                </p>
                <p className="text-xs text-white/70">
                  {index + 1} / {safeImages.length}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
