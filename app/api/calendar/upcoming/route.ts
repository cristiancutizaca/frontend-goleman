import { NextResponse } from "next/server";
import { FEATURES } from "@/lib/features";
import type { CalendarEvent } from "@/lib/calendarTypes";

function required(name: string) {
  const v = (process.env[name] || "").trim();
  if (!v) throw new Error(`${name} no está configurado en variables de entorno.`);
  return v;
}

// GET /api/calendar/upcoming
// Devuelve eventos desde HOY hasta HOY + windowDays (por defecto 14 días).
// Importante: esto NO depende de cuándo se creó el evento, solo de la fecha/hora del evento.
export async function GET() {
  try {
    // Si en features estás usando backend, aquí igual podemos devolver vacío
    // y que el cliente lo traiga desde tu API. Pero por defecto esto usa Google Calendar.
    const source = FEATURES.events.source;

    if (source !== "googleCalendar") {
      return NextResponse.json([], { status: 200 });
    }

    const calendarId = required("GOOGLE_CALENDAR_ID");
    const apiKey = required("GOOGLE_CALENDAR_API_KEY");

    const now = new Date();
    const timeMin = now.toISOString();
    const timeMax = new Date(now.getTime() + FEATURES.events.windowDays * 24 * 60 * 60 * 1000).toISOString();

    const url =
      "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(calendarId) +
      "/events" +
      `?key=${encodeURIComponent(apiKey)}` +
      `&timeMin=${encodeURIComponent(timeMin)}` +
      `&timeMax=${encodeURIComponent(timeMax)}` +
      `&singleEvents=true&orderBy=startTime` +
      `&maxResults=${encodeURIComponent(String(FEATURES.events.limit))}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        { error: `Google Calendar error ${res.status}: ${text || res.statusText}` },
        { status: 500 }
      );
    }

    const data = await res.json();
    const items = Array.isArray(data?.items) ? data.items : [];

    const normalized: CalendarEvent[] = items
      .map((ev: any) => {
        const start = ev?.start?.dateTime || (ev?.start?.date ? new Date(ev.start.date).toISOString() : null);
        const end = ev?.end?.dateTime || (ev?.end?.date ? new Date(ev.end.date).toISOString() : undefined);
        if (!start) return null;

        return {
          id: String(ev?.id || ""),
          summary: String(ev?.summary || "Evento"),
          description: ev?.description ? String(ev.description) : undefined,
          location: ev?.location ? String(ev.location) : undefined,
          start,
          end,
        } as CalendarEvent;
      })
      .filter(Boolean);

    return NextResponse.json(normalized, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Error desconocido" }, { status: 500 });
  }
}
