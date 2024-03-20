import type { Metadata } from "next";
import "../../../src/app/globals.css";
import { Roboto } from "next/font/google";

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
    <div className="flex justify-center overflow-scroll border-l border-amber-500 bg-gradient-to-b from-indigo-900 to-slate-900 ">
      {children}
    </div>
  );
}
