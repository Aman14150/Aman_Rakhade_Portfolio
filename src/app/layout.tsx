import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aman R. Rakhade | AI Engineer",
    template: "%s | Aman R. Rakhade",
  },
  description:
    "Portfolio of Aman R. Rakhade, an AI Engineer building AI-powered products, intelligent workflows, and professional full-stack software experiences.",
  openGraph: {
    title: "Aman R. Rakhade | AI Engineer",
    description:
      "AI engineer portfolio featuring applied AI systems, full-stack product development, and high-impact project work.",
    siteName: "Aman R. Rakhade Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman R. Rakhade | AI Engineer",
    description:
      "AI engineer portfolio featuring applied AI systems, full-stack product development, and high-impact project work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
