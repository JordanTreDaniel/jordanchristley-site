"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

interface JourneyScene {
  id: number;
  name: string;
  headline: string;
  subtext: string;
  tags: string[] | null;
  videoSrc: string;
  posterSrc: string;
}

interface FlashCard {
  title: string;
  summary: string;
  icon: string;
}

const scenes: JourneyScene[] = [
  {
    id: 1,
    name: "The Overwhelm",
    headline: "Make more money with technology",
    subtext: "Cut through the noise. Let's build your path.",
    tags: null,
    videoSrc: "/scenes/scene-01.mp4",
    posterSrc: "/scenes/scene-01-poster.png",
  },
  {
    id: 2,
    name: "The Gems",
    headline: "Where are you losing time?",
    subtext: "Click a gem to explore your path.",
    tags: ["AI Foundations", "Notes & Systems", "Automation", "Custom AI"],
    videoSrc: "/scenes/scene-02.mp4",
    posterSrc: "/scenes/scene-02-poster.png",
  },
  {
    id: 3,
    name: "The Door",
    headline: "Let's find clarity together",
    subtext: "Start your journey. Reach out today.",
    tags: null,
    videoSrc: "/scenes/scene-03.mp4",
    posterSrc: "/scenes/scene-03-poster.png",
  },
];

const flashCards: FlashCard[] = [
  {
    title: "AI Foundations",
    summary: "ChatGPT, Claude, and the basics of working with AI. From asking questions to custom prompts.",
    icon: "C",
  },
  {
    title: "Notes & Systems",
    summary: "Notion, SOPs, and documenting your business so it can scale without you.",
    icon: "N",
  },
  {
    title: "Automation",
    summary: "Email sorting, social media scheduling, and workflow automation that saves hours every day.",
    icon: "A",
  },
  {
    title: "Custom AI",
    summary: "AI agents, MCPs, skills, and connecting AI to your tools and data.",
    icon: "I",
  },
];

export default function JourneyPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [isIOS, setIsIOS] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const videoUrls = scenes.map((s) => s.videoSrc);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ios =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(ios);

    let currentVideoIndex = -1;

    const handleScroll = () => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const totalHeight = stageRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = totalHeight - viewportHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      const rawIndex = Math.min(scenes.length - 1, Math.floor(progress * scenes.length));
      const sceneIndex = rawIndex;
      setActiveScene(sceneIndex);

      const video = videoRef.current;
      if (!video) return;

      const targetSrc = videoUrls[sceneIndex];
      if (currentVideoIndex !== sceneIndex) {
        video.src = targetSrc;
        video.load();
        currentVideoIndex = sceneIndex;
      }

      const sceneProgress = progress * scenes.length - sceneIndex;
      if (video.duration && video.duration > 0) {
        video.currentTime = sceneProgress * video.duration;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoUrls]);

  const scrollToScene = (index: number) => {
    if (!stageRef.current) return;
    const viewportHeight = window.innerHeight;
    const targetScroll = stageRef.current.offsetTop + index * viewportHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
    setMobileOpen(false);
  };

  const scrollToBottom = () => {
    if (!stageRef.current) return;
    const totalHeight = stageRef.current.offsetHeight;
    window.scrollTo({ top: stageRef.current.offsetTop + totalHeight, behavior: "smooth" });
  };

  const active = scenes[activeScene] || scenes[0];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
          Emerald Technology Consulting
        </span>
        <div className="hidden items-center gap-6 md:flex">
          {scenes.map((scene, i) => (
            <button
              key={scene.id}
              onClick={() => scrollToScene(i)}
              className={`text-xs uppercase tracking-[0.2em] transition ${
                i === activeScene
                  ? "text-emerald-300"
                  : "text-emerald-100/50 hover:text-emerald-100/80"
              }`}
            >
              {scene.name}
            </button>
          ))}
          <button
            onClick={scrollToBottom}
            className="rounded-full border border-emerald-300/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-200/80 transition hover:border-emerald-200/50"
          >
            Get in touch
          </button>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="z-50 flex items-center justify-center md:hidden"
        >
          {mobileOpen ? (
            <FiX className="h-6 w-6 text-emerald-200" />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20">
              <FiMenu className="h-5 w-5 text-emerald-300" />
            </div>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#050a07]/95 backdrop-blur-xl"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20">
              <span className="text-2xl text-emerald-300">◆</span>
            </div>
            {scenes.map((scene, i) => (
              <button
                key={scene.id}
                onClick={() => scrollToScene(i)}
                className={`text-lg uppercase tracking-[0.3em] transition ${
                  i === activeScene ? "text-emerald-300" : "text-emerald-100/60 hover:text-emerald-100"
                }`}
              >
                {scene.name}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                scrollToBottom();
              }}
              className="mt-4 rounded-full border border-emerald-300/30 px-6 py-3 text-xs uppercase tracking-[0.2em] text-emerald-200"
            >
              Get in touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={stageRef}
        className="journey-stage"
        style={{ "--scene-count": scenes.length } as React.CSSProperties}
      >
        <div className="journey-viewport">
          <video
            ref={videoRef}
            className="journey-video"
            muted
            playsInline
            preload="metadata"
            poster={active.posterSrc}
            onLoadedMetadata={(e) => {
              (e.target as HTMLVideoElement).currentTime = 0;
            }}
          />
          <div className="journey-overlay" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="journey-content"
            >
              {active.id === 2 ? (
                <div className="max-w-3xl">
                  <h2 className="journey-headline">{active.headline}</h2>
                  <p className="journey-subtext">{active.subtext}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {flashCards.map((card, i) => (
                      <motion.div
                        key={card.title}
                        layout
                        onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                        className="cursor-pointer rounded-2xl border border-emerald-300/15 bg-emerald-950/50 p-4 backdrop-blur-sm transition hover:border-emerald-300/30"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-bold text-emerald-300">
                            {card.icon}
                          </div>
                          <span className="text-sm font-semibold text-emerald-100">
                            {card.title}
                          </span>
                          <FiChevronDown
                            className={`ml-auto h-4 w-4 text-emerald-400/60 transition ${
                              expandedCard === i ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {expandedCard === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 text-sm leading-relaxed text-emerald-100/70">
                                {card.summary}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="journey-headline">{active.headline}</h2>
                  <p className="journey-subtext">{active.subtext}</p>
                  {active.tags && active.tags.length > 0 && (
                    <div className="journey-tags">
                      {active.tags.map((tag: string) => (
                        <span key={tag} className="journey-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-6 flex gap-4">
                    {active.id === 3 && (
                      <button
                        onClick={scrollToBottom}
                        className="journey-cta journey-cta-primary"
                      >
                        Let's talk
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="journey-indicators">
            {scenes.map((scene, i) => (
              <div
                key={scene.id}
                className={`journey-indicator ${i === activeScene ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
