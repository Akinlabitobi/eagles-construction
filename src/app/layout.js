import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/motion/Providers";
import { company } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata = {
  title: {
    default: `${company.name} | Building, Drawing, Interior & General Work in Nigeria`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Eagles Construction Company",
    "building contractor Lagos",
    "construction company Nigeria",
    "architectural and structural drawings Lagos",
    "interior finishing Lagos",
    "renovation and general building work",
  ],
  openGraph: {
    title: company.name,
    description: company.description,
    locale: "en_NG",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#14161a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
