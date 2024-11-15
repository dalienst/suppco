import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./custom-components/footer/Footer";
import Navbar from "./custom-components/navbar/Navbar";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SUPPCO",
  description: "Your one-stop shop for construction equipment and services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
      <div className="h-[80px] fixed top-0 w-full z-50">
          <Navbar />
        </div>
        <main className="pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
