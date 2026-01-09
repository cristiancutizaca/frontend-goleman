export function getBackendBaseUrl() {
  // ✅ URL del backend cuando exista (ej: https://api.tucolegio.com)
  // Puedes ponerlo en .env.local como NEXT_PUBLIC_BACKEND_URL=
  return (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
}

export async function backendGet<T>(path: string, init?: RequestInit): Promise<T> {
  const base = getBackendBaseUrl();
  if (!base) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL no está configurado.");
  }

  const url = base.replace(/\/$/, "") + path;
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Backend error ${res.status}: ${text || res.statusText}`);
  }
  return res.json() as Promise<T>;
}
