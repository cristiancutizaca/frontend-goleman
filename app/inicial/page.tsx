import Image from "next/image";

export default function InicialLandingPage() {
  return (
    <main className="font-sans text-[#4b5842] bg-[#FFFBE6]">

      {/* === Hero Section === */}
      <section className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 flex items-center justify-center bg-[#E3F9F6] relative min-h-[300px]">
          <div className="absolute inset-0 bg-[#E3F9F6] z-0" />
          <div className="bg-[#0796B0] text-white p-6 md:p-10 max-w-md z-10 w-full md:w-auto rounded-xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Bienvenidos al nivel<br />Inicial 🌼
            </h2>
            <p className="mt-4 text-[#D0F1F9] text-base">Descubriendo el mundo con alegría y amor</p>
            <button className="mt-6 px-5 py-2 bg-[#FFD166] text-[#054A57] hover:bg-[#ffe18f] rounded text-base font-semibold">
              Más información
            </button>
          </div>
        </div>
        <div className="flex-1 relative min-h-[300px]">
          <Image
            src="/image/mision.png"
            alt="Niños felices jugando"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* === Objetivos === */}
      <section className="flex flex-col items-center text-center px-4 py-16 md:py-20">
        <div className="w-20 h-20 relative mb-6">
          <Image
            src="/image/mision.png"
            alt="Icono"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <h2 className="text-3xl font-bold text-[#0796B0] mb-4">Nuestros objetivos</h2>
        <p className="max-w-2xl text-[#4b5842] text-base leading-relaxed px-2">
          En Inicial, fomentamos la curiosidad natural de los niños con actividades lúdicas, arte, juegos al aire libre y mucho amor. Aquí, cada niño aprende a su propio ritmo en un ambiente seguro y estimulante.
        </p>
      </section>

      {/* === Sección de Actividades === */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20">
        {["Exploración", "Arte y Juego", "Nutrición"].map((title, i) => (
          <div key={i} className="relative h-[400px] md:h-[500px] group rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/image/mision.png"
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-0 p-6 w-full bg-[#0796B0]/90 text-white backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-sm leading-snug">
                {title === "Exploración"
                  ? "Juegos, naturaleza y aprendizaje sensorial."
                  : title === "Arte y Juego"
                  ? "Colores, manualidades y mucha creatividad."
                  : "Comida saludable y momentos felices."}
              </p>
              <button className="mt-4 px-4 py-1 bg-[#FFD166] text-[#054A57] font-semibold rounded hover:bg-[#ffe18f] text-sm">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* === Galería === */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#0796B0] mb-10">Nuestros momentos mágicos ✨</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/image/mision.png"
                alt={`Galería ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}