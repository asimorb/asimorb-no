"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type InfluenceCategory = "System" | "User" | "Context";

type DetailItem = {
  name: string;
  text: string;
};

type AssessmentGroup = {
  label: "Objective" | "Behavioral" | "Psychological" | "Physiological";
  items: string[];
};

type Dimension = {
  name: string;
  dyad: "Presence" | "Authenticity";
  definition: string;
  qos: string[];
  qoe: string[];
  qualityFunction: string;
  evaluationFocus: string;
  technicalDetails: DetailItem[];
  humanDetails: DetailItem[];
  assessmentGroups: AssessmentGroup[];
  codependency: string;
  relevantFactors: Record<InfluenceCategory, string[]>;
  paperHref: string;
};

const influenceFactors: Record<InfluenceCategory, string[]> = {
  System: [
    "Hardware Capabilities",
    "Network Efficiency",
    "Tracking Accuracy",
    "Latency Issues",
    "System Reliability",
  ],
  User: [
    "Static Factors",
    "Dynamic Factors",
    "Experience of Use",
    "Gaming Experience",
    "Mood and Mental State",
  ],
  Context: ["Environment Conditions", "User's Surroundings", "Purpose of Use"],
};

const dimensions: Dimension[] = [
  {
    name: "Immersivity",
    dyad: "Presence",
    definition:
      'The extent to which a user feels surrounded by and present inside a virtual environment — the foundational sense of "being there." Everything else in the taxonomy depends on this being sufficiently established.',
    qos: [
      "Field of View (FoV)",
      "Display Resolution",
      "Frame Rate",
      "Persistence & Latency",
      "Spatial Audio",
      "Headset Types",
    ],
    qoe: ["Presence", "Attention", "Sense of Embodiment"],
    qualityFunction:
      "Immediate perceived quality: the system must first facilitate immersion before the user can form a stable sense of being there.",
    evaluationFocus:
      "Look for sensory enclosure, vividness, low discomfort, accurate sensorimotor coupling, and whether the user forgets the physical surroundings.",
    technicalDetails: [
      {
        name: "Visual fidelity",
        text: "Wide FoV, high pixel density, display resolution, and rendering quality produce richness and vividness that support perceptual absorption.",
      },
      {
        name: "Tracking",
        text: "Accurate position, orientation, gesture, and body tracking synchronize real movement with virtual movement and strengthen embodied immersion.",
      },
      {
        name: "Persistence, latency, refresh rates",
        text: "High persistence, latency, or low refresh rates introduce blur, lag, nausea, and break-in-presence risks.",
      },
      {
        name: "Audio fidelity",
        text: "Binaural, spatial, and ambient sound sources create aural envelopment and help the virtual world feel surrounding rather than screen-bound.",
      },
      {
        name: "Headset types",
        text: "Tethered, standalone, lightweight, occluding, or poorly fitted HMDs shape performance, isolation, comfort, and distraction.",
      },
    ],
    humanDetails: [
      {
        name: "Presence",
        text: "Users report feeling transported into another reality, engaging with objects and characters as if they were present.",
      },
      {
        name: "Attention",
        text: "External distractions fade, focus narrows to the virtual world, and time can feel compressed by sustained engagement.",
      },
      {
        name: "Sense of embodiment",
        text: "Accurate head, body, and motion capture can make the virtual body feel like the user's own body.",
      },
    ],
    assessmentGroups: [
      {
        label: "Objective",
        items: [
          "Measure hardware quality, resolution, PPI, FoV, frame-rate stability, latency, image quality, and spatial sound accuracy.",
          "Use image quality metrics such as sharpness, contrast, color fidelity, PSNR, or SSIM where appropriate.",
        ],
      },
      {
        label: "Behavioral",
        items: [
          "Analyze engagement, time spent with virtual objects, gaze behavior, and attention patterns.",
          "Use interviews or observation to understand whether users behave as if the virtual environment is their operative reality.",
        ],
      },
      {
        label: "Psychological",
        items: [
          "Use presence questionnaires, spatial awareness prompts, focus groups, and post-experience reflection.",
          "Ask users to describe the strength, fragility, and moments of break in their sense of being there.",
        ],
      },
      {
        label: "Physiological",
        items: [
          "Track presence-related responses such as pupil dilation, heart rate, and gaze.",
          "Correlate physiological measures with self-reported presence.",
        ],
      },
    ],
    codependency:
      "Poor tracking accuracy degrades Presence and cascades into Interactivity failures. Higher visual fidelity raises the Plausibility threshold downstream, i.e., more photorealistic environments are more vulnerable to plausibility failures. Explorability sustains Immersivity over time; without it, initial presence fades.",
    relevantFactors: {
      System: influenceFactors.System,
      User: ["Static Factors", "Mood and Mental State"],
      Context: ["Environment Conditions"],
    },
    paperHref: "https://doi.org/10.3389/frvir.2024.1434016",
  },
  {
    name: "Interactivity",
    dyad: "Presence",
    definition:
      "The ability of users to interact with the virtual environment and influence their experience — the sense of control and agency. This is where the user stops being a viewer and becomes a participant.",
    qos: ["Tracking", "Latency", "Throughput", "Input Modality", "Device & Interface"],
    qoe: ["User Agency and Control", "Ease of Interaction", "Cognitive Adaptability"],
    qualityFunction:
      "Agency layer: the user moves from being transported into a world to being able to act inside it and understand consequences.",
    evaluationFocus:
      "Look for meaningful control, task-fit between input modality and action, low cognitive load, and interaction methods that match user ability.",
    technicalDetails: [
      {
        name: "Intuitiveness and responsiveness",
        text: "Input delay, throughput, responsiveness, and clarity of feedback determine whether actions feel immediate and consequential.",
      },
      {
        name: "Input modality",
        text: "Gaze, laser pointers, controllers, hand tracking, natural gestures, and movement inputs must match the task and user capability.",
      },
      {
        name: "Device and interface appropriateness",
        text: "Ergonomics, usability, aesthetics, utility, and interface familiarity shape naturalness and satisfaction.",
      },
    ],
    humanDetails: [
      {
        name: "User agency and control",
        text: "The user senses ownership over actions and outcomes when the world responds clearly and predictably.",
      },
      {
        name: "Ease of interaction",
        text: "Simple, learnable controls reduce cognitive load and let users focus on the experience rather than the mechanism.",
      },
      {
        name: "Cognitive adaptability",
        text: "Interaction complexity aligned with user skill can support motivation, flow, problem solving, and sustained engagement.",
      },
    ],
    assessmentGroups: [
      {
        label: "Objective",
        items: [
          "Measure controller responsiveness, interaction latency, input timing, and smoothness of virtual actions.",
          "Use eye tracking or motion capture to capture input precision and response timing.",
        ],
      },
      {
        label: "Behavioral",
        items: [
          "Measure completion speed, interaction accuracy, error rates, time to target, and gesture recognition accuracy.",
          "Observe object manipulation, navigation patterns, points of frustration, and whether users understand interaction mechanics.",
        ],
      },
      {
        label: "Psychological",
        items: [
          "Assess sense of agency, challenge, motivation, satisfaction, cognitive load, and perceived interface intuitiveness.",
          "Use qualitative interviews to understand whether users felt empowered or constrained.",
        ],
      },
      {
        label: "Physiological",
        items: [
          "Correlate muscle tension, heart-rate variability, stress, or workload markers with interaction complexity and performance.",
          "Use eye tracking or brain-imaging-derived workload measures where the study context supports them.",
        ],
      },
    ],
    codependency:
      "Input latency feeds back into Immersivity, i.e., it can degrade presence directly. Agency and Naturalness condition Affect and Meaningfulness in Believability. The relationship runs in both directions: a believable narrative sustains motivation to interact even when interaction modalities are technically limited.",
    relevantFactors: {
      System: ["Tracking Accuracy", "Latency Issues", "Hardware Capabilities"],
      User: ["Experience of Use", "Gaming Experience"],
      Context: ["Purpose of Use"],
    },
    paperHref: "https://doi.org/10.3389/frvir.2024.1434016",
  },
  {
    name: "Explorability",
    dyad: "Presence",
    definition:
      "The ease and degree of freedom with which users can navigate and discover new elements within the virtual environment. This dimension sustains presence over time — it is the primary mechanism that keeps a user inhabiting a virtual world rather than merely visiting it.",
    qos: [
      "Degrees of Freedom",
      "Loading Times",
      "Spatial Resolution",
      "Navigation Ease",
      "Locomotion",
    ],
    qoe: ["Sense of Expansiveness", "Spatial Awareness and Understanding", "Curiosity and Intrigue"],
    qualityFunction:
      "Sustained presence layer: exploration keeps presence alive over time and begins to expose the world as coherent or incoherent.",
    evaluationFocus:
      "Look for freedom, wayfinding, spatial memory, curiosity, navigational confidence, and whether the environment rewards movement.",
    technicalDetails: [
      {
        name: "Degrees of Freedom",
        text: "Higher DoF enables intuitive directional and positional tracking, increasing freedom while reducing disorientation.",
      },
      {
        name: "Spatial resolution and loading times",
        text: "World size, detail, and loading behavior determine whether discovery feels continuous or fragmented.",
      },
      {
        name: "Navigation",
        text: "Wayfinding and travel systems shape mental mapping, performance, presence, and sickness risk.",
      },
      {
        name: "Locomotion",
        text: "Room-scale, motion-based, teleportation, arm-swinging, and other techniques mediate movement perception and naturalness.",
      },
    ],
    humanDetails: [
      {
        name: "Sense of expansiveness",
        text: "A freely navigable world can produce discovery, awe, excitement, and temporary liberation from physical constraints.",
      },
      {
        name: "Spatial awareness and understanding",
        text: "Clear landmarks and layouts help users form mental maps and emotional attachment to virtual places.",
      },
      {
        name: "Curiosity and intrigue",
        text: "Accessible, discoverable corners invite users to seek out new spaces, events, and hidden elements.",
      },
    ],
    assessmentGroups: [
      {
        label: "Objective",
        items: [
          "Measure rendering speed, loading times, frame rate, object loading, and level-of-detail streaming efficiency.",
          "Compare loading and navigation performance across hardware conditions.",
        ],
      },
      {
        label: "Behavioral",
        items: [
          "Analyze navigation efficiency, task performance, dwell time, exploration paths, non-linear exploration, and navigational aid use.",
          "Track areas explored, time spent in the virtual space, and responses to obstacles or unexpected events.",
        ],
      },
      {
        label: "Psychological",
        items: [
          "Assess cognitive mapping, spatial memory, perceived freedom, control during exploration, and satisfaction with navigation.",
          "Include emotional scales for curiosity, excitement, anxiety, and engagement.",
        ],
      },
      {
        label: "Physiological",
        items: [
          "Measure stress during disorienting exploration, heart-rate variability across exploration phases, and skin conductance during discoveries.",
          "Use facial expression analysis for joy, curiosity, frustration, or disorientation.",
        ],
      },
    ],
    codependency:
      "Curiosity Satisfaction is the primary mechanism sustaining presence over time that feeds back directly to Immersivity. Locomotion depends on functional Interactivity QoS. Spatial coherence feeds forward into Plausibility whereby inconsistent spatial physics break logical congruence.",
    relevantFactors: {
      System: ["Hardware Capabilities", "Network Efficiency"],
      User: ["Dynamic Factors", "Experience of Use"],
      Context: ["User's Surroundings", "Purpose of Use"],
    },
    paperHref: "https://doi.org/10.3389/frvir.2024.1434016",
  },
  {
    name: "Plausibility",
    dyad: "Authenticity",
    definition:
      "The degree to which the virtual environment's rules, behaviors, and interactions align with the user's expectations and cognitive models. What's happening is real — or at least, it follows a consistent logic that makes it feel real.",
    qos: [
      "Perceptual Constancy",
      "Aliasing Sampling",
      "Physics & Geometry",
      "Texture Quality",
      "Audio Synchronization",
    ],
    qoe: ["Perceived Congruence", "Alignment and Prior Knowledge", "Cognitive Dissonance"],
    qualityFunction:
      "Authenticity as trueness: plausibility is syntactic and tests logical congruence between the virtual world and expected rules.",
    evaluationFocus:
      "Look for stable rules, physical consistency, sensory alignment, predictable cause and effect, and moments where the world stops making sense.",
    technicalDetails: [
      {
        name: "Perceptual constancy",
        text: "Objects should retain stable shape, size, position, color, and lightness despite environmental or contextual changes.",
      },
      {
        name: "Aliasing and sampling",
        text: "Jagged edges, pixelated textures, and visual discontinuities disrupt the credibility of the virtual environment.",
      },
      {
        name: "Physics consistency",
        text: "Gravity, collisions, kinematics, material behavior, and cause-and-effect chains must obey the world rules.",
      },
    ],
    humanDetails: [
      {
        name: "Perceived congruence",
        text: "The user can apply real-world or fiction-world knowledge because objects and events behave consistently and naturally.",
      },
      {
        name: "Alignment and prior knowledge",
        text: "Plausibility strengthens when behavior resonates with the user's mental models, experience, and expectations.",
      },
      {
        name: "Cognitive dissonance",
        text: "Unexpected, illogical, or contradictory events create discomfort and can undermine presence and enjoyment.",
      },
    ],
    assessmentGroups: [
      {
        label: "Objective",
        items: [
          "Evaluate object interaction consistency, physical rules, logical contradictions, sensory alignment, collision behavior, and gravity simulation.",
          "Use quality metrics for 3D models, physics simulations, and affordance mismatches.",
        ],
      },
      {
        label: "Behavioral",
        items: [
          "Observe adaptation to plausible versus implausible scenarios and track trust in the world's rules.",
          "Measure object interaction frequency and accuracy to detect affordance mistakes.",
        ],
      },
      {
        label: "Psychological",
        items: [
          "Use questionnaires on realness, object permanence, predictability, and adherence to user expectations.",
          "Capture emotional responses to nonsensical events, confusion, frustration, amusement, or broken logic.",
        ],
      },
      {
        label: "Physiological",
        items: [
          "Measure confusion-related brain activity or changes in muscle tension during unexpected occurrences.",
          "Relate physiological surprise or unease markers to specific plausibility failures.",
        ],
      },
    ],
    codependency:
      "Plausibility is downstream of all three Presence dimensions. Sensory fidelity, interaction consistency, and spatial coherence must all hold for logical congruence to emerge. A failure here is the primary mechanism that shatters Believability.",
    relevantFactors: {
      System: influenceFactors.System,
      User: ["Static Factors", "Experience of Use"],
      Context: ["Environment Conditions", "Purpose of Use"],
    },
    paperHref: "https://doi.org/10.3389/fpsyg.2024.1291650",
  },
  {
    name: "Believability",
    dyad: "Authenticity",
    definition:
      "The degree to which the VR experience delivers the internal coherence, narrative logic, and emotional resonance needed to sustain suspension of disbelief. If it is convincing, it is happening. This is the most emergent and most fragile dimension — the consolidated judgment of everything that preceded it.",
    qos: ["Scenario Logic", "Affordance", "Environment Feedback", "System Coherence"],
    qoe: [
      "Suspension of Disbelief",
      "Narrative and Emotional Responsiveness",
      "Social Presence",
      "Prior VR Experience",
    ],
    qualityFunction:
      "Authenticity as genuineness: believability is semantic and depends on internal coherence, emotional resonance, and suspension of disbelief.",
    evaluationFocus:
      "Look for narrative logic, atmosphere, meaningfulness, social connection, emotional investment, and whether users accept the world on offer.",
    technicalDetails: [
      {
        name: "Visual representation",
        text: "Rendering quality, physically based materials, asset geometry, and visual cues shape perceived realism.",
      },
      {
        name: "Audio synchronization",
        text: "Sound timing and spatial location must match virtual distance, location, and event timing.",
      },
      {
        name: "Internal coherence and consistency",
        text: "Physics, interactions, characters, story logic, style, and tasks must fit together within the established world.",
      },
      {
        name: "Atmospherics and randomness",
        text: "Imperfections, nuanced reactions, environmental detail, and character animation create naturalness and world texture.",
      },
      {
        name: "Scenario logic",
        text: "Scripted events, narrative complexity, predictability, meaningfulness, and decision-making support cognitive absorption.",
      },
    ],
    humanDetails: [
      {
        name: "Suspension of disbelief",
        text: "Users willingly accept the virtual environment as real enough despite knowing it is artificial.",
      },
      {
        name: "Narrative and emotional responsiveness",
        text: "Investment in characters, situations, and story produces emotional resonance and loss of time awareness.",
      },
      {
        name: "Social presence",
        text: "Believable agents or other people can create genuine connection and a sense of being inside a living world.",
      },
      {
        name: "Prior VR experience",
        text: "Experienced users may have sharper expectations, while imagination and suggestibility can increase acceptance of fictional worlds.",
      },
    ],
    assessmentGroups: [
      {
        label: "Objective",
        items: [
          "Benchmark asset quality, animation fluidity, environment size, object density, texture detail, dynamism, and environmental audio.",
          "Review ecological realism, narrative structure, character realism, and world complexity.",
        ],
      },
      {
        label: "Behavioral",
        items: [
          "Track user choices and reactions to character actions, plot events, and world rules.",
          "Analyze whether user decisions are driven by the perceived logic and stakes of the virtual world.",
        ],
      },
      {
        label: "Psychological",
        items: [
          "Assess narrative absorption, fictional immersion, emotional impact, character connection, and suspension of disbelief.",
          "Use self-report and qualitative analysis to understand empathy, affect, and meaning.",
        ],
      },
      {
        label: "Physiological",
        items: [
          "Measure startle responses, heart-rate spikes, and electrodermal activity during suspenseful or emotional moments.",
          "Cross-reference emotional physiology with facial expression or narrative-event analysis.",
        ],
      },
    ],
    codependency:
      "Believability depends on all four preceding dimensions. It is easier to destroy than to build. In other words, a single Plausibility break can shatter it entirely. Its bidirectional loop with Interactivity is notable: a believable narrative sustains interaction motivation even when technical quality is limited.",
    relevantFactors: {
      System: ["System Reliability"],
      User: influenceFactors.User,
      Context: influenceFactors.Context,
    },
    paperHref: "https://doi.org/10.3389/fpsyg.2024.1291650",
  },
];

