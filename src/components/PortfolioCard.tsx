"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  liveUrl: string;
  tags: string[];
}

export default function PortfolioCard({
  title,
  description,
  imageSrc,
  liveUrl,
  tags,
}: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(springY, [0, 1], ["2deg", "-2deg"]);
  const rotateY = useTransform(springX, [0, 1], ["-2deg", "2deg"]);

  const glowBackground = useTransform(
    [springX, springY],
    ([latestX, latestY]: number[]) =>
      `radial-gradient(420px circle at ${latestX * 100}% ${latestY * 100}%, rgba(92, 219, 138, 0.08), transparent 70%)`,
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-3xl border border-emerald-300/15 bg-emerald-950/40 p-4 transition-colors duration-300 hover:border-emerald-300/25 sm:p-6"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-emerald-300/10"
        >
          <motion.div
            className="relative aspect-video w-full overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={imageSrc}
              alt={title}
              className="block h-full w-full object-cover"
              loading="lazy"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-emerald-950/70 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-950/70 px-5 py-2.5 text-sm font-medium text-emerald-200 backdrop-blur-sm">
                Open site
                <FiArrowUpRight className="h-4 w-4" />
              </span>
            </motion.div>
          </motion.div>
        </a>

        <div className="mt-5 space-y-3" style={{ transform: "translateZ(30px)" }}>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title inline-flex items-center gap-2"
          >
            <h3 className="text-lg font-semibold text-emerald-50 transition-colors duration-200 group-hover/title:text-emerald-200">
              {title}
            </h3>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 2, y: -2 }}
              className="text-emerald-400/60 transition-colors group-hover/title:text-emerald-300"
            >
              <FiArrowUpRight className="h-4 w-4" />
            </motion.span>
          </a>
          <p className="text-sm leading-relaxed text-emerald-100/60">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-emerald-300/15 bg-emerald-950/60 px-2.5 py-1 text-xs text-emerald-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
