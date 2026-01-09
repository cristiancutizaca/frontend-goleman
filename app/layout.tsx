import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ClientLayout from "./clientLayout";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Colegio Intercultural Daniel Goleman",
    template: "%s | Colegio Intercultural Daniel Goleman",
  },
  description:
    "Educación intercultural con enfoque socioemocional. Formación integral para inicial, primaria y secundaria.",
  icons: {
    icon: "/image/icongole.png",
    apple: "/image/icongole.png",
  },
  openGraph: {
    title: "Colegio Intercultural Daniel Goleman",
    description:
      "Educación intercultural con enfoque socioemocional. Formación integral para inicial, primaria y secundaria.",
    type: "website",
    locale: "es_PE",
    images: [{ url: "/image/fondo_1.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
