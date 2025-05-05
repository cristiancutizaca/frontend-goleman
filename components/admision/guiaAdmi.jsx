"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* ...Secciones anteriores... */}

      {/* Proceso de Admisión */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-6 bg-transparent"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          Proceso de Admisión
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              number: "1",
              title: "Presentación “Descubre Áleph”",
              text: "Tenemos presentaciones del colegio todos los meses. Para participar, se debe llenar el formulario de contacto y la coordinadora de admisión del colegio se contactará con ustedes. La presentación se lleva a cabo con nuestro Líder Pedagógico, León Trahtemberg, nuestra Co-Fundadora y Directora de Diseño Pedagógico, Fiorella De Ferrari y con nuestro equipo pedagógico."
            },
            {
              number: "2",
              title: "Completar solicitud de admisión",
              text: "Luego de haber sido parte de la presentación “Descubre Áleph” o haber tenido una reunión previa con admisión, la coordinadora les enviará la solicitud que deberá ser completada en la fecha que se les indique."
            },
            {
              number: "3",
              title: "Entrevista",
              text: "La coordinadora de admisión se contactará con las familias para programar una entrevista con un miembro de la comisión de admisión."
            },
            {
              number: "4",
              title: "Resultados",
              text: "En un plazo máximo de 10 días después de realizada la entrevista, la comisión de admisión enviará un correo electrónico de bienvenida solamente a los admitidos."
            },
            {
              number: "5",
              title: "Pago de cuota de ingreso",
              text: "Una vez admitido el postulante, los padres deberán abonar el monto correspondiente a la cuota de ingreso en el BCP en un plazo máximo de 7 días útiles. El monto se encuentra detallado en la web. Transcurrida esta fecha la vacante será liberada."
            },
            {
              number: "6",
              title: "Contacto del colegio con las familias admitidas",
              text: "El colegio se pondrá en contacto con las familias admitidas en noviembre del año anterior al ingreso de su hijo para dar inicio al proceso de matrícula y acogida."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="text-left"
            >
              <div className="text-green-700 font-bold text-xl flex items-center gap-4 mb-2">
                <div className="w-10 h-10 border-2 border-green-400 rounded-full flex items-center justify-center text-lg">
                  {item.number}
                </div>
                <span>{item.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ...otras secciones */}
    </div>
  );
}
