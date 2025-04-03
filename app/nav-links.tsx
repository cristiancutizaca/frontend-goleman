"use client";

import React, { memo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLock } from "react-icons/fi";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/diplomados" },
  { name: "Niveles", href: "/certs" },
  { name: "Paquete Educativo", href: "/curs", isBlocked: false },
  { name: "Contacto", href: "/#footer" },
  { name: "Blog", href: "/#footer" },
  { name: "Trabaja Con Nosotros", href: "/#footer" },

];

const NavLinks = () => {
  const pathname = usePathname();
  const [isCourseBlocked] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleToggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="flex gap-6 items-center relative">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const isOpen = activeDropdown === link.name;

        return (
          <div
            key={link.name}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(link.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {link.isBlocked && isCourseBlocked ? (
              <div className="flex items-center gap-1 text-gray-400 cursor-not-allowed">
                <FiLock />
                <span className="text-base">{link.name}</span>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleToggleDropdown(link.name)}
                  className={`text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white underline"
                      : "text-white hover:text-blue-200 hover:underline"
                  }`}
                >
                  {link.name}
                </button>

                {/* Dropdown elegante */}
                <div
                  className={`absolute left-0 top-full mt-3 bg-white text-black rounded-xl shadow-lg p-5 min-w-[240px] z-50 border border-blue-100 
                    transition-all duration-200 ease-in-out 
                    ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}
                >
                  {/* Flechita arriba del dropdown */}
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45 border-l border-t border-blue-100 z-[-1]" />

                  <p className="text-sm font-semibold text-blue-900">{link.name} opciones</p>
                  <div className="mt-3 border-t border-gray-200 pt-3 space-y-2 text-sm">
                    <p className="hover:text-blue-600 cursor-pointer">Subcategoría 1</p>
                    <p className="hover:text-blue-600 cursor-pointer">Subcategoría 2</p>
                    <p className="hover:text-blue-600 cursor-pointer">Explorar más</p>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default memo(NavLinks);
