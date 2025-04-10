// /components/MainPage.tsx
import React from 'react';

type SectionBlockProps = {
  title: string;
  subtitle1?: string;
  description: string;
  subtitle2?: string;
  description2?: string;
  image: string;
  imageLeft?: boolean;
};

const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  subtitle1,
  description,
  subtitle2,
  description2,
  image,
  imageLeft = true,
}) => {
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
        <div className="bg-blue-800 text-white p-8 flex flex-col justify-center space-y-6">
          <div>
            {subtitle1 && <h3 className="text-lg font-semibold text-white mb-2">{subtitle1}</h3>}
            <p className="mb-4">{description}</p>
            {subtitle2 && <h3 className="text-lg font-semibold text-white mb-2">{subtitle2}</h3>}
            {description2 && <p className="mb-4">{description2}</p>}
          </div>
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
        description="Nuestra escuela es un espacio donde se promueve el aprendizaje integral, el respeto, la curiosidad y el pensamiento crítico. Fomentamos una comunidad participativa, segura y empática donde cada estudiante desarrolla su máximo potencial académico, social y humano."
        image="/image/escue.png"
        imageLeft
      />
      <SectionBlock
        title="Misión y visión"
        subtitle1="Misión"
        description="Brindar una educación de calidad centrada en el desarrollo integral de nuestros estudiantes, fortaleciendo sus capacidades intelectuales, éticas y emocionales para que sean agentes de cambio en su entorno."
        subtitle2="Visión"
        description2="Ser una institución educativa reconocida por su innovación pedagógica, compromiso con la excelencia y formación de ciudadanos responsables, críticos y solidarios con su comunidad y el mundo."
        image="/image/mision.png"
        imageLeft={false}
      />
    </div>
  );
};

export default MainPage;
