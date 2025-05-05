import Image from "next/image";
export default function SchoolLandingPage() {
  return (
    <main className="font-sans text-white bg-white">

      {/* === Hero Section === */}
      <section className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-[#003366] p-10 flex flex-col justify-center min-h-[400px]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Goleman <br /> <span className="text-white">Primaria</span>
          </h1>
          <p className="mt-4 text-xl">Un lugar para crecer y aprender</p>
          <a href="#" className="mt-6 text-sm underline font-medium text-white">Sobre la Institución</a>
        </div>
        <div className="flex-1 relative min-h-[400px]">
          <Image
            src="/image/test.webp"
            alt="Hero Image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* === Safety First Section === */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-[#e3f2fd]">
        <div className="relative min-h-[300px]">
          <Image
            src="/image/test.webp"
            alt="Seguridad"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#003366] mb-2">Seguridad Primero</h3>
          <p className="text-[#003366] text-sm">
            Reapertura completa con protocolos físicos de distanciamiento para un aprendizaje seguro y presencial.
          </p>
          <a href="#" className="mt-4 font-semibold underline text-sm text-[#003366]">Ver detalles</a>
        </div>
      </section>

      {/* === Why Goleman === */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-[#003366] mb-8">¿Por qué elegir Goleman?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* First Row */}
          <div className="relative h-64 md:col-span-2">
            <Image src="/image/enfoque.webp" alt="Nuestro enfoque" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold">Nuestro enfoque</h3>
              <p className="text-sm">Educación personalizada con valores y creatividad.</p>
              <a href="#" className="text-sm underline mt-2">Leer más</a>
            </div>
          </div>
          <div className="relative h-64">
            <Image src="/image/admission.webp" alt="Admisión" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold">Admisión</h3>
              <p className="text-sm">Proceso abierto. Descubre cómo unirte a la familia Goleman.</p>
              <a href="/admission" className="text-sm underline mt-2">Inscribirse hoy</a>
            </div>
          </div>

          {/* Second Row */}
          <div className="relative h-64">
            <Image src="/image/programas.webp" alt="Programas" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold">Aprendizaje enriquecido</h3>
              <p className="text-sm">Programas que fortalecen habilidades para el futuro.</p>
              <a href="#" className="text-sm underline mt-2">Ver programas</a>
            </div>
          </div>
          <div className="relative h-64">
            <Image src="/image/actividad3.webp" alt="Actividad 1" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold">Galería de Actividades</h3>
              <p className="text-sm">Mira las fotos de nuestros estudiantes aprendiendo y creciendo.</p>
              <a href="/galeria" className="text-sm underline mt-2">Ver galería</a>
            </div>
          </div>
          <div className="relative h-64">
            <Image src="/image/actividad4.webp" alt="Actividad 2" fill style={{ objectFit: 'cover' }} />
          </div>

          {/* Third Row */}
          <div className="relative h-64">
            <Image src="/image/actividad5.webp" alt="Actividad 3" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold">Galería de Actividades</h3>
              <p className="text-sm">Fotos de excursiones, proyectos, y juegos escolares.</p>
              <a href="/galeria" className="text-sm underline mt-2">Ver galería completa</a>
            </div>
          </div>
          <div className="relative h-64 md:col-span-2">
            <Image src="/image/actividad1.webp" alt="Galería 1" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

    </main>
  );
}
