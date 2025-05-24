"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const SERVICE_ID = "service_kyq65dd";
const TEMPLATE_ID = "template_g4fyjqe";
const USER_ID = "wPFS8-SDiJU5s3tun";

interface FormData {
  nombres: string;
  celular: string;
  correo: string;
  mensaje: string;
}

const ContactoPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = () => {
    if (!formRef.current) return;
    setSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        setSending(false);
        setShowAlert(true);
        reset();
        setTimeout(() => setShowAlert(false), 4000);
      })
      .catch(() => {
        setSending(false);
      });
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="form-section max-w-3xl mx-auto mt-16 p-10 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-3xl shadow-2xl border border-blue-200"
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-10 uppercase tracking-widest">
          ¡Contáctanos!
        </h2>

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4 w-full">
            <div>
              <label className="block text-gray-700 font-medium">Nombres</label>
              <input
                {...register("nombres", { required: true })}
                type="text"
                className="w-full px-4 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Nombres completos"
              />
              {errors.nombres && (
                <span className="text-red-500 text-sm">Este campo es obligatorio</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium">N° Celular</label>
              <input
                {...register("celular", { required: true, pattern: /^\d{9}$/ })}
                type="text"
                className="w-full px-4 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="999 999 999"
              />
              {errors.celular && (
                <span className="text-red-500 text-sm">
                  Introduce un número de celular válido
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              {...register("correo", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
              type="email"
              className="w-full px-4 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Ej: ejemplo@gmail.com"
            />
            {errors.correo && (
              <span className="text-red-500 text-sm">
                Introduce un correo electrónico válido
              </span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Mensaje</label>
            <textarea
              {...register("mensaje", { required: true })}
              className="w-full h-32 px-4 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí..."
            />
            {errors.mensaje && (
              <span className="text-red-500 text-sm">Este campo es obligatorio</span>
            )}
          </div>

          <Button
            type="submit"
            disabled={sending}
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-500"
          >
            {sending ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>

        {showAlert && (
          <div
            className="mt-4 p-4 text-green-800 bg-green-100 border-l-4 border-green-500 rounded-lg"
            role="alert"
          >
            ¡Correo enviado con éxito!
          </div>
        )}
      </motion.section>

      {/* Mapa y sección de información de contacto sin cambios */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-3xl text-center text-purple-800 font-extrabold mb-8 uppercase tracking-wide">
          Nuestra ubicación
        </h3>
        <div className="relative rounded-[2rem] shadow-2xl overflow-hidden bg-white p-[6px] animate-border">
          <div className="bubble absolute top-5 left-5 bg-white/90 text-purple-800 px-4 py-2 rounded-xl shadow-md text-sm font-semibold z-20">
            📍 Av. Los Andes 345, Juliaca - Puno
          </div>
          <iframe
            className="relative z-10 rounded-[1.8rem] w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.2102172742566!2d-70.1392808!3d-15.473120699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f38d0c63e303%3A0xf1f9eaf95b1fc0e6!2sCOLEGIO%20DANIEL%20GOLEMAN!5e0!3m2!1ses-419!2spe!4v1744296357623!5m2!1ses-419!2spe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="mt-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-2xl text-center text-purple-800 font-bold mb-6 uppercase tracking-wide">
          Información de contacto
        </h3>
        <div className="bg-cyan-600 rounded-3xl shadow-xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-blue-900">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg">📍 Dirección:</span>
            <span className="text-base">Av. Los Andes 345, Juliaca - Puno</span>

            <span className="font-semibold text-lg mt-4">📞 Teléfonos:</span>
            <span className="text-base">+51 905 474 148</span>
            <span className="text-base">+51 936 458 774</span>
            <span className="text-base">+51 951 106 257</span>

            <span className="font-semibold text-lg mt-4">✉️ Correos:</span>
            <span className="text-base">admisiones@paradise.edu.pe</span>
            <span className="text-base">informes@paradise.edu.pe</span>
            <span className="text-base">colegiogolemanjul@paradise.edu.pe</span>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <span className="font-semibold text-lg">🌐 Redes sociales:</span>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-facebook"></i> Facebook</a>
              <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i> Instagram</a>
              <a href="#" className="hover:text-gray-700 transition"><i className="fab fa-tiktok"></i> TikTok</a>
              <a href="#" className="hover{text-red-600 transition"><i className="fab fa-youtube"></i> YouTube</a>
            </div>
          </div>
        </div>
      </motion.section>

      <style jsx>{`
        .animate-border {
          background: linear-gradient(270deg, #8b5cf6, #3b82f6, #6366f1, #ec4899);
          background-size: 800% 800%;
          animation: borderFlow 6s ease infinite;
        }
        .bubble {
          animation: floaty 3s ease-in-out infinite;
        }
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </>
  );
};

export default ContactoPage;
