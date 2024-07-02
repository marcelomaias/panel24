import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Panel 24",
  description: "Panel 24",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  );
}
