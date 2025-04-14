"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-art-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white text-4xl sm:text-5xl md:text-6xl font-bold p-6 sm:p-8 md:p-12 text-center leading-tight shadow-xl max-w-sm sm:max-w-md md:max-w-lg"
          >
            CREA<br />TIVI<br />DAD.
            <div className="mt-4 text-2xl">⬇</div>
          </motion.div>
        </div>
      </section>

      {/* Seguridad */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 text-center py-8 px-4"
      >
        <h2 className="uppercase text-sm tracking-widest">Seguridad ante todo</h2>
        <p className="mt-2 text-sm max-w-lg mx-auto">
          Hacemos todo lo posible para garantizar la salud y la seguridad de nuestros alumnos y empleados. Encuentra información adicional <a href="#" className="underline text-orange-500">AQUÍ</a>
        </p>
      </motion.section>

      {/* Cursos */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 px-4"
      >
        <h3 className="text-sm tracking-widest uppercase">Los Cursos</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { letter: 'B', title: 'Bellas artes' },
            { letter: 'D', title: 'Diseño gráfico' },
            { letter: 'G', title: 'Grafiti' },
            { letter: 'I', title: 'Ilustración' },
          ].map((c) => (
            <motion.div
              key={c.letter}
              whileHover={{ scale: 1.05 }}
              className="w-36 sm:w-40"
            >
              <div className="text-5xl font-bold">{c.letter}</div>
              <h4 className="mt-2 font-semibold">{c.title}</h4>
              <p className="text-xs mt-1">Parrafo. Haz clic aquí para agregar tu propio texto y editar.</p>
            </motion.div>
          ))}
        </div>
        <a href="#" className="mt-4 block text-sm underline text-orange-500">Ver cursos &gt;&gt;</a>
      </motion.section>

      {/* Galería */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="aspect-square overflow-hidden"
          >
            <img src={`/gallery/${i + 1}.jpg`} alt={`Obra ${i + 1}`} className="object-cover w-full h-full" />
          </motion.div>
        ))}
      </motion.section>

      {/* Próximos Cursos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 px-4"
      >
        <h3 className="text-sm tracking-widest uppercase mb-6">Próximos cursos</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { date: '14', month: 'Marzo' },
            { date: '26', month: 'Marzo' },
            { date: '09', month: 'Abril' },
            { date: '15', month: 'Abril' },
          ].map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-36 sm:w-40"
            >
              <div className="text-4xl font-bold">{c.date}</div>
              <div className="uppercase text-sm">{c.month}</div>
              <p className="text-xs mt-2">Título. Haz clic aquí para agregar tu texto y editarlo.</p>
              <a href="#" className="text-orange-500 text-xs underline mt-1 inline-block">Leer más &gt;&gt;</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Identidad */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-black text-white text-center py-20 px-4"
      >
        <h2 className="text-4xl font-bold">IDENTIDAD</h2>
        <p className="mt-2 text-sm">CONQUISTA TU PROPIO ESTILO</p>
        <a href="#" className="text-xs underline mt-4 inline-block">Leer más &gt;&gt;</a>
      </motion.section>
    </div>
  );
}
