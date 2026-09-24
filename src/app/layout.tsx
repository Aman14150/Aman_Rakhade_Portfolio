import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-600-latin.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const SITE_URL = "https://aman14150.github.io/Aman_Rakhade_Portfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aman R. Rakhade | AI Engineer",
    template: "%s | Aman R. Rakhade",
  },
  description:
    "Portfolio of Aman R. Rakhade, an AI Engineer building AI applications, document automation, voice assistants, and web interfaces.",
  keywords: [
    "Aman R. Rakhade",
    "AI Engineer",
    "Applied GenAI",
    "Document Intelligence",
    "RAG",
    "Next.js",
    "FastAPI",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Aman R. Rakhade | AI Engineer",
    description:
      "AI engineering portfolio featuring document automation, voice assistants, and full-stack applications.",
    siteName: "Aman R. Rakhade Portfolio",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman R. Rakhade | AI Engineer",
    description:
      "AI engineering portfolio featuring document automation, voice assistants, and full-stack applications.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aman R. Rakhade",
  jobTitle: "AI Engineer",
  url: SITE_URL,
  email: "amanrakhade14@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/aman-rakhade-0a9488319",
    "https://github.com/Aman14150",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD structured data — data is static/controlled so dangerouslySetInnerHTML is safe here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
