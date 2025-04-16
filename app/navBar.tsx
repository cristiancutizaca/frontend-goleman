"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoMenu,
  IoClose,
  IoPersonCircle,
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import NavLinks from "./nav-links";

const MOBILE_LINKS = [
  { name: "Inicio", href: "/" },
  {
    name: "Nosotros",
    subItems: [
      { name: "Nuestra Escuela", href: "/school" },
      { name: "Equipo Pedagógico", href: "/teacher" },
      { name: "Los líderes", href: "/directorio" },
    ],
  },
  {
    name: "Niveles",
    subItems: [
      { name: "Inicial", href: "/inicial" },
      { name: "Primaria", href: "/primaria" },
      { name: "Secundaria", href: "/secundaria" },
    ],
  },
  {
    name: "Propuesta Educativa",
    subItems: [
      { name: "Contáctanos", href: "/ContactForm" },
      { name: "Admisión", href: "/admision" },
      { name: "Teléfonos", href: "/contacto/telefonos" },
    ],
  },
  {
    name: "Contacto",
    subItems: [
      { name: "Formulario", href: "/contacto/formulario" },
      { name: "Mapa", href: "/contacto/mapa" },
      { name: "Teléfonos", href: "/contacto/telefonos" },
    ],
  },
  {
    name: "Blog",
    subItems: [
      { name: "Artículos recientes", href: "/blog" },
      { name: "Eventos", href: "/eventos" },
    ],
  },
  {
    name: "Trabaja Con Nosotros",
    subItems: [
      { name: "Convocatorias", href: "/trabaja/convocatorias" },
      { name: "Postula aquí", href: "/trabaja/postula" },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <div
        className={`w-full bg-white flex justify-between items-center px-4 md:px-8 py-2 border-b border-gray-300 text-sm transition-all duration-300 ${isScrolled ? "hidden" : "flex"}`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden text-3xl text-black"
          >
            <IoMenu />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/icongole.png"
              alt="Logo Goleman"
              width={50}
              height={50}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-yellow-600 font-bold text-lg">Goleman</span>
              <span className="text-gray-400 text-sm">School</span>
            </div>
          </Link>
          <div className="flex items-center md:hidden ml-2">
            <Link href="/intranet" className="flex items-center gap-1 text-sm text-blue-700 font-semibold">
              <IoPersonCircle className="text-lg" />
              <span>Aula virtual</span>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center divide-x divide-gray-300">
          <ContactItem icon={<FiPhoneCall />} label="Comunícate" value="905 474 148" />
          <ContactItem
            icon={<IoPersonCircle />}
            label="Aula virtual"
            value={<Link href="/intranet" className="text-blue-700 font-semibold text-base hover:underline">Ingresar</Link>}
          />
          <ContactItem
            icon={<MdEmail className="text-blue-600" />}
            label="Email"
            value="admisiones@paradise.edu.pe"
          />
        </div>
        <div className="flex items-center gap-3 text-black">
          {[FaFacebookF, FaInstagram, FaTiktok, FaYoutube].map((Icon, idx) => (
            <Icon key={idx} className="cursor-pointer hover:opacity-75" />
          ))}
        </div>
      </div>

      <nav className="bg-gradient-to-r from-[#02042B] to-[#004A9C] py-2 hidden md:flex justify-center gap-6 text-white font-semibold text-sm">
        <NavLinks />
        <Link href="/login">
          <IoPersonCircle className="text-xl ml-4" />
        </Link>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-blue-100 z-50 shadow-lg transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            <Image
              src="/image/icongole.png"
              alt="Logo Goleman"
              width={40}
              height={40}
            />
            <span className="text-lg font-bold">Goleman</span>
          </Link>
          <button onClick={() => setIsDrawerOpen(false)} className="text-2xl">
            <IoClose />
          </button>
        </div>

        <div className="p-4 space-y-2">
          {MOBILE_LINKS.map(({ name, href, subItems }) => (
            <div key={name}>
              <button
                onClick={() => toggleDropdown(name)}
                className="w-full bg-blue-600 text-white rounded px-4 py-2 flex justify-between items-center"
              >
                <span>{name}</span>
                {subItems && (activeDropdown === name ? <IoChevronUp /> : <IoChevronDown />)}
              </button>
              {activeDropdown === name && subItems && (
                <div className="pl-4 pt-2 space-y-1">
                  {subItems.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      onClick={() => setIsDrawerOpen(false)}
                      className="block text-sm text-blue-900 hover:underline"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/login" onClick={() => setIsDrawerOpen(false)}>
            <IoPersonCircle className="text-4xl text-black" />
          </Link>
        </div>
      </div>
    </>
  );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode | string }) => (
  <div className="flex items-center gap-2 px-4 text-black/80">
    {icon}
    <div className="flex flex-col leading-tight">
      <span className="text-xs text-gray-500 uppercase">{label}</span>
      <span className="font-bold text-base break-all">{value}</span>
    </div>
  </div>
);

export default Header;
