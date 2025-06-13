"use client";

import React, { useEffect, useState } from "react";

type GoogleEvent = {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
};

const SocialShowcase = () => {
  const [eventos, setEventos] = useState<GoogleEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-goleman-production.up.railway.app")
      .then((res) => res.json())
      .then((data) => {
        setEventos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener eventos", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full min-h-screen bg-cyan-600 py-16 px-4 sm:px-6">
      <div className="mt-28 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-12">
          📅 Próximos eventos escolares
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Cargando eventos...</p>
        ) : eventos.length === 0 ? (
          <p className="text-center text-gray-600">No hay eventos próximos.</p>
        ) : (
          <div className="space-y-6">
            {eventos.map((event, index) => {
              const startStr = event.start?.dateTime ?? event.start?.date ?? "";
              const start = new Date(startStr);
              return (
                <div
                  key={event.id || index}
                  className="bg-white rounded-2xl p-6 shadow-md border-l-8 border-purple-400 hover:border-purple-600 transition-all duration-300"
                >
                  <h4 className="text-sm text-gray-500 font-medium uppercase">
                    {start.toLocaleDateString()} — {start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </h4>
                  <h3 className="text-xl font-bold text-purple-700 mt-1">{event.summary}</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">{event.description || "Sin descripción."}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Promo final */}
      <div className="mt-24 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-10 rounded-3xl shadow-2xl max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">¿Sabías qué?</h2>
        <p className="text-lg text-gray-700">
          ¡Más de 10,000 estudiantes han confiado en nuestra institución para transformar su futuro!
        </p>
      </div>
    </section>
  );
};

export default SocialShowcase;
