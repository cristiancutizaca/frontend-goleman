"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, NavbarContent } from "@nextui-org/react";
import { FiPhoneCall } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import NavLinks from "./nav-links";

const Logo = memo(
  ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
    <Image src={src} alt={alt} width={width} height={height} priority className="block" />
  )
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra superior (se oculta al hacer scroll) */}
      <div
        className={`w-full bg-white flex justify-between items-center px-8 py-2 border-b border-gray-300 text-sm transition-all duration-300 ${
          isScrolled ? "hidden" : "flex"
        }`}
      >
       <Link href="/" className="flex items-center gap-3">
  <Logo src="/image/icongole.png" alt="Logo Goleman" width={60} height={60} />
  <div className="flex flex-col">
    <span className="text-yellow-500 font-bold text-lg">Goleman</span>
    <span className="text-gray-400 text-sm">School</span>
  </div>
</Link>


        {/* Información de contacto */}
        <div className="flex items-center divide-x divide-gray-300">
          {/* Teléfono */}
          <div className="flex items-center gap-2 px-6 text-black/80">
            <FiPhoneCall className="text-xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500 uppercase">Comunícate</span>
              <span className="font-bold text-base">905 474 148</span>
            </div>
          </div>

          {/* Intranet */}
          <div className="flex items-center gap-2 px-6 text-black/80">
            <IoPersonCircle className="text-xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500 uppercase">Aula virtual</span>
              <Link href="/intranet" className="text-blue-700 font-semibold text-base hover:underline">
                Ingresar
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 px-6 text-black/80">
            <MdEmail className="text-xl text-blue-600" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500 uppercase">Email</span>
              <span className="text-base font-bold">admisiones@paradise.edu.pe</span>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="text-black hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="text-black hover:text-pink-600 cursor-pointer" />
          <FaTiktok className="text-black hover:text-gray-600 cursor-pointer" />
          <FaYoutube className="text-black hover:text-red-600 cursor-pointer" />
        </div>
      </div>

      {/* Barra azul (navbar) que se mantiene fija */}
      <Navbar
        className="z-10 bg-gradient-to-b from-[#02042B] to-[#004A9C]"
        position="sticky"
      >
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavLinks />
        </NavbarContent>

        <NavbarContent justify="center">
          <Link href="/login">
            <IoPersonCircle className="text-white" size={30} />
          </Link>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
