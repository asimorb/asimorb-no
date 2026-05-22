import type { Metadata } from "next";
import { IBM_Plex_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "VR Quality Taxonomy — asimorb",
  description:
    "A holistic framework for evaluating the quality of virtual reality experiences.",
};

export default function VRTaxonomyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`${playfair.variable} ${plex.variable}`}>
      {children}
    </section>
  );
}
