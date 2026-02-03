import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiAnthropic,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Logo = {
  name: string;
  Icon: IconType;
};

const logos: Logo[] = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "AWS", Icon: SiAmazonwebservices },
  { name: "Python", Icon: SiPython },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Anthropic", Icon: SiAnthropic },
  { name: "Heroku", Icon: SiHeroku },
  { name: "Express", Icon: SiExpress },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Docker", Icon: SiDocker },
  { name: "Vercel", Icon: SiVercel },
  { name: "Git", Icon: SiGit },
  { name: "Figma", Icon: SiFigma },
];

export default function LogoCloud() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {logos.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex items-center gap-2 rounded-full border border-emerald-200/15 bg-emerald-950/40 px-4 py-2 text-xs text-emerald-50/80 shadow-sm shadow-emerald-500/10"
        >
          <Icon className="h-4 w-4 text-emerald-200/90" aria-hidden />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
