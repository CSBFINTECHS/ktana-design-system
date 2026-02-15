import type { Metadata } from "next";
import { Inter, Zen_Dots } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-family-ui",
  subsets: ["latin"],
  display: "swap",
});

const zenDots = Zen_Dots({
  variable: "--font-family-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design System | KTANA",
  description:
    "Brand Toolkit tokenizado da KTANA — cores, tipografia, icones, gradientes e tokens de layout.",
  openGraph: {
    title: "Design System | KTANA",
    description: "Brand Toolkit & Identidade Visual KTANA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${zenDots.variable} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
