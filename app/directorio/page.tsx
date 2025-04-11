import React from 'react';

// Solo un ejemplo de interfaz para tipar las props (TypeScript).
interface CardProps {
  name: string;
  title: string;
  email: string;
  // Permite controlar el color de la barra superior (ej. bg-yellow-300, bg-blue-100, etc.)
  barColor?: string;
}

const members = {
  facultad: [
    { name: 'Sr. David Horta', title: 'Director de inglés', email: 'info@misitio.com' },
    { name: 'Sra. Diana Morán', title: 'Directora de matemática', email: 'info@misitio.com' },
    { name: 'Sr. Aarón Layson', title: 'Director de ciencias sociales', email: 'info@misitio.com' },
    { name: 'Sra. Paola Santos', title: 'Directora de Ciencias', email: 'info@misitio.com' },
    { name: 'Sr. Ricardo Herrera', title: 'Director de Bellas Artes', email: 'info@misitio.com' },
    { name: 'Sra. Roberta Ramírez', title: 'Director de Economía', email: 'info@misitio.com' },
    { name: 'Sr. Benjamín Jaramillo', title: 'Director de Informática', email: 'info@misitio.com' },
    { name: 'Sra. Mariana Barraza', title: 'Directora de Opcionales', email: 'info@misitio.com' },
    { name: 'Sr. Nombre del miembro', title: 'Puesto', email: 'info@misitio.com' },
    { name: 'Sr. Nombre del miembro', title: 'Puesto', email: 'info@misitio.com' },
  ],
  personal: [
    { name: 'Sr. Mauricio Rodríguez', title: 'Soporte IT', email: 'info@misitio.com' },
    { name: 'Sra. Karen Romero', title: 'Coordinadora académica', email: 'info@misitio.com' },
    { name: 'Sr. Luis Ruíz', title: 'Jefe de información', email: 'info@misitio.com' },
    { name: 'Sra. Irene Serrano', title: 'Administradora de sistemas', email: 'info@misitio.com' },
    { name: 'Sr. Gonzalo García', title: 'Reclutador de admisión', email: 'info@misitio.com' },
    { name: 'Sra. Rosa García', title: 'Atención financiera', email: 'info@misitio.com' },
    { name: 'St. José Corral', title: 'Soporte administrativo', email: 'info@misitio.com' },
    { name: 'Sra. Patricia Roa', title: 'Servicios de apoyo educativo', email: 'info@misitio.com' },
    { name: 'Sr. Nombre miembro', title: 'Puesto', email: 'info@misitio.com' },
    { name: 'Sr. Nombre miembro', title: 'Puesto', email: 'info@misitio.com' },
  ],
};

// Tarjeta con barra de color arriba y contenido en blanco
const Card = ({ name, title, email, barColor }: CardProps) => (
  <div className="border-2 border-blue-800 bg-white rounded-md overflow-hidden">
    {/* Barra de color en la parte superior */}
    <div className={`${barColor ?? 'bg-yellow-300'} p-4`}>
      <h3 className="text-base font-bold text-blue-800">{name}</h3>
    </div>
    {/* Contenido principal en blanco */}
    <div className="p-4 text-blue-800">
      <p className="mb-2">{title}</p>
      {/* Separador horizontal para enfatizar el estilo */}
      <hr className="border-blue-800 mb-2" />
      <p className="underline">
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  </div>
);

export default function DirectorioFacultad() {
  return (
    <div className="font-sans text-blue-900 px-6 py-10 space-y-10">
      
      {/* === Encabezado principal === */}
      <div className="relative bg-white py-8 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-300" />
          <h1 className="text-3xl font-bold text-blue-700 flex items-center">
            <span className="text-4xl mr-2">→</span>
            Directorio de la facultad
          </h1>
        </div>
        <div className="bg-yellow-200 p-6 mt-4 max-w-4xl">
          <p className="text-blue-700">
            Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil.
            Haz clic en <strong>"Editar texto"</strong> o doble clic aquí para agregar tu contenido y cambiar la fuente.
          </p>
        </div>
      </div>

      {/* === Sección directora (imagen + presentación) === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[500px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"
          alt="Directora"
          className="w-full h-full object-cover"
        />
        <div className="bg-blue-700 text-white p-10">
          <h2 className="text-2xl font-bold text-yellow-300">Conoce a la directora</h2>
          <p className="mt-2">Prof. Roberta Borja</p>
          <p className="mt-4 text-sm">
            Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil.
            Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente.
          </p>
          <a href="mailto:info@misitio.com" className="underline text-yellow-300 block mt-4">
            info@misitio.com
          </a>
        </div>
      </div>

      {/* === Sección Facultad === */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Facultad</h2>
        <hr className="mb-4 border-blue-800" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members.facultad.map((m, i) => (
            <Card
              key={i}
              name={m.name}
              title={m.title}
              email={m.email}
              // Barra superior amarilla
              barColor="bg-yellow-300"
            />
          ))}
        </div>
      </section>

      {/* === Sección Personal === */}
      <section>
        <h2 className="text-2xl font-bold mt-10 mb-2">Personal</h2>
        <hr className="mb-4 border-blue-800" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members.personal.map((m, i) => (
            <Card
              key={i}
              name={m.name}
              title={m.title}
              email={m.email}
              // Barra superior azul clarito (por ejemplo)
              barColor="bg-blue-100"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
