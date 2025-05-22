"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="font-sans bg-cyan-600 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/fond-se.webp')" }}>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          
        </div>
      </section>

      {/* Seguridad */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-8 px-4"
      >
        <h2 className="uppercase text-sm tracking-widest">Comprometidos con tu desarrollo</h2>
        <p className="mt-2 text-sm max-w-lg mx-auto">
          En el nivel secundaria del Colegio Daniel Goleman, formamos líderes críticos, creativos y comprometidos con su comunidad. <a href="#" className="underline text-orange-500">Conoce más</a>
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
        <h3 className="text-sm tracking-widest uppercase">Áreas Académicas</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { letter: 'C', title: 'Comunicación' },
            { letter: 'M', title: 'Matemática' },
            { letter: 'H', title: 'Historia' },
            { letter: 'C', title: 'Ciencias' },
          ].map((c) => (
            <motion.div
              key={c.letter}
              whileHover={{ scale: 1.05 }}
              className="w-36 sm:w-40"
            >
              <div className="text-5xl font-bold text-yellow-300">{c.letter}</div>
              <h4 className="mt-2 font-semibold">{c.title}</h4>
              <p className="text-xs mt-1">Desarrollo integral para un futuro brillante.</p>
            </motion.div>
          ))}
        </div>
        <a href="#" className="mt-4 block text-sm underline text-orange-500">Ver áreas &gt;&gt;</a>
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
            <img src={`/gallery/${i + 1}.jpg`} alt={`Actividad ${i + 1}`} className="object-cover w-full h-full" />
          </motion.div>
        ))}
      </motion.section>

      {/* Próximos Eventos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 px-4"
      >
        <h3 className="text-sm tracking-widest uppercase mb-6">Próximos eventos escolares</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { date: '14', month: 'Junio' },
            { date: '26', month: 'Julio' },
            { date: '09', month: 'Agosto' },
            { date: '15', month: 'Septiembre' },
          ].map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-36 sm:w-40"
            >
              <div className="text-4xl font-bold text-yellow-300">{c.date}</div>
              <div className="uppercase text-sm">{c.month}</div>
              <p className="text-xs mt-2">Actividades extracurriculares y más.</p>
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
        <h2 className="text-4xl font-bold">NUESTRA IDENTIDAD</h2>
        <p className="mt-2 text-sm">Formamos ciudadanos con valores, conocimiento y pasión.</p>
        <a href="#" className="text-xs underline mt-4 inline-block">Leer más &gt;&gt;</a>
      </motion.section>
    </div>
  );
}
