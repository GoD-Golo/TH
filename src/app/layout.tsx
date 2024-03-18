import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import {} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";

export const metadata: Metadata = {
  title: "Inimă de Pumnal",
  description: "Tehnici Web -- Proferor: Ciocan ",
};

const roboto400 = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--roboto-400",
});
const roboto600 = Roboto({
  weight: "700",
  subsets: ["latin"],
  variable: "--roboto-600",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto400.variable} ${roboto600.variable} grid h-screen w-screen grid-cols-[6rem_1fr] grid-rows-[69.78px_minmax(0,_1fr)_96px] bg-blue-500`}
      >
        <Header />

        <Aside />

        {children}

        <Footer />
      </body>
    </html>
  );
}
