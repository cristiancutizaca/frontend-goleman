"use client";

import React, { memo, useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLock } from "react-icons/fi";

interface NavLinkItem {
  name: string;
  href: string;
  isBlocked?: boolean;
  dropdownContent?: ReactNode;
}

const links: NavLinkItem[] = [
  {
    name: "Inicio",
    href: "/",
    // No dropdownContent aquí
  },
  {
    name: "Nosotros",
    href: "/diplomados",
    dropdownContent: (
      <div>
        <p>Nuestra </p>
        <p>equipo pedagógico

        </p>
        <p>Los líderes</p>
      </div>
    ),
  },
  {
    name: "Niveles",
    href: "/certs",
    dropdownContent: (
      <div>
        <p>Inicial</p>
        <p>Primaria</p>
        <p>Secundaria</p>
      </div>
    ),
  },
  {
    name: "Propuesta Educativa",
    href: "/curs",
    isBlocked: false,
    dropdownContent: (
      <div>
        <p>contactanos</p>
        <p>admision</p>
        <p>Teléfonos</p>
      </div>
    ),
  },
  {
    name: "Contacto",
    href: "/#footer",
    dropdownContent: (
      <div>
        <p>Formulario</p>
        <p>Mapa</p>
        <p>Teléfonos</p>
      </div>
    ),
  },
  {
    name: "Blog",
    href: "/#footer",
    dropdownContent: (
      <div>
        <p>Artículos recientes</p>
        <p>Eventos</p>
      </div>
    ),
  },
  {
    name: "Trabaja Con Nosotros",
    href: "/trabaja",
    dropdownContent: (
      <div>
        <p>Convocatorias</p>
        <p>Postula aquí</p>
      </div>
    ),
  },
];

const NavLinks = () => {
  const pathname = usePathname();
  const [isCourseBlocked] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="flex gap-6 items-center relative">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const isOpen = activeDropdown === link.name;

        return (
          <div
            key={link.name}
            className="relative group"
            onMouseEnter={() => link.dropdownContent && setActiveDropdown(link.name)}
            onMouseLeave={() => link.dropdownContent && setActiveDropdown(null)}
          >
            {link.isBlocked && isCourseBlocked ? (
              <div className="flex items-center gap-1 text-gray-400 cursor-not-allowed">
                <FiLock />
                <span className="text-base">{link.name}</span>
              </div>
            ) : link.dropdownContent ? (
              <>
                <button
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
                      {link.dropdownContent}
                    </div>
                  </div>
                )}
              </>
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
