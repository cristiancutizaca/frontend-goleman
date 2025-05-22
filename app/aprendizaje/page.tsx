"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const niveles = [
  {
    title: "Inicial Goleman",
    subtitle: "3, 4 y 5 años",
    desc: "Nuestros niños exploran el mundo a través del juego, el arte y la curiosidad, sentando las bases para su desarrollo integral.",
    img: "/image/kinder.png",
    textColor: "text-orange-600",
    habilidades: [
      {
        titulo: "Lectura y escritura",
        descripcion: "Forman una relación positiva con la lectura y escritura desde pequeños.",
      },
      {
        titulo: "Pensamiento lógico matemático",
        descripcion: "Comprenden nociones básicas como cantidad, forma y orden de manera lúdica.",
      },
      {
        titulo: "Psicomotricidad",
        descripcion: "Desarrollan control de su cuerpo a través del juego y el movimiento.",
      },
      {
        titulo: "Habilidades comunicativas",
        descripcion: "Aprenden a expresarse, escuchar y compartir ideas en grupo.",
      },
      {
        titulo: "Autonomía",
        descripcion: "Realizan actividades por sí mismos, fortaleciendo la independencia.",
      },
      {
        titulo: "Capacidades expresivas",
        descripcion: "Exploran emociones y creatividad a través del arte, la música y el juego.",
      },
      {
        titulo: "Trabajo colaborativo",
        descripcion: "Aprenden a compartir, respetar turnos y colaborar con sus pares.",
      },
      {
        titulo: "Exploración del entorno",
        descripcion: "Descubren su ambiente natural y social mediante la curiosidad activa.",
      },
      {
        titulo: "Bienestar y cuidado personal",
        descripcion: "Adquieren hábitos de higiene, alimentación y autocuidado.",
      },
      {
        titulo: "Juego simbólico",
        descripcion: "Representan situaciones reales a través del juego imaginativo.",
      },
      {
        titulo: "Identidad y pertenencia",
        descripcion: "Reconocen sus emociones, gustos y desarrollan autoestima.",
      },
      {
        titulo: "Educación emocional",
        descripcion: "Identifican y gestionan emociones básicas para la convivencia.",
      },
    ],

  },
  {
    title: "Primaria Goleman",
    subtitle: "1ro a 6to de primaria",
    desc: "Fomentamos el pensamiento crítico, la comunicación y la responsabilidad, en un ambiente seguro y estimulante.",
    img: "/image/primaria.webp",
    textColor: "text-blue-600",
    habilidades: [
      {
        titulo: "Pensamiento lógico-matemático",
        descripcion: "Resuelven problemas aplicando estrategias y razonamiento.",
      },
      {
        titulo: "Comprensión lectora",
        descripcion: "Desarrollan habilidades para interpretar y analizar textos.",
      },
      {
        titulo: "Comunicación oral y escrita",
        descripcion: "Se expresan de forma clara y respetuosa en diversos contextos.",
      },
      {
        titulo: "Investigación y curiosidad científica",
        descripcion: "Exploran fenómenos naturales con método y espíritu científico.",
      },
      {
        titulo: "Tecnología y creatividad digital",
        descripcion: "Utilizan herramientas tecnológicas para crear y comunicar ideas.",
      },
      {
        titulo: "Trabajo en equipo",
        descripcion: "Colaboran activamente, respetando roles y opiniones.",
      },
      {
        titulo: "Autonomía y responsabilidad",
        descripcion: "Organizan sus tareas, cuidan sus materiales y asumen consecuencias.",
      },
      {
        titulo: "Educación artística",
        descripcion: "Exploran técnicas visuales, musicales y teatrales para expresarse.",
      },
      {
        titulo: "Cuidado del medio ambiente",
        descripcion: "Participan en prácticas ecológicas y respetan la naturaleza.",
      },
      {
        titulo: "Identidad personal y social",
        descripcion: "Valoran su cultura y aprenden a convivir con respeto.",
      },
      {
        titulo: "Regulación emocional",
        descripcion: "Reconocen emociones propias y ajenas para resolver conflictos.",
      },
      {
        titulo: "Sentido ético y valores",
        descripcion: "Actúan con honestidad, empatía y justicia en su vida escolar.",
      },
    ],

  },
  {
    title: "Secundaria Goleman",
    subtitle: "1ro a 5to de secundaria",
    desc: "Nuestros estudiantes desarrollan autonomía, liderazgo y vocación, enfrentando desafíos con creatividad y ética.",
    img: "/image/secundaria.webp",
    textColor: "text-green-700",
    habilidades: [
      {
        titulo: "Liderazgo",
        descripcion: "Asumen responsabilidades en la comunidad educativa y promueven el bienestar colectivo.",
      },
      {
        titulo: "Pensamiento crítico",
        descripcion: "Evalúan, argumentan y resuelven con criterio, desarrollando juicios informados.",
      },
      {
        titulo: "Proyectos interdisciplinarios",
        descripcion: "Aplican conocimientos de diversas áreas para resolver problemas del entorno real.",
      },
      {
        titulo: "Investigación académica",
        descripcion: "Formulan preguntas, recolectan información confiable y elaboran conclusiones fundamentadas.",
      },
      {
        titulo: "Autonomía y organización",
        descripcion: "Gestionan su tiempo, planifican tareas y asumen su aprendizaje con responsabilidad.",
      },
      {
        titulo: "Cultura digital",
        descripcion: "Utilizan tecnologías de manera ética y creativa para producir contenido significativo.",
      },
      {
        titulo: "Responsabilidad ciudadana",
        descripcion: "Participan en acciones sociales, valoran la democracia y respetan las normas de convivencia.",
      },
      {
        titulo: "Emprendimiento social",
        descripcion: "Desarrollan ideas innovadoras con impacto positivo en la comunidad.",
      },
      {
        titulo: "Comunicación efectiva",
        descripcion: "Se expresan con claridad, coherencia y respeto en diferentes contextos orales y escritos.",
      },
      {
        titulo: "Resolución de conflictos",
        descripcion: "Identifican causas, dialogan y proponen soluciones pacíficas y justas.",
      },
      {
        titulo: "Consciencia ambiental",
        descripcion: "Reconocen el impacto de sus acciones y promueven prácticas sostenibles.",
      },
      {
        titulo: "Trabajo en equipo",
        descripcion: "Colaboran activamente, valorando las ideas de otros y construyendo soluciones conjuntas.",
      },
    ],

  },
];

