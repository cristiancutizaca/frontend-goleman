export type NewsItem = {
  id: string;
  title: string;
  // ISO date: "2026-01-09" o "2026-01-09T18:00:00-05:00"
  date: string;
  excerpt: string;
  href?: string;
  imageSrc?: string;
  tag?: string;
};

// ✅ Noticias DEMO (modo "static").
// Luego, cuando tengas backend, lo cambias a FEATURES.news.source = "backend" y listo.
export const STATIC_NEWS: NewsItem[] = [
  {
    id: "admision-2026",
    title: "Admisión 2026: inscripciones abiertas",
    date: "2026-01-09",
    excerpt: "Conoce requisitos, cronograma y agenda tu visita.",
    href: "/admision",
    imageSrc: "/image/subida.png",
    tag: "Admisión",
  },
  {
    id: "calendario",
    title: "Actividades y eventos del mes",
    date: "2026-01-09",
    excerpt: "Revisa el calendario actualizado con próximas actividades.",
    href: "/events",
    imageSrc: "/image/viajes.png",
    tag: "Eventos",
  },
  {
    id: "propuesta",
    title: "Nuestra propuesta educativa",
    date: "2026-01-09",
    excerpt: "Formación integral con enfoque humano y excelencia académica.",
    href: "/school",
    imageSrc: "/image/conc.png",
    tag: "Colegio",
  },
];