const categories = Object.keys(influenceFactors) as InfluenceCategory[];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cubeRotation, setCubeRotation] = useState({ x: -18, y: 38 });
  const detailRefs = useRef<Array<HTMLElement | null>>([]);
  const dragState = useRef({ active: false, x: 0, y: 0 });

  const activeDimension = dimensions[activeIndex];

  const relevantFactorSet = useMemo(
    () =>
      new Set(
        categories.flatMap((category) =>
          activeDimension.relevantFactors[category].map((factor) => `${category}:${factor}`),
        ),
      ),
    [activeDimension],
  );

  const factorLabelPositions = useMemo(() => {
    const center = { x: 113, y: 111 };
    const radius = 66;
    const xRadians = (cubeRotation.x * Math.PI) / 180;
    const yRadians = (cubeRotation.y * Math.PI) / 180;
    const cosX = Math.cos(xRadians);
    const sinX = Math.sin(xRadians);
    const cosY = Math.cos(yRadians);
    const sinY = Math.sin(yRadians);

    const projectPoint = (point: { x: number; y: number; z: number }) => {
      const yTilted = point.y * cosX - point.z * sinX;
      const zTilted = point.y * sinX + point.z * cosX;
      const xRotated = point.x * cosY + zTilted * sinY;
      const zRotated = -point.x * sinY + zTilted * cosY;
      const scale = 1 / (1 - zRotated * 0.2);

      return {
        x: center.x + xRotated * radius * scale,
        y: center.y + yTilted * radius * scale,
      };
    };

    const makeLabel = (point: { x: number; y: number; z: number }) => {
      const projected = projectPoint(point);

      return {
        x: projected.x,
        y: projected.y,
        align: projected.x < center.x ? "right" : "left",
      };
    };

    return {
      User: makeLabel({ x: 0, y: -0.9, z: -0.25 }),
      Context: makeLabel({ x: -0.72, y: 0.50, z: 0.75 }),
      System: makeLabel({ x: 0.72, y: 0.95, z: 0.0 }),
    };
  }, [cubeRotation]);

  useEffect(() => {
    let frame = 0;

    const updateActiveFromScroll = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.32;
      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      detailRefs.current.forEach((element, index) => {
        if (!element) {
          return;
        }

        const marker = element.querySelector<HTMLElement>("[data-scroll-marker]");
        const rect = (marker ?? element).getBoundingClientRect();
        const distance = Math.abs(rect.top - readingLine);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveFromScroll);
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const handleCubePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragState.current = { active: true, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleCubePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) {
      return;
    }

    const dx = event.clientX - dragState.current.x;
    const dy = event.clientY - dragState.current.y;
    dragState.current = { active: true, x: event.clientX, y: event.clientY };

    setCubeRotation((rotation) => ({
      x: Math.max(-68, Math.min(68, rotation.x - dy * 0.45)),
      y: rotation.y + dx * 0.45,
    }));
  };

  const handleCubePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    dragState.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const scrollToDimension = (index: number) => {
    setActiveIndex(index);
    detailRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="taxonomy-page">
      <section className="opening" aria-label="Framework introduction">
        <h1>A holistic framework for evaluating virtual reality experiences.</h1>
        <div className="pivot-intro">
          <p className="section-kicker">VR relies on two fundamental pivots</p>
          <div className="pivot-list">
            <article>
              <h2>Presence</h2>
              <p>a sense of being there</p>
            </article>
            <article>
              <h2>Authenticity</h2>
              <p>a sense of trueness and genuineness</p>
            </article>
          </div>
        </div>
      </section>
      <button
        aria-label="Scroll to influence factors"
        className="scroll-cue"
        onClick={() => {
          document.getElementById("influence-factors")?.scrollIntoView({ behavior: "smooth" });
        }}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <section className="influence-map" id="influence-factors" aria-label="Influence factors and quality levels">
        <p className="section-kicker">Three primary influence factors</p>
        <div className="influence-y">
          <div className="influence-node influence-user">
            <ul>
              {influenceFactors.User.map((factor) => (
                <li data-relevant={relevantFactorSet.has(`User:${factor}`)} key={factor}>
                  {factor}
                </li>
              ))}
            </ul>
            <h2>User</h2>
          </div>
          <div className="influence-node influence-context">
            <h2>Context</h2>
            <ul>
              {influenceFactors.Context.map((factor) => (
                <li data-relevant={relevantFactorSet.has(`Context:${factor}`)} key={factor}>
                  {factor}
                </li>
              ))}
            </ul>
          </div>
          <div className="influence-node influence-system">
            <h2>System</h2>
            <ul>
              {influenceFactors.System.map((factor) => (
                <li data-relevant={relevantFactorSet.has(`System:${factor}`)} key={factor}>
                  {factor}
                </li>
              ))}
            </ul>
          </div>
          <div className="y-line line-left" />
          <div className="y-line line-right" />
          <div className="y-line line-stem" />
        </div>

        <p className="section-kicker quality-kicker" id="quality-levels">
          Across three quality levels
        </p>
        <div className="quality-formation" aria-label="Quality formation model">
          <article>
            <h2>Perceived Quality</h2>
            <p>Immediate impressions: vividness, enclosure, responsiveness, and presence.</p>
          </article>
          <article>
            <h2>Experienced Quality</h2>
            <p>The user compares system output with expectations, comfort, goals, and memory.</p>
          </article>
          <article>
            <h2>Judged Quality</h2>
            <p>
              Reflective evaluation tests plausibility, believability, coherence, and congruence.
            </p>
          </article>
        </div>
        <button
          aria-label="Scroll to taxonomy overview"
          className="scroll-cue quality-scroll-cue"
          onClick={() => {
            document.getElementById("taxonomy-overview")?.scrollIntoView({ behavior: "smooth" });
          }}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </section>

      <section className="landing" id="taxonomy-overview" aria-label="VR taxonomy overview">
        <div className="landing-diagram">
          <div
            className="orbital-system"
            style={
              {
                "--orbit-x": `${cubeRotation.x * 0.12}deg`,
                "--orbit-y": `${cubeRotation.y * 0.12}deg`,
              } as React.CSSProperties
            }
          >
            <InteractiveCube
              onPointerDown={handleCubePointerDown}
              onPointerMove={handleCubePointerMove}
              onPointerUp={handleCubePointerEnd}
              rotation={cubeRotation}
            />
            <svg
              aria-hidden="true"
              className="diagram-lines"
              preserveAspectRatio="none"
              viewBox="0 0 1000 760"
            >
              <line x1="500" x2="382" y1="372" y2="250" />
              <line x1="500" x2="500" y1="372" y2="160" />
              <line x1="500" x2="378" y1="372" y2="456" />
              <line x1="500" x2="622" y1="372" y2="456" />
              <line x1="500" x2="500" y1="372" y2="642" />
            </svg>
            {dimensions.map((dimension, index) => (
              <button
                className={`landing-callout callout-${dimension.name.toLowerCase()}`}
                key={dimension.name}
                onClick={() => scrollToDimension(index)}
                type="button"
              >
                <span>{dimension.name}</span>
                <p>{dimension.definition}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <button
        aria-label="Scroll to dimension details"
        className="scroll-cue taxonomy-scroll-cue"
        onClick={() => scrollToDimension(0)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <div className="detail-stack-page">
        <aside className="dimension-nav" aria-label="Dimension navigation">
          <InteractiveCube
            compact
            onPointerDown={handleCubePointerDown}
            onPointerMove={handleCubePointerMove}
            onPointerUp={handleCubePointerEnd}
            rotation={cubeRotation}
          />
          <nav>
            {dimensions.map((navDimension, navIndex) => (
              <button
                data-current={activeIndex === navIndex}
                key={navDimension.name}
                onClick={() => scrollToDimension(navIndex)}
                type="button"
              >
                {navDimension.name}
              </button>
            ))}
          </nav>
          <div
            className="factor-guide"
            style={
              {
                "--guide-rotation-x": `${cubeRotation.x}deg`,
                "--guide-rotation-y": `${cubeRotation.y}deg`,
                "--guide-unrotation-x": `${-cubeRotation.x}deg`,
                "--guide-unrotation-y": `${-cubeRotation.y}deg`,
              } as React.CSSProperties
            }
            aria-label="Active influence factors"
          >
            <div className="factor-guide-cube">
              <div className="factor-guide-rotor">
                <span className="factor-edge factor-edge-top-left" />
                <span className="factor-edge factor-edge-top-right" />
                <span className="factor-edge factor-edge-vertical" />
              </div>
            </div>
            <div
              className="factor-cluster factor-user"
              data-align={factorLabelPositions.User.align}
              style={{ left: factorLabelPositions.User.x, top: factorLabelPositions.User.y }}
            >
              <h4>User</h4>
              <ul>
                {influenceFactors.User.map((factor) => (
                  <li data-relevant={relevantFactorSet.has(`User:${factor}`)} key={factor}>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="factor-cluster factor-context"
              data-align={factorLabelPositions.Context.align}
              style={{ left: factorLabelPositions.Context.x, top: factorLabelPositions.Context.y }}
            >
              <h4>Context</h4>
              <ul>
                {influenceFactors.Context.map((factor) => (
                  <li data-relevant={relevantFactorSet.has(`Context:${factor}`)} key={factor}>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="factor-cluster factor-system"
              data-align={factorLabelPositions.System.align}
              style={{ left: factorLabelPositions.System.x, top: factorLabelPositions.System.y }}
            >
              <h4>System</h4>
              <ul>
                {influenceFactors.System.map((factor) => (
                  <li data-relevant={relevantFactorSet.has(`System:${factor}`)} key={factor}>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div className="detail-sections">
          {dimensions.map((dimension, index) => (
            <section
              className="dimension-detail"
              data-active={activeIndex === index}
              data-index={index}
              data-title={dimension.name}
              id={dimension.name.toLowerCase()}
              key={dimension.name}
              ref={(element) => {
                detailRefs.current[index] = element;
              }}
            >
              <article className="detail-main">
                <header className="detail-header">
                  <h2>{dimension.name}</h2>
                  <p>{dimension.definition}</p>
                </header>

                <div className="detail-columns">
                  <DetailPanel
                    label="What the system provides"
                    items={dimension.technicalDetails}
                  />
                  <DetailPanel
                    label="What the user experiences"
                    items={dimension.humanDetails}
                  />
                </div>

                <div className="connections-block">
                  <h3>Connections</h3>
                  <p>{dimension.codependency}</p>
                </div>
              </article>

              <aside className="detail-side" data-title={dimension.name}>
                <span aria-hidden="true" className="scroll-marker" data-scroll-marker />
                <div className="quality-function">
                  <h3>Quality function</h3>
                  <p>{dimension.qualityFunction}</p>
                  <h3>Evaluation focus</h3>
                  <p>{dimension.evaluationFocus}</p>
                </div>
                <AssessmentPanel groups={dimension.assessmentGroups} />
                <a
                  className="paper-link"
                  href={dimension.paperHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read the full paper →
                </a>
              </aside>
            </section>
          ))}
        </div>
      </div>

      <style jsx global>{`
        :root {
          --color-bg: #f5f0e8;
          --color-blue: #1a3ae0;
          --color-orange: #c84b1f;
          --color-text: #1a1a1a;
          --color-text-muted: #6b6560;
          --color-rule: #c8bfb0;
          --color-presence-tint: rgba(26, 58, 224, 0.04);
          --color-authenticity-tint: rgba(200, 75, 31, 0.05);
          --color-active-border: #1a3ae0;
          --font-display: var(--font-playfair);
          --font-body: var(--font-plex);
          --fs-kicker: clamp(0.68rem, 0.56rem + 0.25vw, 0.86rem);
          --fs-hero: clamp(2.2rem, 1.25rem + 2.55vw, 4.4rem);
          --fs-serif-lg: clamp(0.82rem, 0.54rem + 0.68vw, 1.28rem);
          --fs-red-body: clamp(0.96rem, 0.72rem + 0.55vw, 1.28rem);
          --fs-blue-body: clamp(0.86rem, 0.7rem + 0.38vw, 1.05rem);
          --fs-label: clamp(0.9rem, 0.72rem + 0.45vw, 1.18rem);
          --page-pad-x: clamp(24px, 4.5vw, 88px);
        }

        * {
          box-sizing: border-box;
        }

        html {
          background: var(--color-bg);
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body), sans-serif;
          overflow-x: hidden;
        }

        button,
        a {
          font: inherit;
        }

        .taxonomy-page {
          min-height: 100vh;
          background: var(--color-bg);
          color: var(--color-text);
          padding: 0 var(--page-pad-x) clamp(52px, 6vw, 96px);
        }

        .kicker,
        .section-kicker,
        .layer-label,
        .connections-block h3,
        .quality-function h3,
        .detail-panel h3,
        .assessment-panel > h3 {
          color: var(--color-text-muted);
          font-family: var(--font-body), sans-serif;
          font-size: var(--fs-kicker);
          font-weight: 400;
          letter-spacing: 0.12em;
          line-height: 1.25;
          margin: 0;
          text-transform: uppercase;
        }

        .opening {
          display: grid;
          grid-template-rows: auto 1fr;
          min-height: 80svh;
          padding: clamp(44px, 6vw, 88px) 0 clamp(36px, 4vw, 72px);
          position: relative;
          row-gap: clamp(76px, 12vh, 160px);
        }

        .opening h1 {
          color: #f0182a;
          font-family: var(--font-display), serif;
          font-size: var(--fs-hero);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1;
          margin: 0;
          max-width: clamp(720px, 52vw, 900px);
          text-wrap: balance;
        }

        .pivot-intro {
          align-self: end;
          display: grid;
          column-gap: clamp(18px, 2.2vw, 38px);
          grid-template-columns: minmax(260px, 1fr) minmax(310px, 0.86fr);
          max-width: 860px;
          margin-left: auto;
          width: 48vw;
        }

        .pivot-intro .section-kicker {
          align-self: start;
          color: var(--color-text-muted);
          padding-top: 6px;
          text-align: right;
        }

        .pivot-list {
          border-left: 2px solid #f0182a;
          display: grid;
          gap: clamp(42px, 5vw, 76px);
          min-height: clamp(300px, 35vh, 430px);
          padding: clamp(148px, 16vh, 240px) 0 0 clamp(24px, 2.8vw, 42px);
        }

        .pivot-list h2 {
          color: #f0182a;
          font-family: var(--font-display), serif;
          font-size: var(--fs-serif-lg);
          font-style: italic;
          font-weight: 400;
          line-height: 1;
          margin: 0 0 4px;
        }

        .pivot-list p {
          color: #f0182a;
          font-size: var(--fs-red-body);
          font-weight: 700;
          line-height: 1.25;
          margin: 0;
        }

        .scroll-cue {
          appearance: none;
          background: transparent;
          border: 0;
          cursor: pointer;
          display: grid;
          gap: 3px;
          height: 36px;
          justify-items: center;
          margin: clamp(8px, 1.6vw, 22px) auto 0;
          padding: 0;
          width: 34px;
        }

        .quality-scroll-cue {
          margin-top: clamp(14px, 2vw, 30px);
        }

        .taxonomy-scroll-cue {
          margin-top: clamp(-34px, -2.5vw, -12px);
        }

        .scroll-cue span {
          animation: cue-drift 1.8s ease-in-out infinite;
          border-bottom: 1.5px solid #f0182a;
          border-right: 1.5px solid #f0182a;
          display: block;
          height: 11px;
          opacity: 0.26;
          transform: rotate(45deg);
          width: 11px;
        }

        .scroll-cue span:nth-child(2) {
          animation-delay: 0.16s;
          opacity: 0.44;
        }

        .scroll-cue span:nth-child(3) {
          animation-delay: 0.32s;
          opacity: 0.62;
        }

        .scroll-cue:hover span,
        .scroll-cue:focus-visible span {
          opacity: 0.9;
        }

        .scroll-cue:focus-visible {
          outline: 1px solid #f0182a;
          outline-offset: 8px;
        }

        @keyframes cue-drift {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }

          50% {
            transform: translateY(7px) rotate(45deg);
          }
        }

        .influence-map {
          min-height: 125svh;
          padding-top: clamp(42px, 5vw, 78px);
          position: relative;
        }

        .influence-map > .section-kicker {
          color: var(--color-text-muted);
          text-align: center;
        }

        .quality-kicker {
          color: var(--color-text-muted);
          margin: clamp(26px, 3.5vw, 48px) 0 0;
          scroll-margin-top: 56px;
          text-align: center;
        }

        .influence-y {
          height: clamp(430px, 50vw, 560px);
          margin: clamp(46px, 6vw, 82px) auto 0;
          position: relative;
          width: min(620px, 70vw);
        }

        .influence-node {
          color: var(--color-blue);
          position: absolute;
          z-index: 2;
        }

        .influence-node h2 {
          color: var(--color-blue);
          font-family: var(--font-body), sans-serif;
          font-size: var(--fs-label);
          font-weight: 800;
          line-height: 1;
          margin: 0;
        }

        .influence-node ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .influence-node li {
          color: var(--color-blue);
          font-size: var(--fs-blue-body);
          line-height: 1.4;
          font-weight: 500;
          opacity: 1;
        }

        .influence-user {
          left: 50%;
          text-align: left;
          top: 0;
          transform: translateX(-10%);
        }

        .influence-user h2 {
          margin-top: 26px;
        }

        .influence-context {
          right: 61%;
          text-align: right;
          top: 260px;
        }

        .influence-context h2,
        .influence-system h2 {
          margin-bottom: 20px;
        }

        .influence-system {
          left: 58%;
          top: 260px;
        }

        .y-line {
          background: var(--color-blue);
          box-shadow: 0 0 44px rgba(26, 58, 224, 0.34);
          height: 6px;
          left: 50%;
          position: absolute;
          top: 238px;
          transform-origin: left center;
          width: 190px;
          z-index: 1;
        }

        .line-left {
          transform: rotate(214deg);
        }

        .line-right {
          transform: rotate(-34deg);
        }

        .line-stem {
          height: 200px;
          top: 238px;
          transform: translateX(-3px);
          width: 6px;
        }

        .quality-formation {
          display: grid;
          gap: clamp(46px, 6vw, 90px);
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: clamp(46px, 6vw, 90px);
        }

        .quality-formation article {
          border-left: 0;
          min-height: 160px;
          padding-left: clamp(28px, 4vw, 64px);
          position: relative;
        }

        .quality-formation article::before {
          background: #f0182a;
          content: "";
          height: clamp(92px, 9vw, 124px);
          left: 0;
          position: absolute;
          top: 0;
          width: 2px;
        }

        .quality-formation article:nth-of-type(1) {
          padding-left: 0;
        }

        .quality-formation article:nth-of-type(1)::before {
          display: none;
        }

        .quality-formation h2 {
          color: #f0182a;
          font-family: var(--font-body), sans-serif;
          font-size: var(--fs-label);
          font-style: normal;
          font-weight: 700;
          line-height: 1;
          margin: 0 0 34px;
        }

        .quality-formation p {
          color: #f0182a;
          font-size: var(--fs-blue-body);
          font-weight: 500;
          line-height: 1.35;
          margin: 0;
          max-width: 440px;
        }

        .landing {
          align-items: center;
          display: grid;
          min-height: 76svh;
          padding: clamp(4px, 1.4vw, 20px) 0;
          position: relative;
        }

        .landing-diagram {
          aspect-ratio: 1000 / 760;
          height: auto;
          margin: auto;
          max-width: 1500px;
          min-height: 640px;
          perspective: 1800px;
          position: relative;
          transform: translateY(clamp(-160px, -5.8vw, -54px));
          width: min(100%, 1500px);
        }

        .orbital-system {
          height: 100%;
          position: relative;
          transform: rotateX(var(--orbit-x)) rotateY(var(--orbit-y));
          transform-style: preserve-3d;
          transition: transform 220ms ease-out;
          width: 100%;
        }

        .diagram-lines {
          inset: 0;
          overflow: visible;
          pointer-events: none;
          position: absolute;
          z-index: 2;
        }

        .diagram-lines line {
          stroke: var(--color-orange);
          stroke-dasharray: 1 8;
          stroke-linecap: round;
          stroke-width: 1.4;
          vector-effect: non-scaling-stroke;
        }

        .cube-wrap {
          --cube-size: clamp(92px, 9vw, 136px);
          --cube-depth: calc(var(--cube-size) / 2);
          height: var(--cube-size);
          left: 50%;
          perspective: 900px;
          position: absolute;
          top: 49%;
          touch-action: none;
          transform: translate(-50%, -50%);
          width: var(--cube-size);
          z-index: 4;
          cursor: grab;
          user-select: none;
        }

        .cube-wrap:active {
          cursor: grabbing;
        }

        .cube-wrap.compact {
          --cube-size: 92px;
          --cube-depth: 46px;
          height: 92px;
          left: 0;
          perspective: 520px;
          position: relative;
          top: 0;
          transform: none;
          width: 92px;
        }

        .cube {
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 80ms linear;
          width: 100%;
        }

        .cube-face {
          background: #262bd5;
          border: 1px solid rgba(12, 194, 220, 0.55);
          box-shadow: 0 0 36px rgba(26, 58, 224, 0.38);
          height: 100%;
          opacity: 0.98;
          position: absolute;
          width: 100%;
        }

        .cube-front {
          transform: translateZ(var(--cube-depth));
        }

        .cube-back {
          transform: rotateY(180deg) translateZ(var(--cube-depth));
        }

        .cube-right {
          transform: rotateY(90deg) translateZ(var(--cube-depth));
        }

        .cube-left {
          transform: rotateY(-90deg) translateZ(var(--cube-depth));
        }

        .cube-top {
          transform: rotateX(90deg) translateZ(var(--cube-depth));
        }

        .cube-bottom {
          transform: rotateX(-90deg) translateZ(var(--cube-depth));
        }

        .landing-callout {
          background: transparent;
          border: 0;
          color: var(--color-blue);
          cursor: pointer;
          position: absolute;
          text-align: left;
          transform: translateY(-50%);
          width: clamp(190px, 18vw, 280px);
          z-index: 3;
        }

        .landing-callout::before {
          display: none;
        }

        .landing-callout span {
          color: #f0182a;
          display: block;
          font-family: var(--font-body), sans-serif;
          font-size: var(--fs-label);
          font-weight: 700;
          margin-bottom: 18px;
        }

        .landing-callout p {
          font-size: var(--fs-blue-body);
          font-weight: 400;
          line-height: 1.18;
          margin: 0;
        }

        .callout-immersivity {
          left: 37.8%;
          top: 60%;
          text-align: right;
          transform: translate(-100%, -50%);
        }

        .callout-immersivity::before {
          right: -95%;
          top: 0.95rem;
          width: 86%;
        }

        .callout-interactivity {
          left: 38.2%;
          top: 32.9%;
          text-align: right;
          transform: translate(-100%, -50%);
        }

        .callout-interactivity::before {
          right: -76%;
          top: 0.95rem;
          transform: rotate(28deg);
          transform-origin: right;
          width: 82%;
        }

        .callout-explorability {
          left: 52%;
          top: 21.1%;
          transform: translateY(-50%);
        }

        .callout-explorability::before {
          border-left: 2px dotted var(--color-orange);
          border-top: 0;
          height: 270px;
          left: -44px;
          top: 0.95rem;
          width: 0;
        }

        .callout-plausibility {
          left: 62.2%;
          top: 60%;
          transform: translateY(-50%);
        }

        .callout-plausibility::before {
          left: -92%;
          top: 0.95rem;
          width: 84%;
        }

        .callout-believability {
          left: 52%;
          top: 84.5%;
          transform: translateY(-50%);
        }

        .callout-believability::before {
          border-left: 2px dotted var(--color-orange);
          border-top: 0;
          height: 220px;
          left: -30px;
          top: -220px;
          width: 0;
        }

        .detail-stack-page {
          display: grid;
          gap: clamp(42px, 5vw, 96px);
          grid-template-columns: clamp(190px, 18vw, 286px) minmax(0, 1fr);
          padding-top: clamp(110px, 13vw, 190px);
        }

        .detail-sections {
          display: grid;
          gap: clamp(160px, 22vw, 320px);
          min-width: 0;
        }

        .dimension-detail {
          display: grid;
          gap: clamp(72px, 7vw, 140px);
          grid-template-columns: minmax(320px, 0.85fr) minmax(360px, 1fr);
          min-height: 112vh;
          scroll-margin-top: 56px;
        }

        .dimension-nav {
          position: sticky;
          top: clamp(28px, 4vw, 58px);
          align-self: start;
          z-index: 5;
        }

        .dimension-nav nav {
          border-left: 2px dotted var(--color-orange);
          display: grid;
          gap: 8px;
          margin: 24px 0 0 44px;
          padding-left: 18px;
        }

        .dimension-nav button {
          background: transparent;
          border: 0;
          color: rgba(240, 24, 42, 0.18);
          cursor: pointer;
          font-size: clamp(0.86rem, 1vw, 1rem);
          line-height: 1.2;
          padding: 0;
          text-align: left;
          white-space: nowrap;
        }

        .dimension-nav button[data-current="true"] {
          color: #f0182a;
        }

        .factor-guide {
          color: var(--color-blue);
          height: 222px;
          margin-left: -62px;
          margin-top: clamp(400px, 16vw, 250px);
          perspective: 520px;
          position: relative;
          width: 226px;
        }

        .factor-guide-cube {
          height: 126px;
          left: 50%;
          position: absolute;
          top: 48px;
          transform: translateX(-50%);
          transform-style: preserve-3d;
          width: 126px;
        }

        .factor-guide-rotor {
          height: 100%;
          position: relative;
          transform: rotateX(var(--guide-rotation-x)) rotateY(var(--guide-rotation-y));
          transform-style: preserve-3d;
          width: 100%;
        }

        .factor-edge {
          background: var(--color-blue);
          height: 2.5px;
          left: 50%;
          position: absolute;
          top: 50%;
          transform-origin: left center;
          width: 74px;
        }

        .factor-edge-top-left {
          transform: translate3d(0, 0, 0) rotateZ(200deg);
        }

        .factor-edge-top-right {
          transform: translate3d(0, 0, 0) rotateY(-90deg) rotateZ(-18deg);
        }

        .factor-edge-vertical {
          transform: translate3d(0, 0, 0) rotateZ(90deg);
        }

        .factor-cluster {
          position: absolute;
          transform: translateY(-50%);
          transition: left 80ms linear, top 80ms linear;
          z-index: 1;
        }

        .factor-cluster[data-align="right"] {
          text-align: right;
          transform: translate(-100%, -50%);
        }

        .factor-cluster[data-align="left"] {
          text-align: left;
        }

        .factor-cluster h4 {
          color: var(--color-blue);
          font-size: clamp(0.62rem, 0.68vw, 0.74rem);
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 6px;
        }

        .factor-cluster ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .factor-cluster li {
          color: var(--color-blue);
          font-size: clamp(0.54rem, 0.6vw, 0.66rem);
          line-height: 1.22;
          opacity: 0.18;
          transition: opacity 180ms ease, font-weight 180ms ease;
        }

        .factor-cluster li[data-relevant="true"] {
          font-weight: 700;
          opacity: 1;
        }

        .factor-user {
          width: 124px;
        }

        .factor-context {
          width: 102px;
        }

        .factor-system {
          width: 108px;
        }

        .detail-main {
          display: grid;
          gap: clamp(58px, 7vw, 110px);
          padding-top: clamp(150px, 18vw, 260px);
          min-width: 0;
        }

        .detail-header {
          display: none;
        }

        .detail-columns {
          display: grid;
          gap: clamp(20px, 2.4vw, 42px);
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .detail-panel {
          border: 0;
          padding: 0;
        }

        .detail-panel + .detail-panel {
          border-left: 2px solid #f0182a;
          padding-left: clamp(18px, 2vw, 34px);
        }

        .detail-panel h3 {
          color: #f0182a;
          font-family: var(--font-display), serif;
          font-size: calc(clamp(1.15rem, 1.55vw, 1.65rem) - 0.083rem);
          font-style: italic;
          letter-spacing: 0;
          text-transform: none;
        }

        .detail-panel h3 {
          text-align: right;
        }

        .detail-panel + .detail-panel h3 {
          text-align: left;
        }

        .detail-stack {
          display: grid;
          gap: clamp(28px, 4vw, 56px);
          margin-top: clamp(22px, 3vw, 42px);
        }

        .detail-panel h3,
        .detail-stack {
          max-width: min(100%, 380px);
        }

        .detail-panel h3,
        .detail-panel .detail-stack {
          margin-left: auto;
        }

        .detail-panel + .detail-panel h3,
        .detail-panel + .detail-panel .detail-stack {
          margin-left: 0;
          margin-right: auto;
        }

        .detail-item {
          text-align: right;
        }

        .detail-panel + .detail-panel .detail-item {
          text-align: left;
        }

        .detail-item h4 {
          color: var(--color-blue);
          font-family: var(--font-body), sans-serif;
          font-size: calc(clamp(0.84rem, 0.98vw, 1rem) - 0.083rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 8px;
        }

        .assessment-group h4 {
          color: #f0182a;
          font-family: var(--font-body), sans-serif;
          font-size: calc(clamp(0.84rem, 0.98vw, 1rem) - 0.083rem);
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 8px;
        }

        .detail-item p,
        .quality-function p,
        .assessment-group li {
          color: var(--color-blue);
          font-size: calc(clamp(0.82rem, 0.94vw, 1rem) - 0.083rem);
          line-height: 1.24;
          margin: 0;
        }

        .connections-block {
          padding-top: clamp(36px, 5.5vw, 84px);
        }

        .connections-block p {
          color: #f0182a;
          font-size: calc(clamp(1.05rem, 1.5vw, 1.55rem) - 0.083rem);
          line-height: 1.2;
          margin: 24px 0 0;
        }

        .detail-side {
          padding-top: clamp(4px, 1vw, 12px);
          min-width: 0;
          position: relative;
        }

        .scroll-marker {
          display: block;
          height: 1px;
          pointer-events: none;
          position: absolute;
          top: 0;
          width: 1px;
        }

        .detail-side .quality-function {
          text-align: right;
        }

        .quality-function h3 {
          font-size: calc(var(--fs-kicker) - 0.083rem);
          font-weight: 700;
          margin-top: clamp(30px, 4vw, 58px);
          text-align: right;
        }

        .quality-function h3:first-child {
          margin-top: clamp(34px, 5vw, 72px);
        }

        .quality-function h3 + p {
          color: #f0182a;
          font-size: calc(clamp(1.05rem, 1.5vw, 1.55rem) - 0.083rem);
          line-height: 1.2;
          margin: 12px 0 0;
        }

        .detail-header h2,
        .detail-side::before {
          color: #f0182a;
          content: attr(data-title);
          display: block;
          font-family: var(--font-display), serif;
          font-size: calc(clamp(3.2rem, 6.1vw, 7.2rem) - 0.083rem);
          font-weight: 400;
          line-height: 0.95;
          margin-bottom: clamp(58px, 8vw, 118px);
          max-width: none;
          overflow-wrap: normal;
          text-align: right;
          white-space: nowrap;
          word-break: normal;
        }

        .assessment-panel {
          margin-top: clamp(58px, 8vw, 124px);
        }

        .connections-block h3,
        .assessment-panel > h3 {
          font-size: calc(var(--fs-kicker) - 0.083rem);
        }

        .assessment-grid {
          border: 1px solid #f0182a;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 16px;
        }

        .assessment-group {
          aspect-ratio: 1 / 1;
          border-left: 1px solid #f0182a;
          border-top: 1px solid #f0182a;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: clamp(14px, 1.55vw, 24px);
        }

        .assessment-group:nth-child(odd) {
          border-left: 0;
        }

        .assessment-group:nth-child(-n + 2) {
          border-top: 0;
        }

        .assessment-group ul {
          list-style: none;
          margin: auto 0 0;
          padding: 0;
        }

        .assessment-group li {
          margin-top: clamp(12px, 1.45vw, 20px);
        }

        .paper-link,
        .landing-callout {
          -webkit-tap-highlight-color: transparent;
        }

        .paper-link {
          color: #f0182a;
          display: inline-block;
          font-size: calc(0.95rem - 0.083rem);
          line-height: 1.5;
          margin-top: 24px;
          position: relative;
          text-decoration: none;
        }

        .paper-link::after {
          background: currentColor;
          bottom: -2px;
          content: "";
          height: 1px;
          left: 0;
          position: absolute;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 200ms ease;
          width: 100%;
        }

        .paper-link:hover::after {
          transform: scaleX(1);
        }

        @media (max-width: 767px) {
          .taxonomy-page {
            padding: 0 16px 48px;
          }

          .opening {
            min-height: auto;
            padding: 40px 0 56px;
          }

          .opening h1 {
            font-size: var(--fs-hero);
            max-width: 100%;
          }

          .pivot-intro {
            display: block;
            left: auto;
            margin-top: 100px;
            max-width: none;
            position: relative;
            top: auto;
            width: 100%;
          }

          .pivot-intro .section-kicker {
            text-align: left;
          }

          .pivot-list {
            margin-top: 24px;
            min-height: auto;
            padding: 34px 0 0 22px;
          }

          .influence-map {
            min-height: auto;
            padding-top: 42px;
          }

          .influence-y {
            height: auto;
            margin-top: 34px;
            width: 100%;
          }

          .influence-node {
            margin-top: 32px;
            position: relative;
            text-align: left;
            transform: none;
            left: auto;
            right: auto;
            top: auto;
          }

          .influence-node h2 {
            margin: 0 0 14px;
          }

          .influence-user h2 {
            margin-top: 14px;
          }

          .y-line {
            display: none;
          }

          .quality-formation {
            gap: 34px;
            grid-template-columns: 1fr;
            margin-top: 88px;
          }

          .quality-formation article,
          .quality-formation article:nth-of-type(1) {
            border-left: 2px solid #f0182a;
            min-height: auto;
            padding-left: 22px;
          }

          .quality-formation article::before {
            display: none;
          }

          .landing {
            min-height: auto;
          }

          .landing-diagram {
            display: grid;
            gap: 18px;
            height: auto;
            min-height: 0;
            padding: 32px 0 36px;
            transform: none;
            width: 100%;
          }

          .orbital-system {
            display: grid;
            gap: 18px;
            transform: none;
          }

          .cube-wrap {
            --cube-size: 80px;
            --cube-depth: 40px;
            height: var(--cube-size);
            left: auto;
            margin: 0 auto 18px;
            position: relative;
            top: auto;
            transform: none;
            width: var(--cube-size);
          }

          .landing-callout,
          .callout-immersivity,
          .callout-interactivity,
          .callout-explorability,
          .callout-plausibility,
          .callout-believability {
            position: relative;
            left: auto;
            right: auto;
            top: auto;
            text-align: left;
            width: 100%;
          }

          .landing-callout::before {
            display: none;
          }

          .quality-formation,
          .detail-stack-page,
          .dimension-detail,
          .detail-columns,
          .assessment-grid {
            grid-template-columns: 1fr;
          }

          .detail-stack-page {
            gap: 64px;
            padding-top: 72px;
          }

          .detail-sections {
            gap: 120px;
          }

          .dimension-detail {
            min-height: auto;
          }

          .dimension-nav {
            position: static;
          }

          .dimension-nav nav {
            margin-left: 28px;
          }

          .factor-guide {
            margin-left: 0;
            margin-top: 42px;
            width: 226px;
          }

          .detail-main,
          .detail-side {
            padding-top: 0;
          }

          .detail-header {
            display: block;
          }

          .detail-header h2 {
            display: block;
            font-size: calc(clamp(3.4rem, 18vw, 5.6rem) - 0.083rem);
            margin: 0 0 18px;
            text-align: left;
          }

          .detail-header p {
            color: var(--color-blue);
            font-size: calc(1.05rem - 0.083rem);
            line-height: 1.2;
            margin: 0;
          }

          .detail-side::before {
            display: none;
          }

          .detail-panel + .detail-panel {
            border-left: 0;
            padding-left: 0;
          }

          .detail-item,
          .detail-panel + .detail-panel .detail-item,
          .detail-side .quality-function,
          .quality-function h3 {
            text-align: left;
          }

          .connections-block {
            padding-top: 24px;
          }

          .assessment-panel {
            margin-top: 42px;
          }

          .assessment-group,
          .assessment-group:nth-child(odd),
          .assessment-group:nth-child(-n + 2) {
            border-left: 0;
            border-top: 1px solid #f0182a;
          }
        }
      `}</style>
    </main>
  );
}

function InteractiveCube({
  compact = false,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  rotation,
}: {
  compact?: boolean;
  onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
  rotation: { x: number; y: number };
}) {
  return (
    <div
      aria-label="Interactive taxonomy cube"
      className={`cube-wrap${compact ? " compact" : ""}`}
      onPointerCancel={onPointerUp}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      role="img"
    >
      <div
        className="cube"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <span className="cube-face cube-front" />
        <span className="cube-face cube-back" />
        <span className="cube-face cube-right" />
        <span className="cube-face cube-left" />
        <span className="cube-face cube-top" />
        <span className="cube-face cube-bottom" />
      </div>
    </div>
  );
}

function DetailPanel({ items, label }: { items: DetailItem[]; label: string }) {
  return (
    <section className="detail-panel">
      <h3>{label}</h3>
      <div className="detail-stack">
        {items.map((item) => (
          <article className="detail-item" key={item.name}>
            <h4>{item.name}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AssessmentPanel({ groups }: { groups: AssessmentGroup[] }) {
  return (
    <section className="assessment-panel">
      <h3>Assessment approaches</h3>
      <div className="assessment-grid">
        {groups.map((group) => (
          <article className="assessment-group" key={group.label}>
            <h4>{group.label}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
