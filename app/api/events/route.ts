import { NextResponse } from "next/server";
import { FEATURES } from "@/lib/features";
import type { CalendarEvent } from "@/lib/calendarTypes";

function required(name: string) {
  const v = (process.env[name] || "").trim();
  if (!v) throw new Error(`${name} no está configurado en variables de entorno.`);
  return v;
}
function cleanBase(url: string) {
  return url.replace(/\/$/, "");
}

// GET /api/events
// - Modo googleCalendar: filtra SOLO próximos X días (por defecto 14).
// - Modo backend: proxyea a tu API.
export async function GET() {
  try {
    if (!FEATURES.events.enabled) return NextResponse.json([], { status: 200 });

    if (FEATURES.events.source === "backend") {
      const base = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
      if (!base) {
        return NextResponse.json(
          { error: "NEXT_PUBLIC_BACKEND_URL no está configurado (modo backend de eventos)." },
          { status: 500 }
        );
      }

      // Convención sugerida: GET /events/upcoming?days=14&limit=20
      const path = (process.env.EVENTS_BACKEND_PATH || "/events/upcoming").trim();
      const url =
        cleanBase(base) +
        path +
        `?days=${encodeURIComponent(String(FEATURES.events.windowDays))}` +
        `&limit=${encodeURIComponent(String(FEATURES.events.limit))}`;

      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        return NextResponse.json(
          { error: `Backend error ${res.status}: ${text || res.statusText}` },
          { status: 500 }
        );
      }
      const data = await res.json();
      return NextResponse.json(data, { status: 200 });
    }

    // ✅ Modo Google Calendar (public)
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
