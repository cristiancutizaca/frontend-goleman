"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FEATURES } from "@/lib/features";
import type { NewsItem } from "@/lib/newsStatic";
import { STATIC_NEWS } from "@/lib/newsStatic";

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("es-PE", { year: "numeric", month: "short", day: "2-digit" });
  } catch {
    return dateStr;
  }
}

export default function NewsSection() {
  const enabled = FEATURES.news.enabled;

  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!enabled) return;

    let alive = true;

    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/news", { cache: "no-store" });
        const data = await res.json();

        if (!res.ok) throw new Error(data?.error || "No se pudieron cargar noticias.");
        if (alive) setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        // Fallback: si el backend no existe o falla, no te quedas sin contenido
        if (alive) setItems(STATIC_NEWS.slice(0, FEATURES.news.limit));
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [enabled]);

  const finalItems = useMemo(() => items.slice(0, FEATURES.news.limit), [items]);

  if (!enabled) return null;

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Noticias y avisos</h2>
            <p className="text-slate-600 mt-2">
              Publicaciones del colegio (puedes conectarlo a backend o a Google Calendar cuando quieras).
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Ver calendario
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 animate-pulse">
                <div className="h-36 w-full rounded-xl bg-slate-100" />
                <div className="h-4 bg-slate-100 rounded mt-5 w-3/4" />
                <div className="h-4 bg-slate-100 rounded mt-2 w-full" />
                <div className="h-4 bg-slate-100 rounded mt-2 w-2/3" />
              </div>
            ))}
          </div>
        ) : finalItems.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-600">
            No hay noticias por ahora.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finalItems.map((n) => (
              <article
                key={n.id}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={n.imageSrc || "/image/viajes.png"}
                    alt={n.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {(n.tag || n.date) && (
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {n.tag && (
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                          {n.tag}
                        </span>
                      )}
                      <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white shadow">
                        {formatDate(n.date)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">{n.title}</h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">{n.excerpt}</p>

                  {n.href ? (
                    <Link
                      href={n.href}
                      className="mt-4 inline-flex text-sm font-semibold text-indigo-700 hover:text-indigo-800"
                    >
                      Ver más →
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
