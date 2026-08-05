"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

interface JourneyScene {
  id: number;
  name: string;
  headline: string;
  subtext: string;
  tags: string[] | null;
  videoSrc: string;
  mobileVideoSrc: string;
  posterSrc: string;
}

const scenes: JourneyScene[] = [
  {
    id: 1,
    name: "The Overwhelm",
    headline: "Everything takes forever.",
    subtext: "This is your day before the glow shows up.",
    tags: ["Wilderness", "Overwhelm"],
    videoSrc: "/scenes/scene-01.mp4",
    mobileVideoSrc: "/scenes/scene-01-mobile.mp4",
    posterSrc: "/scenes/scene-01-poster.png",
  },
  {
    id: 2,
    name: "A Glow in the Dark",
    headline: "Then something changes.",
    subtext: "Help doesn't come as a lightning bolt. It comes as a little glow.",
    tags: ["Wilderness", "The Mascot"],
    videoSrc: "/scenes/scene-02.mp4",
    mobileVideoSrc: "/scenes/scene-02-mobile.mp4",
    posterSrc: "/scenes/scene-02-poster.png",
  },
  {
    id: 3,
    name: "Step Through",
    headline: "Step through.",
    subtext: "The messy world ends at this curtain.",
    tags: ["The Portal", "Fruit-Rain"],
    videoSrc: "/scenes/scene-03.mp4",
    mobileVideoSrc: "/scenes/scene-03-mobile.mp4",
    posterSrc: "/scenes/scene-03-poster.png",
  },
  {
    id: 4,
    name: "Everything Just Works",
    headline: "Everything just… works.",
    subtext: "The scroll of a mountain of tablets? Gone. The fire? Already lit.",
    tags: ["Paradise", "Midpoint"],
    videoSrc: "/scenes/scene-04.mp4",
    mobileVideoSrc: "/scenes/scene-04-mobile.mp4",
    posterSrc: "/scenes/scene-04-poster.png",
  },
  {
    id: 5,
    name: "The New You",
    headline: "Meet the new you.",
    subtext: "Same you. Kempt, equipped, and everything running itself.",
    tags: ["Paradise", "The New You"],
    videoSrc: "/scenes/scene-05.mp4",
    mobileVideoSrc: "/scenes/scene-05-mobile.mp4",
    posterSrc: "/scenes/scene-05-poster.png",
  },
  {
    id: 6,
    name: "Your Turn",
    headline: "This world is yours.",
    subtext: "From overwhelm to 'it just works' — let's build your way in.",
    tags: ["Paradise", "Your Turn"],
    videoSrc: "/scenes/scene-06.mp4",
    mobileVideoSrc: "/scenes/scene-06-mobile.mp4",
    posterSrc: "/scenes/scene-06-poster.png",
  },
];

