import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/providers/ToastProvider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SUPPCO",
  description: "Your one-stop shop for construction equipment and services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
