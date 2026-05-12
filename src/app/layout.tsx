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

// TODO: Update SITE_URL to your production domain before deploying
const SITE_URL = "https://amanrakhade.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aman R. Rakhade | Azure AI Engineer",
    template: "%s | Aman R. Rakhade",
  },
  description:
    "Portfolio of Aman R. Rakhade, an Azure AI Engineer building applied GenAI products, document workflows, and full-stack software experiences.",
  keywords: [
    "Aman R. Rakhade",
    "Azure AI Engineer",
    "Applied GenAI",
    "Document Intelligence",
    "RAG",
    "Next.js",
    "FastAPI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aman R. Rakhade | Azure AI Engineer",
    description:
      "Azure AI portfolio featuring applied GenAI systems, document workflows, and full-stack product delivery.",
    siteName: "Aman R. Rakhade Portfolio",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman R. Rakhade | Azure AI Engineer",
    description:
      "Azure AI portfolio featuring applied GenAI systems, document workflows, and full-stack product delivery.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aman R. Rakhade",
  jobTitle: "Azure AI Engineer",
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
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
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
