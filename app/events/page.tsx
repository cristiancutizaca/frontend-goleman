"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FEATURES } from "@/lib/features";
import type { CalendarEvent } from "@/lib/calendarTypes";

function formatWhen(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("es-PE", { weekday: "short", year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

export default function EventsPage() {
  const [eventos, setEventos] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const enabled = FEATURES.events.enabled;

  useEffect(() => {
    if (!enabled) return;

    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/events", { cache: "no-store" });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "No se pudieron cargar eventos.");
        if (alive) setEventos(Array.isArray(data) ? data : []);
      } catch (err) {
        if (alive) setEventos([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [enabled]);

  const title = useMemo(() => {
    const days = FEATURES.events.windowDays;
    return `📅 Próximos eventos (siguientes ${days} días)`;
  }, []);

  return (
    <section className="w-full min-h-screen bg-slate-50 py-16 px-4 sm:px-6">
      <div className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 mb-12">{title}</h2>

        {!enabled ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-600">
            La sección de eventos está desactivada.
          </div>
        ) : loading ? (
          <p className="text-center text-slate-600">Cargando eventos...</p>
        ) : eventos.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-600">
            No hay eventos en las próximas {FEATURES.events.windowDays} días.
          </div>
        ) : (
          <div className="space-y-6">
            {eventos.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{event.summary}</h3>
                    {event.location ? <p className="text-sm text-slate-500 mt-1">📍 {event.location}</p> : null}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl px-3 py-2 w-fit">
                    {formatWhen(event.start)}
                  </div>
                </div>

                {event.description ? (
                  <p className="mt-4 text-slate-600 leading-relaxed whitespace-pre-line">{event.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
