// app/ContactForm/page.tsx
"use client";

import ContactForm from "@/components/home/ContactForm";

export default function ContactFormPage() {
  return (
    <div className="bg-cyan-600 transition-colors duration-1000 min-h-screen">
      <ContactForm />
    </div>
  );
}
