"use client";

import React, { memo, useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.facebook.com/CDanielGoleman", icon: FaFacebookF },
  { href: "https://www.instagram.com", icon: FaInstagram },
  { href: "https://wa.me/51996960012", icon: FaWhatsapp },
  { href: "https://www.tiktok.com", icon: FaTiktok, disabled: true },
  { href: "https://www.youtube.com/@ColegioDanielGoleman", icon: FaYoutube, disabled: true },
];

const navSections = [
  {
    title: "Nosotros",
    links: [
      { name: "Nuestra Escuela", href: "/school" },
      { name: "Equipo Pedagógico", href: "/teacher" },
      { name: "Los líderes", href: "/directorio" },
    ],
  },
  {
    title: "Niveles",
    links: [
      { name: "Inicial", href: "/inicial" },
      { name: "Primaria", href: "/primaria" },
      { name: "Secundaria", href: "/secundaria" },
    ],
  },
  {
    title: "Propuesta Educativa",
    links: [
      { name: "Contáctanos", href: "/ContactForm" },
      { name: "Admisión", href: "/admision" },
      { name: "Teléfonos", href: "/contact" },
    ],
  },
  
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <p className="text-lg">Síguenos en nuestras redes sociales</p>
          <div className="mt-4 flex justify-center gap-4">
            {socialLinks.map(({ href, icon: Icon, disabled }, index) => (
              <Link
                key={index}
                href={disabled ? "#" : href}
                target="_blank"
                className={`p-2 rounded-full transition-transform hover:scale-125 bg-white text-blue-800 shadow-lg ${
                  disabled ? "opacity-40 pointer-events-none" : ""
                }`}
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-3 border-b border-white/20 pb-1">
              Ubicación
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7769738629396!2d-77.05925822406196!3d-12.134883688072266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c899ed308215%3A0xb3f6ea014e3998e0!2sLima%2C%20Peru!5e0!3m2!1sen!2spe!4v1682635142562!5m2!1sen!2spe"
              width="100%"
              height="200"
              className="rounded-xl border-none"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {navSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-3 border-b border-white/20 pb-1">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-white/70">
          <p>© 2024 Colegio Daniel Goleman. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);