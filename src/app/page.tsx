"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "Websites",
  "Logos",
  "Interfaces",
  "Research",
  "Prints",
  "About",
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

const aboutColumns = [
  [
    "I make things to understand them. Whether designing built spaces, developing interactive environments, or conducting user research, my practice centers on iterative making prototyping ideas, observing how people engage with them, and refining based on what emerges through use.",
    "This approach has taken me through architecture and built projects, media arts and technology, UX research, and immersive environment development. Across these contexts, I work from a consistent question: what possibilities for action do people actually perceive in an environment, and how does that shape their experience? This affordance-perception lens connects my spatial design work, my research on interactivity in virtual environments, and my facilitation of participatory processes.",
  ],
  [
    "My background integrates design thinking, empirical methods, and creative technology. I've led design studios, conducted mixed-method studies, built VR environments, and coordinated collaborations between artists, technologists, and researchers. I draw on ecological psychology, phenomenology, and media theory, not as abstract frameworks but as tools for understanding how environments and inhabitants co-constitute experience.",
    "I'm particularly interested in spatial ecologies where different communities perceive different possibilities within the same environment, and in developing methods that make these perception gaps visible and actionable.",
  ],
] as const;

const aboutPortrait: ProjectImage = {
  src: "/Reference/Portrait.jpg",
  alt: "Portrait of Asim",
  className: "top-[8%] left-[30%] h-[84%] w-[40%]",
  imageClassName: "object-cover",
};

