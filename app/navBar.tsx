"use client";
import Image from "next/image";
import React, { useState, useEffect, memo } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import NavLinks from "./nav-links";

const Logo = memo(({ src, alt, width, height }) => (
  <Image src={src} alt={alt} width={width} height={height} priority className="block" />
));

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Sección superior del Navbar (oculta al hacer scroll) */}
      <div
        className={`w-full bg-white flex justify-between items-center px-8 py-2 border-b border-gray-300 text-black text-sm transition-all duration-300 ${isScrolled ? "hidden" : "block"}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Logo src="/image/fond1.png" alt="Logo Inalta" width={180} height={80} />
        </div>
        
        {/* Información de contacto */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-black" />
            <span className="font-semibold">905 474 148</span>
          </div>
          <div>
            <Link href="/intranet" className="text-blue-600 hover:underline font-semibold">
              Ingresar
            </Link>
          </div>
          <div>
            <span className="text-gray-600">admisiones@paradise.edu.pe</span>
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

      {/* Navbar Azul (siempre visible) */}
      <Navbar shouldHideOnScroll className="z-10 bg-gradient-to-b from-[#0E1150] to-[#0672B2]" position="sticky">
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavLinks />
          <NavbarContent justify="end">
            <Link href="/login">
              <IoPersonCircle className="text-white" size={30} />
            </Link>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
