// ✅ Feature toggles: edita este archivo y listo (ON/OFF + fuente de datos)
// Tip: Si luego quieres controlarlo por variables de entorno, también te dejo soporte opcional.
export type NewsSource = "static" | "backend";
export type EventsSource = "googleCalendar" | "backend";

const env = (key: string) => (process.env[key] || "").trim();

export const FEATURES = {
  news: {
    // ON/OFF noticias en la Home (si lo apagas, la sección no se muestra)
    enabled: env("NEXT_PUBLIC_NEWS_ENABLED") ? env("NEXT_PUBLIC_NEWS_ENABLED") === "true" : true,
    // "static" = demo local; "backend" = traer desde tu API cuando la tengas
    source: (env("NEXT_PUBLIC_NEWS_SOURCE") as NewsSource) || ("static" as NewsSource),
    // Cuántas noticias mostrar en la Home
    limit: env("NEXT_PUBLIC_NEWS_LIMIT") ? Number(env("NEXT_PUBLIC_NEWS_LIMIT")) : 6,
  },
  events: {
    // ON/OFF página de eventos (si lo apagas, puedes ocultar el link y/o mostrar mensaje)
    enabled: env("NEXT_PUBLIC_EVENTS_ENABLED") ? env("NEXT_PUBLIC_EVENTS_ENABLED") === "true" : true,
    // "googleCalendar" = se trae del calendario; "backend" = tu API (si luego quieres)
    source: (env("NEXT_PUBLIC_EVENTS_SOURCE") as EventsSource) || ("googleCalendar" as EventsSource),
    // Ventana de anticipación (2 semanas = 14 días)
    windowDays: env("NEXT_PUBLIC_EVENTS_WINDOW_DAYS") ? Number(env("NEXT_PUBLIC_EVENTS_WINDOW_DAYS")) : 14,
    // Cuántos eventos mostrar (para no listar 200 si hay mucho)
    limit: env("NEXT_PUBLIC_EVENTS_LIMIT") ? Number(env("NEXT_PUBLIC_EVENTS_LIMIT")) : 20,
  },
} as const;

// ⚠️ IMPORTANTE:
// - Si NO quieres usar .env, ignora los NEXT_PUBLIC_* y cambia directamente FEATURES arriba.
// - Para Google Calendar, la API KEY + CALENDAR ID van en variables de entorno *del servidor* (no públicas).
