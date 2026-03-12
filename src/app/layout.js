import { Archivo_Black, Inter, Anek_Malayalam } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-industrial",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const anekMalayalam = Anek_Malayalam({
  weight: "800",
  variable: "--font-anek",
  subsets: ["malayalam", "latin"],
  display: "swap",
});

export const metadata = {
  title: "Citizen-Architect | Tech-Focused Political Volunteering",
  description: "A platform for professionals to volunteer remotely for the 2026 election campaign. Deploy your skills for the collective progress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ml">
      <body
        className={`${archivoBlack.variable} ${inter.variable} ${anekMalayalam.variable} antialiased selection:bg-[#FFD60A] overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