const serviceChips = ["AI Foundations", "Notes & Systems", "Automation", "Custom AI"];

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function JourneyPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentVideoIndexRef = useRef(-1);
  const [activeScene, setActiveScene] = useState(0);
  const [isIOS, setIsIOS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [reducedProgress, setReducedProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const videoUrls = useMemo(
    () => scenes.map((s) => (isMobile ? s.mobileVideoSrc : s.videoSrc)),
    [isMobile],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ios =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(ios);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = (e?: MediaQueryListEvent) =>
      setReducedMotion(e ? e.matches : mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const video = videoRef.current;
    if (!video) return;
    const idx = currentVideoIndexRef.current >= 0 ? currentVideoIndexRef.current : 0;
    const scene = scenes[idx];
    if (scene) {
      video.src = isMobile ? scene.mobileVideoSrc : scene.videoSrc;
      video.load();
    }
  }, [isMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const totalHeight = stageRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = totalHeight - viewportHeight;
      const scrolled = -rect.top;
      const progress =
        scrollableHeight > 0
          ? Math.max(0, Math.min(1, scrolled / scrollableHeight))
          : 0;
      const rawIndex = Math.min(scenes.length - 1, Math.floor(progress * scenes.length));
      setActiveScene(rawIndex);

      if (reducedMotion) {
        setReducedProgress(progress);
        return;
      }

      const video = videoRef.current;
      if (!video) return;

      const targetSrc = videoUrls[rawIndex];
      if (currentVideoIndexRef.current !== rawIndex) {
        video.src = targetSrc;
        video.load();
        currentVideoIndexRef.current = rawIndex;
      }

      const sceneProgress = progress * scenes.length - rawIndex;
      if (video.duration && video.duration > 0) {
        video.currentTime = sceneProgress * video.duration;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion, videoUrls]);

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
    window.scrollTo({
      top: stageRef.current.offsetTop + totalHeight,
      behavior: "smooth",
    });
    setMobileOpen(false);
  };

  const active = scenes[activeScene] || scenes[0];

  const renderSceneBody = (scene: JourneyScene, compact: boolean) => (
    <>
      <h2 className="journey-headline">{scene.headline}</h2>
      <p className="journey-subtext">{scene.subtext}</p>
      {scene.id === 2 ? (
        <div className="journey-service-chips">
          {serviceChips.map((name) => (
            <span key={name} className="journey-chip">
              {name}
            </span>
          ))}
        </div>
      ) : (
        scene.tags &&
        scene.tags.length > 0 && (
          <div className="journey-tags">
            {scene.tags.map((tag: string) => (
              <span key={tag} className="journey-tag">
                {tag}
              </span>
            ))}
          </div>
        )
      )}
      {scene.id === 6 && (
        <div className="mt-6 flex flex-wrap gap-4">
          <button onClick={scrollToBottom} className="journey-cta journey-cta-primary">
            Book a call
            {arrowIcon}
          </button>
          <button onClick={scrollToBottom} className="journey-cta journey-cta-ghost">
            See what we do
          </button>
        </div>
      )}
    </>
  );

  return (
    <>
      <nav className="journey-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
          Emerald Technology Consulting
        </span>
        <div className="hidden items-center gap-5 lg:flex">
          {scenes.map((scene, i) => (
            <button
              key={scene.id}
              onClick={() => scrollToScene(i)}
              className={`text-xs uppercase tracking-[0.15em] transition ${
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
          className="z-50 flex items-center justify-center lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-[#050a07]/95 backdrop-blur-xl"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20">
              <span className="text-2xl text-emerald-300">◆</span>
            </div>
            {scenes.map((scene, i) => (
              <button
                key={scene.id}
                onClick={() => scrollToScene(i)}
                className={`text-lg uppercase tracking-[0.3em] transition ${
                  i === activeScene
                    ? "text-emerald-300"
                    : "text-emerald-100/60 hover:text-emerald-100"
                }`}
              >
                {scene.name}
              </button>
            ))}
            <button
              onClick={scrollToBottom}
              className="mt-4 rounded-full border border-emerald-300/30 px-6 py-3 text-xs uppercase tracking-[0.2em] text-emerald-200"
            >
              Get in touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {reducedMotion ? (
        <div ref={stageRef} className="journey-stage-reduced">
          {scenes.map((scene, i) => {
            const d = reducedProgress * scenes.length - i;
            const opacity = Math.max(0, Math.min(1, 1 - Math.max(0, Math.abs(d) - 0.5) * 2));
            return (
              <section key={scene.id} className="journey-reduced-section">
                <img
                  src={scene.posterSrc}
                  alt={scene.name}
                  className="journey-reduced-poster"
                />
                <div className="journey-reduced-shade" />
                <div
                  className="journey-reduced-content"
                  style={{
                    opacity,
                    transform: `translateY(${(1 - opacity) * 24}px)`,
                  }}
                >
                  <p className="journey-reduced-chapter">
                    {i + 1} · {scene.name}
                  </p>
                  {renderSceneBody(scene, true)}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
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
                {renderSceneBody(active, false)}
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
      )}
    </>
  );
}
