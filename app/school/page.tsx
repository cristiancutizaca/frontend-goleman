  // /components/MainPage.tsx
  import React from 'react';

  type SectionBlockProps = {
    title: string;
    description: string;
    image: string;
    imageLeft?: boolean;
  };

  const SectionBlock: React.FC<SectionBlockProps> = ({ title, description, image, imageLeft = true }) => {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-bold text-blue-800 px-6 mb-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-4 before:bg-yellow-400">
          {title}
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            imageLeft ? '' : 'md:flex-row-reverse'
          } bg-yellow-200`}
        >
          <div className="w-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="bg-blue-800 text-white p-8 flex flex-col justify-center">
            <p className="mb-4">{description}</p>
            <a href="#" className="underline text-sm">
              Más información
            </a>
          </div>
        </div>
      </section>
    );
  };

  const MainPage: React.FC = () => {
    return (
      <div className="max-w-5xl mx-auto">
        <SectionBlock
          title="La escuela"
          description="Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente."
          image="/images/escuela.jpg"
          imageLeft
        />
        <SectionBlock
          title="Misión y visión"
          description="Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en 'Editar texto' o doble clic aquí para agregar tu contenido y cambiar la fuente."
          image="/images/mision.jpg"
          imageLeft={false}
        />
      </div>
    );
  };

  export default MainPage;
