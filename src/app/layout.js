import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Providers from "./providers";
import Footer from "@/components/footer/Footer";

const lato = Lato({ 
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "ATOM UNIVERCE",
  description: "Join the community of the future, escape the globalist influence. Decentralized system, blockchain, artificial intelligence, biological discoveries.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={lato.className}>
          <Providers>
              <main className="max-w-7xl mx-auto">
              <Header/>
                  {children}
              </main>
              <Footer/>
          </Providers>
        </body>
    </html>
  );
}
