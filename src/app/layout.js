import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/motion/Providers";
import { company } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

// Absolute URL for link previews (WhatsApp, Facebook, etc.). Vercel sets this env var on production builds.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const previewImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${company.name} — building, drawing, interior and general work`,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
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
    description: "Experts in building work, drawing, interior and general work. Call 0906 205 1753 or 0916 884 8482.",
    siteName: company.name,
    url: "/",
    locale: "en_NG",
    type: "website",
    images: [previewImage],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.tagline,
    images: [previewImage.url],
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