function ProjectDescription({
  description,
  className,
}: {
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`mt-6 text-left text-[12px] leading-[1.25] text-neutral-900 ${
        className ?? "max-w-[52%]"
      }`}
    >
      {description.split("\n").map((line, index) => {
        const trimmedLine = line.trim();
        const isHeading =
          /^(QUESTION|FINDING|WHY|METHODS(?: \(Design x Measures\))?|TOOLS|Design|Measures|Hardware|Software)$/.test(
            trimmedLine,
          );

        return (
          <p
            key={`${line}-${index}`}
            className={`${line === "" ? "h-[1.25em]" : ""} ${
              isHeading
                ? "font-mono text-[11px] font-semibold leading-[1.35]"
                : ""
            }`}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
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
    title: "Asimorb Portfolio (featured on: Site of Sites)",
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
    id: 301,
    title: "Hand-tracking vs. Controllers in VR interactions",
    category: "Research",
    year: "2021",
    description:
      "QUESTION\nHow do hand-tracking and handheld-controllers compare for reach-grab-place tasks in VR?\n\nFINDING\nControllers outperformed hand-tracking on speed, accuracy, mental workload, and usability. Neither modality affected presence or immersion.\n\nWHY\nMismatch between available gesture (single \"pinch\") and required grips (six distinct prehension types) created cognitive friction despite hand-tracking being theoretically more natural.\n\nMETHODS (Design x Measures)\n2x2 within-subject study (N=33). Hand-tracking vs. Controller X Color vs. Grayscale\nTask Reorganize 15 objects requiring six different grip types\n\n- Performance log: completion time, grab attempts\n- Behavioral: Video coding via KINOVEA (vectors, angles, tracking)\n- Subjective: IPQ (presence), NASA-TLX, AttrakDiff (usability)\n- Analysis: Two-way MANOVA with ANOVAs, Intraclass Correlation Coefficient (ICC), and Root mean square error (RMSE)\n\nTOOLS\nHardware Oculus Quest 1 (inside-out tracking, 6DOF)\nSoftware SketchUp Pro, Unreal Engine 4.26, SPSS 28.0, Kinovea 0.9.5\nInput Point/pinch gestures vs. grip button controller",
    descriptionClassName: "max-w-full",
    images: [
      {
        src: "/Studies/HT%201.jpg",
        alt: "Hand-tracking vs controllers study image 01",
        className: "top-[10%] left-[7%] h-[36%] w-[38%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/HT%202.jpg",
        alt: "Hand-tracking vs controllers study image 02",
        className: "top-[10%] left-[55%] h-[36%] w-[38%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/HT%203.jpg",
        alt: "Hand-tracking vs controllers study image 03",
        className: "bottom-[8%] left-[7%] h-[36%] w-[38%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/HT%204.jpg",
        alt: "Hand-tracking vs controllers study image 04",
        className: "bottom-[8%] left-[55%] h-[36%] w-[38%]",
        imageClassName: "object-cover",
      },
    ],
  },
  {
    id: 302,
    title: "Affordance mismatch in VR environments",
    category: "Research",
    year: "2020",
    description:
      "QUESTION\nDoes adding interactivity (manipulation/effect affordances) to VR architectural walkthroughs improve presence and change user behavior?\n\nFINDING\nInteractive walkthrough increased spatial presence and engagement but did not change overt physical behaviors (movement, gestures). Users relied on familiar digital interactions (point-and-click) rather than spatial behaviors.\n\nWHY\nMetaphorical affordances (VR imitating real objects like door handles) created expectations that could not be physically met, causing users to appropriate controllers in familiar ways rather than using spatial literacy.\n\nMETHODS (Design x Measures)\nWithin-subject study (N=34): Passive walkthrough (PW) vs. Interactive walkthrough (IW) in identical virtual apartment\n\n- Subjective: ITC-SOPI (presence, engagement, etc.)\n- Behavioral: Video coding via BORIS software (states and events)\n- Analysis: MANCOVA controlling for active run-time.\n\nTOOLS\nHardware\n- HTC Vive Pro HMD (6DOF, 1440x1600 per eye, 90Hz, 110deg FoV) / Input with HTC Vive handheld controllers\n- Windows 10 Pro, Intel i7 7700 3.6GHz, 32GB RAM, NVIDIA GTX 1060\nSoftware SketchUp Pro / Unreal Engine 4.22 / BORIS 7.9.19 / IBM SPSS",
    descriptionClassName: "max-w-full",
    images: [
      {
        src: "/Studies/AFF%201.png",
        alt: "Affordance mismatch study image 01",
        className: "top-[12%] left-[6%] h-[34%] w-[40%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/AFF%202.png",
        alt: "Affordance mismatch study image 02",
        className: "top-[12%] left-[54%] h-[34%] w-[40%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/AFF%203.png",
        alt: "Affordance mismatch study image 03",
        className: "bottom-[8%] left-[30%] h-[34%] w-[40%]",
        imageClassName: "object-cover",
      },
    ],
  },
  {
    id: 303,
    title: "Location-based Storytelling App in a Natural Park",
    category: "Research",
    year: "",
    description:
      "QUESTION\nDoes the addition of 3D character available as Augmented Reality (AR) inside a location-based storytelling app improve user experience compared to text-and-narration only delivery in an outdoor environment?\n\nFINDING\nAR version significantly increased immersion and flow, and showed higher desirability and attractiveness. No difference in other aspects like competence, tension, challenge, or negative effects.\n\nWHY\n3D characters made the experience more engaging compared to the text-and-narration version. The story-world was delivered more effectively with the 3D characters appearing through AR in the outdoor environment.\n\nMETHODS (Design x Measures)\nBetween-subject field experiment (N=30) comparing two app versions along a 700m nature trail within a protected nature area in the Rindal region. TB (text-and-narration based) vs. AR-based (troll characters with voice-overs)\n\n- Game Experience Questionnaire (GEQ): 9 dimensions including immersion, flow, challenge, etc.\n- AttrakDiff: Pragmatic quality (PQ), hedonic quality (HQ-I, HQ-S), attractiveness (ATT)\n- Analysis: MANOVA with follow-up ANOVAs\n\nTOOLS\nHardware\n- Apple iPad, 5th gen, 9.7\" screen, 2048x1536 resolution, 8MP camera / Bad Elf GPS (2.5m accuracy)\n\nSoftware\nUnity (2019.3.4f1), Vuforia Engine (9.7.5) / ZBrush (2021), Maya (2020) / Substance Painter (2020) / Photoshop (2021)",
    descriptionClassName: "max-w-full",
    images: [
      {
        src: "/Studies/TR%201.jpg",
        alt: "Location-based storytelling app study image 01",
        className: "top-[10%] left-[5%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/TR%202.jpg",
        alt: "Location-based storytelling app study image 02",
        className: "top-[10%] left-[36%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/TR%203.jpg",
        alt: "Location-based storytelling app study image 03",
        className: "top-[10%] left-[67%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/TR%204.jpg",
        alt: "Location-based storytelling app study image 04",
        className: "bottom-[10%] left-[20%] h-[30%] w-[28%]",
        imageClassName: "object-cover",
      },
      {
        src: "/Studies/TR%205.webp",
        alt: "Location-based storytelling app study image 05",
        className: "bottom-[10%] left-[52%] h-[30%] w-[28%]",
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
  const categoryNav = (variant: "rail" | "mobile") => (
    <nav aria-label="Work categories">
      <ul
        className={
          variant === "rail"
            ? "space-y-2"
            : "flex items-baseline justify-between gap-x-2"
        }
      >
        {categories.map((cat) => (
          <li key={cat}>
            <button
              type="button"
              className={`text-xs leading-snug transition-colors duration-150 ${
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
  );

  return (
    <main className="relative max-w-2xl mx-auto px-6 py-12 text-[15px] leading-[1.22] md:py-16">
      <div className="hidden md:block fixed inset-x-0 top-6 z-20 mx-auto max-w-2xl px-6 pointer-events-none md:top-10">
        <h1 className="text-[16px] font-normal leading-none">@asimorb</h1>
      </div>
      <h1 className="mb-8 text-[16px] font-normal leading-none md:hidden">
        @asimorb
      </h1>

      {/*
       * Single persistent grid used for the entire page.
       * Left col (narrow): title, then categories.
       * Right col (wide):  bio + contacts, then project cards.
       */}
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-[100px_1fr] md:gap-x-10">

        {/* ── @asimorb — left col ──────────────────────────────────────── */}
        <div className="hidden md:block" />

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

        {/* ── Mobile category nav — full width ─────────────────────────── */}
        <div className="mb-2 md:hidden">{categoryNav("mobile")}</div>

        {/* ── Divider — aligns with the right column ───────────────────── */}
        <div className="hidden md:block" />
        <hr className="mb-10 border-neutral-200" />

        {/* ── Category nav — left col, sticky ──────────────────────────── */}
        <aside className="hidden justify-self-start md:block">
          <div className="sticky top-40">
            {categoryNav("rail")}
          </div>
        </aside>

        {/* ── Active category content — right col ──────────────────────── */}
        <div>
          {activeCategory === "About" ? (
            <div>
              <div className="mb-8 whitespace-pre-line text-left font-mono text-[11px] font-normal leading-[1.35] text-neutral-900">
                {"Asim Hameed, PhD\nTrondheim, Norway"}
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                {aboutColumns.map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-6">
                    {column.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[12px] leading-[1.25] text-neutral-900"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="relative mt-14 w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
                <button
                  type="button"
                  className={`absolute cursor-zoom-in ${aboutPortrait.className}`}
                  onClick={() => setHeroImage(aboutPortrait)}
                  aria-label={`Open ${aboutPortrait.alt}`}
                >
                  <Image
                    src={aboutPortrait.src}
                    alt={aboutPortrait.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 360px"
                    className={aboutPortrait.imageClassName ?? "object-contain"}
                    unoptimized
                  />
                </button>
              </div>
            </div>
          ) : (
            visibleProjects.map((project, index) => (
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
                    <ProjectDescription
                      description={project.description}
                      className={project.descriptionClassName}
                    />
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
                      <p className="whitespace-pre-line text-[12px] leading-[1.25] text-neutral-900">
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
            ))
          )}
        </div>

      </div>

      <div className="mt-14 md:hidden">
        <hr className="border-neutral-200" />
        <div className="mt-2">{categoryNav("mobile")}</div>
      </div>

      {/* ── Footer — mirrors the grid alignment ──────────────────────── */}
      <div className="mt-16 grid grid-cols-1 gap-x-8 md:grid-cols-[100px_1fr] md:gap-x-10">
        <div className="hidden md:block" />
        <p className="pt-6 font-mono text-[12px] leading-none text-neutral-400 md:border-t md:border-neutral-200">
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
