"use client";

import React, { memo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLock } from "react-icons/fi";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavLinkItem {
  name: string;
  href: string;
  isBlocked?: boolean;
  dropdownContent?: DropdownItem[];
}

const links: NavLinkItem[] = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Nosotros",
    href: "/app",
    dropdownContent: [
      { name: "Nuestra Escuela", href: "/school" },
      { name: "Equipo Pedagógico", href: "/teacher" },
      { name: "Los líderes", href: "/directorio" },
    ],
  },
  {
    name: "Niveles",
    href: "/certs",
    dropdownContent: [
      { name: "Inicial", href: "/niveles/inicial" },
      { name: "Primaria", href: "/niveles/primaria" },
      { name: "Secundaria", href: "/niveles/secundaria" },
    ],
  },
  {
    name: "Propuesta Educativa",
    href: "/curs",
    isBlocked: false,
    dropdownContent: [
      { name: "Contáctanos", href: "/contacto" },
      { name: "Admisión", href: "/admision" },
      { name: "Teléfonos", href: "/contacto/telefonos" },
    ],
  },
  {
    name: "Contacto",
    href: "/#footer",
    dropdownContent: [
      { name: "Formulario", href: "/contacto/formulario" },
      { name: "Mapa", href: "/contacto/mapa" },
      { name: "Teléfonos", href: "/contacto/telefonos" },
    ],
  },
  {
    name: "Blog",
    href: "/#footer",
    dropdownContent: [
      { name: "Artículos recientes", href: "/blog" },
      { name: "Eventos", href: "/eventos" },
    ],
  },
  {
    name: "Trabaja Con Nosotros",
    href: "/trabaja",
    dropdownContent: [
      { name: "Convocatorias", href: "/trabaja/convocatorias" },
      { name: "Postula aquí", href: "/trabaja/postula" },
    ],
  },
];

const NavLinks = () => {
  const pathname = usePathname();
  const [isCourseBlocked] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex gap-6 items-center relative">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const isOpen = activeDropdown === link.name;

        return (
          <div key={link.name} className="relative group" ref={isOpen ? dropdownRef : null}>
            {link.isBlocked && isCourseBlocked ? (
              <div className="flex items-center gap-1 text-gray-400 cursor-not-allowed">
                <FiLock />
                <span className="text-base">{link.name}</span>
              </div>
            ) : link.dropdownContent ? (
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(isOpen ? null : link.name)}
                  className={`text-base font-medium transition-all duration-300 ${isActive
                    ? "text-white underline"
                    : "text-white hover:text-blue-200 hover:underline"
                    }`}
                >
                  {link.name}
                </button>

                {isOpen && (
                  <div
                    className={`absolute left-0 top-full mt-3 bg-white text-black rounded-xl shadow-lg p-5 min-w-[240px] z-50 border border-blue-100 
                      transition-all duration-200 ease-in-out 
                      ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}
                  >
                    <div className="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45 border-l border-t border-blue-100 z-[-1]" />

                    <p className="text-sm font-semibold text-blue-900">{link.name} opciones</p>
                    <div className="mt-3 border-t border-gray-200 pt-3 space-y-2 text-sm">
                      {link.dropdownContent.map((item) => (
                        <Link key={item.name} href={item.href} className="block hover:text-blue-600">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href}
                className={`text-base font-medium transition-all duration-300 ${isActive
                  ? "text-white underline"
                  : "text-white hover:text-blue-200 hover:underline"
                  }`}
              >
                {link.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default memo(NavLinks);
