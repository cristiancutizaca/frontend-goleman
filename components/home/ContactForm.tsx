"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    }, 1000);
  };

  return (
    <section id="contacto" className="bg-transparent p-8 rounded-xl">
      <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-0">
        {/* Título */}
        <div className="text-center">
          <h2 className="text-center text-black text-3xl sm:text-4xl font-extrabold uppercase mb-8">
            ¡Contáctanos!
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16">
          {/* Left Side - Google Map (Iframe) */}
          <div className="w-full lg:w-1/3 p-6 flex justify-center">
            <div
              className="flex flex-col items-center w-full"
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.2102172742566!2d-70.1392808!3d-15.473120699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9167f38d0c63e303%3A0xf1f9eaf95b1fc0e6!2sCOLEGIO%20DANIEL%20GOLEMAN!5e0!3m2!1ses-419!2spe!4v1744296357623!5m2!1ses-419!2spe"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2 p-6 bg-transparent rounded-lg border-none">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="space-y-4 w-full">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Nombres
                  </label>
                  <input
                    {...register("nombres", { required: true })}
                    type="text"
                    className="w-full px-4 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Nombres completos"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    N° Celular
                  </label>
                  <input
                    {...register("celular", {
                      required: true,
                      pattern: /^\d{9}$/,
                    })}
                    type="text"
                    className="w-full px-4 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="999 999 999"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  {...register("correo", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
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
                <label className="block text-gray-700 font-medium">
                  Mensaje
                </label>
                <textarea
                  {...register("mensaje")}
                  className="w-full h-32 px-4 py-2 text-gray-800 bg-white border-2 border-blue-500 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-500"
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Alert */}
      {showAlert && (
        <div
          className="mt-4 p-4 text-green-800 bg-green-100 border-l-4 border-green-500 rounded-lg"
          role="alert"
        >
          ¡Correo enviado con éxito!
        </div>
      )}
    </section>
  );
};

export default ContactForm;