export default function GolemanLearningJourney() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="bg-cyan-600 py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ruta de Aprendizaje Progresiva</h1>
            <p className="text-yellow-900 font-semibold">
              En el Colegio Daniel Goleman, acompañamos a nuestros estudiantes en una ruta de aprendizaje que potencia sus habilidades académicas, sociales y emocionales.
            </p>
            <p className="mt-4 text-sm">
              Buscamos que cada estudiante alcance su máximo potencial a lo largo de su formación, preparándolos para un futuro exitoso y con propósito.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/image/0001.jpg"
              alt="Estudiantes del Colegio Goleman"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Secciones con expandir */}
      {niveles.map((section, idx) => (
        <section key={idx} className="py-12 px-4 md:px-20 bg-white border-b">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <Image
                src={section.img}
                alt={section.title}
                width={500}
                height={300}
                className="rounded"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className={`text-2xl font-semibold ${section.textColor}`}>{section.title}</h2>
              <h3 className="text-sm font-medium mb-2 text-gray-600">{section.subtitle}</h3>
              <p className="text-sm text-gray-700">{section.desc}</p>
              <button
                onClick={() => toggleExpand(idx)}
                className="mt-4 text-sm text-cyan-700 hover:underline"
              >
                {expandedIndex === idx ? "Cerrar" : "Ver más"}
              </button>
            </div>
          </div>

          {/* Habilidades expandibles */}
          <AnimatePresence>
            {expandedIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {section.habilidades.map((hab, hidx) => (
                  <div
                    key={hidx}
                    className="flex items-start gap-4 border-l-4 border-cyan-600 pl-4"
                  >
                    {/* Icono (puedes usar cualquiera aquí, ejemplo usando Emoji temporal) */}
                    <div className="text-3xl text-cyan-600 pt-1">
                      {/* Reemplaza por ícono real si lo tienes */}
                      🎓
                    </div>
                    <div>
                      <h4 className={`font-bold text-base ${section.textColor} mb-1`}>
                        {hab.titulo}
                      </h4>
                      <p className="text-sm text-gray-700">{hab.descripcion}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </section>
      ))}
    </main>
  );
}
