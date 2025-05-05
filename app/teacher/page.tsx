import Image from "next/image";

const teamMembers = [
  {
    name: "Ana Rodríguez",
    title: "Profesora de aula",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "David Parra",
    title: "Director de programa",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "Tomás Castro",
    title: "Instructor de drones",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "Libia Vargas",
    title: "Asistente Educativa",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "Ana Rodríguez",
    title: "Profesora de aula",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "David Parra",
    title: "Director de programa",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "Tomás Castro",
    title: "Instructor de drones",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "Libia Vargas",
    title: "Asistente Educativa",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },


  {
    name: "Ana Rodríguez",
    title: "Profesora de aula",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "David Parra",
    title: "Director de programa",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "Tomás Castro",
    title: "Instructor de drones",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
  {
    name: "Libia Vargas",
    title: "Asistente Educativa",
    image: "/image/test1.webp",
    description:
      "Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#1a2b44] text-white py-20">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Nuestro personal</h2>
        <p className="text-lg">
          Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es
          fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu
          contenido y cambiar la fuente. En este espacio puedes contar tu
          historia y permitir que los usuarios sepan más sobre ti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-16">
        {teamMembers.map((member, idx) => {
          // Define el patrón alternante según pares
const layoutClass =
Math.floor(idx / 2) % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
"md:flex-row-reverse";

          return (
            <div
              key={idx}
              className={`flex flex-col ${layoutClass} w-full bg-white text-gray-800`}
            >
              <div className="relative w-full md:w-1/2 h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-indigo-700 mb-1">
                  {member.name}
                </h3>
                <p className="text-lg mb-2">{member.title}</p>
                <p className="text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
