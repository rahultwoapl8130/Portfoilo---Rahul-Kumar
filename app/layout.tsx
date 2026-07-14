import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// TODO: replace every value below with your own details.
export const metadata: Metadata = {
  metadataBase: new URL("https://rahulkumar.vercel.app"),
  title: "Rahul Kumar | MBA & AI Solutions Builder",
  description:
    "MBA Graduate building AI solutions that drive measurable business impact. Specializing in predictive modeling, data analytics, and intelligent applications.",
  keywords: [
    "Rahul Kumar",
    "AI Solutions",
    "Data Scientist",
    "MBA",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Kumar" }],
  openGraph: {
    title: "Rahul Kumar | MBA & AI Solutions Builder",
    description: "Building AI solutions that drive measurable business impact.",
    url: "https://rahulkumar.vercel.app",
    siteName: "Rahul Kumar",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar | MBA & AI Solutions Builder",
    description: "Building AI solutions that drive measurable business impact.",
    images: ["/images/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
