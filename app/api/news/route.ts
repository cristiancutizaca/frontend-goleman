import { NextResponse } from "next/server";
import { FEATURES } from "@/lib/features";
import { STATIC_NEWS, type NewsItem } from "@/lib/newsStatic";

function cleanBase(url: string) {
  return url.replace(/\/$/, "");
}

export async function GET() {
  try {
    if (!FEATURES.news.enabled) {
      return NextResponse.json([], { status: 200 });
    }

    if (FEATURES.news.source === "static") {
      return NextResponse.json(STATIC_NEWS.slice(0, FEATURES.news.limit), { status: 200 });
    }

    // ✅ Modo backend
    const base = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
    if (!base) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_BACKEND_URL no está configurado (modo backend de noticias)." },
        { status: 500 }
      );
    }

    // Convención sugerida: GET /news?limit=6
    const path = (process.env.NEWS_BACKEND_PATH || "/news").trim();
    const url = cleanBase(base) + path + `?limit=${encodeURIComponent(String(FEATURES.news.limit))}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        { error: `Backend error ${res.status}: ${text || res.statusText}` },
        { status: 500 }
      );
    }

    const data = await res.json();

    // Esperamos que el backend devuelva NewsItem[] o {items: NewsItem[]}
    const items: NewsItem[] = Array.isArray(data) ? data : Array.isArray(data?.items) ? data.items : [];
    return NextResponse.json(items.slice(0, FEATURES.news.limit), { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Error desconocido" }, { status: 500 });
  }
}
