'use client';
// components/ClientLayout.tsx
import React from 'react';
import Header from '@/app/navBar';
import Footer from '@/components/footer/Footer';
import ScrollToTopButton from '@/components/home/slideup';
import { ThemeProvider } from '@/components/ThemeProvider';
import Whatsapp from '@/components/whatsapp/Index';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-roboto bg-cyan-600 ">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >

        <link rel="icon" href="/image/icongole.png" />  {/* Asegúrate de que la ruta sea correcta */}
        
        <Header />
        <main>{children}</main>
        <Whatsapp />
        <Footer />
        <ScrollToTopButton />
      </ThemeProvider>
    </div>
  );
}
