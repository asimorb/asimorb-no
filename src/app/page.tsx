"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "Websites",
  "Prints",
  "Interfaces",
  "Logos",
  "Studies",
] as const;
type Category = (typeof categories)[number];

interface Project {
  id: number;
  title?: string;
  category: Category;
  year: string;
  description: string;
  images: ProjectImage[];
  cardClassName?: string;
  descriptionClassName?: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  kind?: "image" | "video";
}

const projects: Project[] = [
  {
    id: 101,
    title: "ARTEC Website",
    category: "Websites",
    year: "2018 - 2021",
    description:
      "",
    images: [
      {
        src: "/Websites/ART1.png",
        alt: "ARTEC website screen 01",
        className: "top-[12%] left-[4%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ART2.png",
        alt: "ARTEC website screen 02",
        className: "top-[12%] left-[52%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ART3.png",
        alt: "ARTEC website screen 03",
        className: "bottom-[8%] left-[4%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ART4.png",
        alt: "ARTEC website screen 04",
        className: "bottom-[8%] left-[52%] h-[30%] w-[44%]",
      },
    ],
  },
  {
    id: 103,
    category: "Websites",
    year: "",
    description: "",
    images: [
      {
        src: "/Websites/ART5.mp4",
        alt: "ARTEC website interaction video",
        className: "bottom-[10%] left-[3%] h-[80%] w-[94%]",
        kind: "video",
      },
    ],
  },
  {
    id: 109,
    title: "Asimorb Portfolio (featured on Site of Sites)",
    category: "Websites",
    year: "2026",
    description: "",
    images: [
      {
        src: "/Websites/ORB11.mp4",
        alt: "Orb website interaction video",
        className: "bottom-[10%] left-[3%] h-[80%] w-[94%]",
        kind: "video",
      },
    ],
  },
  {
    id: 104,
    category: "Websites",
    year: "",
    description:
      "",
    images: [
      {
        src: "/Websites/ORB0.png",
        alt: "Orb website screen 00",
        className: "top-[12%] left-[4%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ORB1.png",
        alt: "Orb website screen 01",
        className: "top-[12%] left-[52%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ORB2.png",
        alt: "Orb website screen 02",
        className: "bottom-[8%] left-[4%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ORB3.png",
        alt: "Orb website screen 03",
        className: "bottom-[8%] left-[52%] h-[30%] w-[44%]",
      },
    ],
  },
  {
    id: 106,
    category: "Websites",
    year: "",
    description: "",
    images: [
      {
        src: "/Websites/ORB4.png",
        alt: "Orb website screen 04",
        className: "top-[12%] left-[4%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ORB5.png",
        alt: "Orb website screen 05",
        className: "top-[12%] left-[52%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ORB6.png",
        alt: "Orb website screen 06",
        className: "bottom-[8%] left-[4%] h-[30%] w-[44%]",
      },
      {
        src: "/Websites/ORB7.png",
        alt: "Orb website screen 07",
        className: "bottom-[8%] left-[52%] h-[30%] w-[44%]",
      },
    ],
  },
  {
    id: 108,
    category: "Websites",
    year: "",
    description: "",
    images: [
      {
        src: "/Websites/ORB8.png",
        alt: "Orb mobile website screen 08",
        className: "bottom-[7%] left-[6%] h-[76%] w-[27%]",
      },
      {
        src: "/Websites/ORB9.png",
        alt: "Orb mobile website screen 09",
        className: "bottom-[7%] left-[35%] h-[76%] w-[27%]",
      },
      {
        src: "/Websites/ORB10.png",
        alt: "Orb mobile website screen 10",
        className: "bottom-[7%] left-[64%] h-[76%] w-[27%]",
      },
    ],
  },
  {
    id: 201,
    title: "EasyUX",
    category: "Interfaces",
    year: "2022",
    description:
      "This project developed the first prototype for a web-based application that aided empirical evaluations and user experience testing. The application served as a researcher-oriented one-stop shop to conduct experiments from a single platform and maintain a database. The tools and measures offered in the first prototype were limited to a timer, video recorder, game analytics, and multiple subjective questionnaires.",
    cardClassName: "aspect-[4/3]",
    descriptionClassName: "max-w-[100%]",
    images: [
      {
        src: "/Interfaces/UX%201.webp",
        alt: "EasyUX interface screen 01",
        className: "top-[16%] left-[6%] h-[32%] w-[40%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/UX%202.webp",
        alt: "EasyUX interface screen 02",
        className: "top-[16%] left-[54%] h-[32%] w-[40%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/UX%203.webp",
        alt: "EasyUX interface screen 03",
        className: "bottom-[10%] left-[30%] h-[32%] w-[40%]",
        imageClassName: "object-cover",
      },
    ],
  },
  {
    id: 202,
    title: "Admire3D",
    category: "Interfaces",
    year: "2022",
    description:
      "AdMiRe was an EU Horizon 2020 funded project under grant agreement No 952027. The project developed, validated and demonstrated innovative solutions based on mixed reality technology. These solutions enabled audiences at home to be incorporated into the live TV program they are watching and to interact with people in the TV studio. This provided content creators with tools that radically improve talent immersion and interaction with computer-generated elements. The NTNU team was responsible for implementing Work Packages 4 and 5 related to the Quality Assesments and Validation of the end-to-end system. Validation and user studies took place at TV centers in three different locations: Trondheim, Dublin, and Bucharest.",
    cardClassName: "aspect-[4/3]",
    descriptionClassName: "max-w-[100%]",
    images: [
      {
        src: "/Interfaces/MR%201.webp",
        alt: "Admire3D mixed reality interface screen 01",
        className: "top-[18%] left-[6%] h-[40%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/MR%202.webp",
        alt: "Admire3D mixed reality interface screen 02",
        className: "top-[18%] left-[36%] h-[40%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/MR%203.webp",
        alt: "Admire3D mixed reality interface screen 03",
        className: "top-[18%] left-[66%] h-[40%] w-[28%]",
        imageClassName: "object-cover",
      },
    ],
  },
  {
    id: 203,
    title: "exerVR",
    category: "Interfaces",
    year: "2018 - 2021",
    description:
      "This pilot study transformed the training experience for rowers by transporting a stationary rowing machine into a virtual environment. The VR-based canoe received movement data from several sensors installed on the rowing machine and displayed that data in the form of immersive analytics inside the head-mounted display. In addition, metrics on technique are derived from the sensor data as well as physiological data. All this is used to investigate if, and to which extent, VR improves the technical skills of an athlete during the complex sport of rowing. Furthermore, subjective instruments are employed in conjunction to record athlete perceptions about their performance, and how they think this training simulation compares to a standard rowing workout without VR. Consecutive tests within this project indicated improved performance and an enhanced experience for the athletes.",
    cardClassName: "aspect-[4/3]",
    descriptionClassName: "max-w-[100%]",
    images: [
      {
        src: "/Interfaces/VR%201.jpg",
        alt: "exerVR interface screen 01",
        className: "top-[10%] left-[5%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/VR%202.jpg",
        alt: "exerVR interface screen 02",
        className: "top-[10%] left-[36%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/VR%203.jpg",
        alt: "exerVR interface screen 03",
        className: "top-[10%] left-[67%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/VR%204.jpg",
        alt: "exerVR interface screen 04",
        className: "bottom-[10%] left-[20%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/VR%205.jpg",
        alt: "exerVR interface screen 05",
        className: "bottom-[10%] left-[52%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
    ],
  },
  {
    id: 204,
    title: "Home of the Trolls",
    category: "Interfaces",
    year: "2023",
    description:
      "Funded by RFF Trondelag, Home of the Trolls, was an interactive storytelling experience with the aim to inspire regional tourism by bringing together the love Norwegians share for nature and folklore. It implements virtual elements in augmented reality and geo-positioning technology. The application was developed in collaboration with a local tourism company from Rindal to motivate self-guided, and assisted, tourism in protected nature reserves. NTNU was responsible for developing the first two prototypes and running on-site field evaluations for the application.",
    cardClassName: "aspect-[4/3]",
    descriptionClassName: "max-w-[100%]",
    images: [
      {
        src: "/Interfaces/Trolls%201.webp",
        alt: "Home of the Trolls interface screen 01",
        className: "top-[12%] left-[7%] h-[34%] w-[39%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/Trolls%202.webp",
        alt: "Home of the Trolls interface screen 02",
        className: "top-[12%] left-[54%] h-[34%] w-[39%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/Trolls%203.webp",
        alt: "Home of the Trolls interface screen 03",
        className: "bottom-[8%] left-[7%] h-[34%] w-[39%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Interfaces/Trolls%204.avif",
        alt: "Home of the Trolls interface screen 04",
        className: "bottom-[8%] left-[54%] h-[34%] w-[39%]",
        imageClassName: "object-cover",
      },
    ],
  },

  {
    id: 1,
    title: "Hinc AS",
    category: "Logos",
    year: "2026",
    description:
      "Website design and development for a small consultancy firm specialising in organisational development and workplace culture.",
    images: [{
      src: "/Logos/HINC.png",
      alt: "Hinc AS logo",
      className: "bottom-[-5%] left-[-1%] h-[60%] w-[70%]",
    }],
  },
  {
    id: 2,
    title: "Metastory",
    category: "Logos",
    year: "2025",
    description:
      "This logo board for an MSCA Doctoral Network funding presents nine adaptive iterations of a shared identity system, each tailored to distinct communicative contexts.",
    images: [{
      src: "/Logos/METAS.jpg",
      alt: "Metastory logo",
      className: "bottom-[-2%] left-[2%] h-[65%] w-[65%]",
    }],
  },
  {
    id: 3,
    title: "NIYF",
    category: "Logos",
    year: "2023",
    description:
      "Nature in Your Face (NIYF) was a research project intended for transformative societal change. Its logo translates disruptive climate communication into a bold visual language.",
    images: [{
      src: "/Logos/NIYF.jpg",
      alt: "NIYF logo",
      className: "bottom-[2%] left-[5%] h-[50%] w-[58%]",
    }],
  },
  {
    id: 4,
    title: "NTNU Kreativ",
    category: "Logos",
    year: "2021",
    description:
      "Brand identity for NTNU Kreativ, the university's creative hub for interdisciplinary projects and student initiatives.",
    images: [{
      src: "/Logos/kreativ.webp",
      alt: "NTNU Kreativ logo",
      className: "bottom-[5%] left-[1%] h-[45%] w-[60%]",
    }],
  },
  {
    id: 5,
    title: "They See Us",
    category: "Logos",
    year: "2021",
    description:
      "They See Us is a visual identity built around visibility, heritage, and the quiet confidence of diasporic food culture. The name plays on “Desi Us,” folding self-identification and external perception into a single phrase.",
    images: [{
      src: "/Logos/theyseeus%2000B.webp",
      alt: "They See Us logo",
      className: "bottom-[7%] left-[3%] h-[38.4%] w-[32%]",
    }],
  },
  {
    id: 6,
    title: "IN2",
    category: "Logos",
    year: "2020",
    description:
      "The IN2MEDIA logo was designed for the NGINO Consortium to secure the NextGenerationEU funding. The IN2Media logo fuses bold typographic clarity with a vibrant, fluid gradient form.",
    images: [{
      src: "/Logos/IN2M.jpg",
      alt: "IN2 logo",
      className: "bottom-[4%] left-[-3%] h-[50%] w-[52%]",
    }],
  },
  {
    id: 7,
    title: "IDN 4 CCI",
    category: "Logos",
    year: "2021",
    description:
      "The logo was designed for a proposed project addressing EU Research & Innovation Action in Culture and Creative Industries to embrace intersectional technologies.",
    images: [{
      src: "/Logos/idn.webp",
      alt: "IDN CCI logo",
      className: "bottom-[6%] left-[6%] h-[40%] w-[27.2%]",
    }],
  },
    {
    id: 9,
    title: "ARTEC AI Imaginaries",
    category: "Prints",
    year: "2020",
    description:
      "",
    images: [{
      src: "/Prints/Poster%2002.webp",
      alt: "ARTEC Seminar Series poster 02",
      className: "bottom-[10%] left-[8%] h-[80%] w-[40%]",
    }],
  },
  {
    id: 8,
    title: "ARTEC Seminar Series",
    category: "Prints",
    year: "2020",
    description:
      "",
    images: [{
      src: "/Prints/Poster%2001.webp",
      alt: "ARTEC Seminar Series poster 01",
      className: "bottom-[10%] left-[8%] h-[80%] w-[40%]",
    }],
  },
  {
    id: 10,
    title: "ARTEC Spectral Landscapes",
    category: "Prints",
    year: "2019",
    description:
      "",
    images: [{
      src: "/Prints/Poster%2003.webp",
      alt: "ARTEC Seminar Series poster 03",
      className: "bottom-[10%] left-[8%] h-[80%] w-[40%]",
    }],
  },
  {
    id: 11,
    title: "They See Us",
    category: "Prints",
    year: "2021",
    description:
      "The visual identity is built around visibility and heritage. Using bold, conversational typography and vibrant, market-inspired imagery to echo the energy of desi street food.",
    images: [{
      src: "/Prints/TSU1.png",
      alt: "TheySeeUs pop-up stall print 01",
      className: "bottom-[10%] left-[8%] h-[45%] w-[85%]",
    }],
  },
  {
    id: 12,
    category: "Prints",
    year: "",
    description:
      "",
    images: [
      {
        src: "/Prints/TSU1.jpg",
        alt: "TheySeeUs pop-up stall print 02",
        className: "bottom-[12%] left-[4%] h-[75%] w-[45%]",
      },
      {
        src: "/Prints/TSU2.jpg",
        alt: "TheySeeUs pop-up stall print 06",
        className: "bottom-[12%] left-[51%] h-[75%] w-[45%]",
      },
    ],
  },
  {
    id: 13,
    category: "Prints",
    year: "",
    description:
      "",
    images: [
      {
        src: "/Prints/TSU3.jpg",
        alt: "TheySeeUs pop-up stall print 03",
        className: "bottom-[14%] left-[-6%] h-[72%] w-[60%]",
      },
      {
        src: "/Prints/TSU4.jpg",
        alt: "TheySeeUs pop-up stall print 04",
        className: "bottom-[4%] left-[46%] h-[64%] w-[25%]",
      },
      {
        src: "/Prints/TSU5.jpg",
        alt: "TheySeeUs pop-up stall print 05",
        className: "bottom-[4%] left-[72%] h-[64%] w-[25%]",
      },
    ],
  },
];

const contactLinks = [
  { label: "Email", href: "mailto:hello@asimorb.com" },
  { label: "Instagram", href: "https://instagram.com/acimorlv" },
  { label: "Orcid", href: "https://orcid.org/0000-0002-2982-9678" },
  { label: "LinkedIn", href: "https://linkedin.com/in/asim-hameed-36587a56" },
];

export default function Home() {
  const year = new Date().getFullYear();
  const [activeCategory, setActiveCategory] = useState<Category>("Websites");
  const [heroImage, setHeroImage] = useState<ProjectImage | null>(null);
  const visibleProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-[15px] leading-[1.22] md:py-16">
      {/*
       * Single persistent grid used for the entire page.
       * Left col (narrow): title, then categories.
       * Right col (wide):  bio + contacts, then project cards.
       */}
      <div className="grid grid-cols-[72px_1fr] gap-x-8 md:grid-cols-[100px_1fr] md:gap-x-10">

        {/* ── @asimorb — left col ──────────────────────────────────────── */}
        <div className="-translate-y-12 pt-px">
          <h1 className="text-[16px] font-regular leading-none">@asimorb</h1>
        </div>

        {/* ── Bio + contacts — right col ───────────────────────────────── */}
        <div className="pb-12 md:pb-16">
          <p className="text-[12px] leading-[1.25]">
            I am an interdisciplinary researcher-designer bridging architecture,
            interaction design, immersive technologies, and empirical methods. I
            am curious about how people perceive action possibilities in physical
            and digital environments. I enjoy dreaming up ambitious artefacts
            that address complex problems in creative ways. I am also a trained
            architect and frequently use my spatial understanding of the built
            environment to inform my design logic of digital products.
          </p>

          {/* Contact links — right-aligned, dot-leader style */}
          <div className="mt-8 flex justify-end">
            <div className="space-y-0.5">
              {contactLinks.map((link, i) => (
                <div
                  key={link.label}
                  className="flex items-baseline w-52 font-mono text-[11px] leading-[1.35]"
                >
                  <span className="shrink-0 select-none">{i + 1}.</span>
                  <span
                    className="flex-1 overflow-hidden mx-1 whitespace-nowrap leading-none text-neutral-400"
                    aria-hidden="true"
                  >
                    {".............................................................."}
                  </span>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="shrink-0 hover:opacity-50 transition-opacity duration-150"
                  >
                    {link.label} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider — aligns with the right column ───────────────────── */}
        <div />
        <hr className="mb-10 border-neutral-200" />

        {/* ── Category nav — left col, sticky ──────────────────────────── */}
        <aside>
          <div className="sticky top-8">
            <nav aria-label="Work categories">
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      className={`text-left text-sm leading-snug transition-colors duration-150 ${
                        cat === activeCategory
                          ? "font-bold text-neutral-900"
                          : "font-normal text-neutral-400 hover:text-neutral-700"
                      }`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* ── Project cards — right col ────────────────────────────────── */}
        <div>
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={
                index === 0
                  ? ""
                  : project.title
                    ? "mt-14 md:mt-20"
                    : "mt-2 md:mt-4"
              }
            >
              {project.title ? (
                <div className="mb-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-[12px] font-normal leading-none">
                      {project.id === 109 ? (
                        <>
                          Asimorb Portfolio (featured on{" "}
                          <a
                            href="https://www.siteofsites.co/websites/asim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] leading-[1.35] underline decoration-dotted underline-offset-2 transition-colors duration-150 hover:text-neutral-500"
                          >
                            Site of Sites <span className="text-[11px] leading-none">↗</span>
                          </a>
                          )
                        </>
                      ) : (
                        project.title
                      )}
                    </h2>
                    <p className="font-mono text-[13px] leading-none text-neutral-900">
                      {project.year}
                    </p>
                  </div>

                  {project.description &&
                  project.category !== "Logos" &&
                  project.category !== "Prints" ? (
                    <p
                      className={`mt-6 text-left text-[12px] leading-[1.25] text-neutral-900 ${
                        project.descriptionClassName ?? "max-w-[52%]"
                      }`}
                    >
                      {project.description}
                    </p>
                  ) : null}
                </div>
              ) : null}

              {/* Card — artwork only */}
              <div
                className={`relative w-full bg-neutral-100 overflow-hidden ${
                  project.cardClassName ?? "aspect-[4/3]"
                }`}
              >
                {project.description &&
                (project.category === "Logos" ||
                  project.category === "Prints") ? (
                  <div
                    className={`absolute top-5 right-5 z-10 text-right ${
                      project.descriptionClassName ?? "max-w-[52%]"
                    }`}
                  >
                    <p className="text-[12px] leading-[1.25] text-neutral-900">
                      {project.description}
                    </p>
                  </div>
                ) : null}

                {project.images.map((image) => (
                  <button
                    key={image.src}
                    type="button"
                    className={`absolute cursor-zoom-in ${image.className}`}
                    onClick={() => setHeroImage(image)}
                    aria-label={`Open ${image.alt}`}
                  >
                    {image.kind === "video" ? (
                      <video
                        src={image.src}
                        className="h-full w-full object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 360px"
                        className={image.imageClassName ?? "object-contain"}
                        unoptimized
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Footer — mirrors the grid alignment ──────────────────────── */}
      <div className="mt-16 grid grid-cols-[72px_1fr] gap-x-8 md:grid-cols-[100px_1fr] md:gap-x-10">
        <div />
        <p className="border-t border-neutral-200 pt-6 font-mono text-[12px] leading-none text-neutral-400">
          &copy; {year} asimorb
        </p>
      </div>

      {heroImage ? (
        <button
          type="button"
          className="fixed inset-0 z-50 cursor-zoom-out bg-white/95 p-6 md:p-10"
          onClick={() => setHeroImage(null)}
          aria-label="Close enlarged print"
        >
          <span className="relative block h-full w-full">
            {heroImage.kind === "video" ? (
              <video
                src={heroImage.src}
                className="h-full w-full object-contain"
                autoPlay
                controls
                loop
                playsInline
              />
            ) : (
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
                unoptimized
              />
            )}
          </span>
        </button>
      ) : null}
    </main>
  );
}
