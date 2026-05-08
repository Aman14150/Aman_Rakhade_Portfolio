"use client";

import { useEffect, useState } from "react";

const BASE = (process.env.NEXT_PUBLIC_BASE_PATH ?? "");

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Cpu,
  Download,
  FolderGit2,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import {
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  currentFocus,
  education,
  experiences,
  focusAreas,
  heroTags,
  highlights,
  navigation,
  principles,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

const viewport = { once: true, amount: 0.2 };
const smoothEase = [0.16, 1, 0.3, 1] as const;

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.985, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: smoothEase },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const heroSignals = [
  {
    value: "98%+",
    title: "Resume extraction accuracy",
    description: "TalentMatchAI reduced review noise and sped up recruiter shortlisting.",
  },
  {
    value: "40%",
    title: "Manual effort reduced",
    description: "Azure AI document workflows replaced repetitive review work in production.",
  },
  {
    value: "25%",
    title: "Latency improvement",
    description: "LLM workflow tuning improved response speed on applied AI systems.",
  },
];

const projectRowAccents = [
  "project-row-accent-cyan",
  "project-row-accent-blue",
  "project-row-accent-emerald",
] as const;

const navIcons: Record<string, LucideIcon> = {
  "#about": UserRound,
  "#experience": BriefcaseBusiness,
  "#projects": FolderGit2,
  "#skills": Cpu,
  "#contact": Mail,
};

type JourneyItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  summary: string;
  bullets: string[];
};

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="section-label">{label}</p>
      <h2 className="section-title text-balance text-white">
        {title}
      </h2>
      <p className="section-copy max-w-2xl text-slate-300">
        {description}
      </p>
    </div>
  );
}

function SectionNavigation({
  activeSection,
  variant = "desktop",
  onNavigate,
}: {
  activeSection: string;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const isMobile = variant === "mobile";

  return (
    <nav className={isMobile ? "mobile-menu-nav" : "section-nav"} aria-label="Section navigation">
      {navigation.map((item) => {
        const Icon = navIcons[item.href] ?? Sparkles;
        const isActive = activeSection === item.href;

        return (
          <motion.a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            onClick={onNavigate}
            whileTap={{ scale: 0.97 }}
            className={isMobile ? "mobile-menu-link" : "section-nav-link"}
          >
            {isActive ? (
              <motion.span
                layoutId={isMobile ? "mobile-nav-indicator" : "desktop-nav-indicator"}
                className={isMobile ? "mobile-menu-indicator" : "section-nav-indicator"}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : null}

            <span className={isMobile ? "mobile-menu-content" : "relative z-10 flex items-center gap-2.5"}>
              <span className={isMobile ? "mobile-menu-icon" : "section-nav-icon"}>
                <Icon className="h-4 w-4" />
              </span>
              {isMobile ? <span className="mobile-menu-label">{item.label}</span> : <span>{item.label}</span>}
            </span>
          </motion.a>
        );
      })}
    </nav>
  );
}

function JourneyBlock({
  label,
  title,
  description,
  icon: Icon,
  items,
}: {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: JourneyItem[];
}) {
  return (
    <div className="journey-block">
      <div className="journey-block-header">
        <div className="journey-block-icon">
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <p className="section-label">{label}</p>
          <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white sm:text-[2rem]">
            {title}
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>
      </div>

      <div className="journey-track">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.article
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`journey-row ${isLeft ? "journey-row-left" : "journey-row-right"}`}
            >
              <div className="journey-card-shell">
                <div className="journey-card">
                  <p className="journey-card-kicker">{label}</p>
                  <h4 className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                    {item.title}
                  </h4>
                  <p className="journey-card-org">{item.organization}</p>
                  <p className="journey-card-period">{item.period}</p>
                  <p className="journey-card-summary">{item.summary}</p>

                  {item.bullets.length > 0 ? (
                    <div className="journey-card-list">
                      {item.bullets.map((bullet) => (
                        <div key={`${item.id}-${bullet}`} className="journey-card-list-row">
                          <span className="journey-card-list-dot" />
                          <p>{bullet}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="journey-center">
                <motion.div
                  className="journey-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
              </div>

              <div className="journey-spacer" />
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function ProfileCard({ compact = false }: { compact?: boolean }) {
  const HeadingTag = compact ? "h2" : "h1";

  return (
    <div className={compact ? "identity-rail identity-rail-compact" : "identity-rail"}>
      <div className="identity-summary-card">
        <div className={compact ? "grid gap-4 sm:grid-cols-[5.75rem_1fr] sm:items-center" : "grid gap-4"}>
          <div className="identity-avatar-shell">
            <div className="identity-avatar-glow" />
            <div className="identity-avatar-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}${profile.portrait}?v=2`}
                alt={profile.name}
                width={320}
                height={320}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="identity-avatar"
              />
            </div>
          </div>

          <div className={compact ? "identity-name-block sm:text-left" : "identity-name-block"}>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200">{profile.title}</p>
            <HeadingTag className="identity-name text-white">{profile.name}</HeadingTag>
          </div>
        </div>
      </div>

      <div className={compact ? "identity-detail-list sm:grid-cols-2" : "identity-detail-list"}>
        <div className="identity-detail-item">
          <Mail className="h-4 w-4 text-cyan-200" />
          <div>
            <p className="identity-detail-label">Email</p>
            <a href={`mailto:${profile.email}`} className="identity-detail-value">
              {profile.email}
            </a>
          </div>
        </div>
        <div className="identity-detail-item">
          <Phone className="h-4 w-4 text-cyan-200" />
          <div>
            <p className="identity-detail-label">Phone</p>
            <p className="identity-detail-value">{profile.phone}</p>
          </div>
        </div>
        <div className="identity-detail-item">
          <MapPin className="h-4 w-4 text-cyan-200" />
          <div>
            <p className="identity-detail-label">Location</p>
            <p className="identity-detail-value">{profile.location}</p>
          </div>
        </div>
      </div>

      <div className={compact ? "identity-action-row flex-wrap" : "identity-action-row"}>
        <a href={`${BASE}${profile.resume}`} download className="identity-resume-button">
          <Download className="h-4 w-4" />
          Resume
        </a>

        <div className="identity-social-row">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="identity-social-link" aria-label="LinkedIn profile">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="identity-social-link" aria-label="GitHub profile">
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} className="identity-social-link" aria-label="Send email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState(navigation[0]?.href ?? "#about");
  const [featuredProject, ...otherProjects] = projects;

  const experienceJourney: JourneyItem[] = experiences.map((experience, index) => ({
    id: `experience-${index}`,
    title: experience.role,
    organization: experience.company,
    period: experience.period,
    summary: experience.bullets[0] ?? "",
    bullets: experience.bullets.slice(1),
  }));

  const educationJourney: JourneyItem[] = education.map((item, index) => ({
    id: `education-${index}`,
    title: item.detail,
    organization: item.institution,
    period: item.period,
    summary: item.meta,
    bullets: [],
  }));

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const headerOffset = 140;
      const scrollMarker = window.scrollY + headerOffset;

      const currentSection =
        [...sections]
          .reverse()
          .find((section) => section.offsetTop <= scrollMarker) ?? sections[0];

      setActiveSection(`#${currentSection.id}`);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio-scene">
        <div className="ambient-orb ambient-orb-a" />
        <div className="ambient-orb ambient-orb-b" />
        <div className="ambient-orb ambient-orb-c" />
        <div className="hero-grid" />

        <div className="mx-auto w-full max-w-[104rem] px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          <motion.header
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="site-header"
          >
            <div className="header-nav-wrap">
              <SectionNavigation activeSection={activeSection} />
            </div>
          </motion.header>

          <div className="page-shell">
            <motion.aside
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="desktop-rail-wrap order-2 hidden lg:order-none lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-1"
            >
              <ProfileCard />
            </motion.aside>

            <div className="content-shell">
              <main className="content-body">
                <motion.section
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: smoothEase }}
                  className="mobile-intro-shell lg:hidden"
                >
                  <ProfileCard compact />
                </motion.section>

                <motion.section
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="narrative-shell overflow-hidden"
                >
                  <div className="narrative-section grid gap-8 p-6 sm:p-8 xl:grid-cols-[1.2fr_0.8fr] xl:p-10">
                    <div className="space-y-8">
                      <motion.div variants={fadeUp} className="space-y-5">
                        <p className="section-label">Azure AI Engineer</p>
                        <p className="hero-summary max-w-3xl text-slate-300">
                          {profile.heroSummary}
                        </p>
                      </motion.div>

                      <motion.div variants={fadeUp} className="marquee-band">
                        {heroTags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </motion.div>

                      <motion.div variants={stagger} className="space-y-5">
                        <div className="hero-actions">
                          <motion.a
                            variants={fadeUp}
                            href="#projects"
                            className="hero-primary-button"
                          >
                            View selected work
                            <ArrowRight className="h-4 w-4" />
                          </motion.a>
                          <motion.a
                            variants={fadeUp}
                            href={`mailto:${profile.email}`}
                            className="hero-secondary-button"
                          >
                            <Mail className="h-4 w-4" />
                            Reach out
                          </motion.a>
                        </div>

                        <div className="hero-proof-grid">
                          {heroSignals.map((signal, index) => (
                            <motion.article key={signal.title} variants={fadeUp} whileHover={{ y: -4 }} className="hero-proof-card">
                              <p className="hero-proof-index">{String(index + 1).padStart(2, "0")}</p>
                              <p className="hero-proof-value">{signal.value}</p>
                              <p className="text-base font-semibold text-white">{signal.title}</p>
                              <p className="text-sm leading-7 text-slate-300">{signal.description}</p>
                            </motion.article>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div variants={stagger} className="space-y-4">
                      <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="spotlight-panel">
                        <p className="section-label">Current Focus</p>
                        <div className="mt-5 space-y-4">
                          {currentFocus.map((item) => (
                            <div key={item.title} className="space-y-2 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                              <p className="text-base font-semibold text-white">{item.title}</p>
                              <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="spotlight-panel">
                        <p className="section-label">Professional Summary</p>
                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                          <p className="text-base font-semibold text-white">{profile.title}</p>
                          <p>{profile.signature}</p>
                          <div className="space-y-3 border-t border-white/8 pt-4">
                            <p className="font-medium text-slate-200">{profile.availabilityStatus}</p>
                            {highlights.map((item) => (
                              <div key={item} className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                                <p>{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.section>

                <motion.section
                  id="about"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="narrative-shell anchor-section"
                >
                  <div className="narrative-section grid gap-10 p-6 sm:p-8 xl:grid-cols-[0.95fr_1.05fr] xl:p-10">
                    <motion.div variants={fadeUp}>
                      <SectionIntro
                        label="About"
                        title="Reliable AI products, not isolated demos."
                        description={profile.longSummary}
                      />
                    </motion.div>

                    <motion.div variants={stagger} className="space-y-8">
                      <motion.div variants={stagger} className="space-y-5">
                        {principles.map((principle) => (
                          <motion.div key={principle.title} variants={fadeUp} className="principle-row">
                            <p className="text-lg font-semibold text-white">{principle.title}</p>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{principle.description}</p>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div variants={fadeUp} className="focus-grid">
                        {focusAreas.map((area, index) => (
                          <motion.article key={area.title} whileHover={{ y: -4 }} className={`focus-card focus-card-${index + 1}`}>
                            <p className="focus-card-index">0{index + 1}</p>
                            <p className="mt-3 text-lg font-semibold text-white">{area.title}</p>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{area.description}</p>
                          </motion.article>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.section>

                <motion.section
                  id="experience"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="narrative-shell anchor-section"
                >
                  <div className="narrative-section space-y-10 p-6 sm:p-8 xl:p-10">
                    <motion.div variants={fadeUp} className="max-w-4xl">
                      <SectionIntro
                        label="Journey"
                        title="Built through product, backend, and AI delivery."
                        description="My path moved from frontend execution to full-stack development and now to Azure AI systems built for real workflow use." 
                      />
                    </motion.div>

                    <motion.div variants={stagger} className="space-y-10">
                      <JourneyBlock
                        label="Experience"
                        title="Experience"
                        description="Each role expanded scope from interface delivery to backend systems and finally to Azure AI implementation." 
                        icon={BriefcaseBusiness}
                        items={experienceJourney}
                      />

                      <JourneyBlock
                        label="Education"
                        title="Education"
                        description="Formal grounding in artificial intelligence, software engineering, and analytical problem solving."
                        icon={GraduationCap}
                        items={educationJourney}
                      />
                    </motion.div>
                  </div>
                </motion.section>

                <motion.section
                  id="projects"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="narrative-shell anchor-section"
                >
                  <div className="narrative-section space-y-10 p-6 sm:p-8 xl:p-10">
                    <motion.div variants={fadeUp}>
                      <SectionIntro
                        label="Selected Work"
                        title="Selected AI work with measurable impact."
                        description="Each project is framed around a problem, the system I built, and the operational outcome it created."
                      />
                    </motion.div>

                    <motion.article variants={fadeUp} whileHover={{ y: -4 }} className="project-card project-card-featured">
                      <div className="space-y-6">
                        <div>
                          <p className="section-label">Featured Project</p>
                          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                            {featuredProject.title}
                          </h3>
                          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">
                            {featuredProject.subtitle} • {featuredProject.period}
                          </p>
                        </div>

                        <p className="project-summary max-w-3xl text-slate-300">
                          {featuredProject.description}
                        </p>

                        <div className="project-story-grid">
                          <div className="project-story-card">
                            <p className="project-flow-label">Problem</p>
                            <p className="project-flow-value">{featuredProject.problem}</p>
                          </div>
                          <div className="project-story-card">
                            <p className="project-flow-label">Solution</p>
                            <p className="project-flow-value">{featuredProject.solution}</p>
                          </div>
                          <div className="project-story-card project-story-card-impact">
                            <p className="project-flow-label">Impact</p>
                            <p className="project-flow-value">{featuredProject.impact}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="featured-impact">
                          <Cpu className="h-5 w-5 text-cyan-200" />
                          <p>{featuredProject.impact}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {featuredProject.stack.map((item) => (
                            <span key={item} className="stack-chip">
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="project-actions">
                          {featuredProject.href ? (
                            <a
                              href={featuredProject.href}
                              target="_blank"
                              rel="noreferrer"
                              className="project-live-link"
                            >
                              Live preview
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          ) : null}

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
                          >
                            Contact
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </motion.article>

                    <motion.div variants={stagger} className="project-grid">
                      {otherProjects.map((project, index) => {
                        const CardTag = project.href ? motion.a : motion.article;

                        return (
                          <CardTag
                            key={project.title}
                            variants={fadeUp}
                            {...(project.href
                              ? {
                                  href: project.href,
                                  target: "_blank",
                                  rel: "noreferrer",
                                }
                              : {})}
                            className={`project-card group ${projectRowAccents[index % projectRowAccents.length]}`}
                          >
                            <div className="space-y-2">
                              <p className="text-2xl font-semibold tracking-[-0.05em] text-white">{project.title}</p>
                              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                                {project.subtitle} • {project.period}
                              </p>
                            </div>

                            <p className="text-sm leading-7 text-slate-300">{project.description}</p>

                            <div className="project-card-story">
                              <div>
                                <p className="project-flow-label">Problem</p>
                                <p className="project-flow-value">{project.problem}</p>
                              </div>
                              <div>
                                <p className="project-flow-label">Solution</p>
                                <p className="project-flow-value">{project.solution}</p>
                              </div>
                              <div>
                                <p className="project-flow-label">Impact</p>
                                <p className="project-flow-value">{project.impact}</p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((item) => (
                                <span key={item} className="stack-chip stack-chip-sm">
                                  {item}
                                </span>
                              ))}
                            </div>

                            {project.href ? (
                              <div className="project-card-link">
                                <span>View project</span>
                                <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-white" />
                              </div>
                            ) : null}
                          </CardTag>
                        );
                      })}
                    </motion.div>
                  </div>
                </motion.section>

                <motion.section
                  id="skills"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="narrative-shell anchor-section"
                >
                  <div className="narrative-section space-y-10 p-6 sm:p-8 xl:p-10">
                    <motion.div variants={fadeUp}>
                      <SectionIntro
                        label="Capabilities"
                        title="Azure AI, backend systems, and product delivery."
                        description="I work across the full stack so AI workflows land as complete products, not disconnected technical pieces."
                      />
                    </motion.div>

                    <motion.div variants={stagger} className="space-y-4">
                      {skillGroups.map((group) => (
                        <motion.div key={group.title} variants={fadeUp} whileHover={{ y: -3 }} className="skill-band">
                          <div className="skill-band-title">{group.title}</div>
                          <div className="flex flex-wrap gap-2.5">
                            {group.items.map((item) => (
                              <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.section>

                <motion.section
                  id="contact"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className="narrative-shell anchor-section"
                >
                  <div className="narrative-section grid gap-10 p-6 sm:p-8 xl:grid-cols-[0.95fr_1.05fr] xl:p-10">
                    <motion.div variants={fadeUp} className="space-y-8">
                      <SectionIntro
                        label="Contact"
                        title="Open to Azure AI Engineer roles."
                        description={profile.availability}
                      />

                      <div className="contact-stack space-y-3">
                        <a href={`mailto:${profile.email}`} className="contact-row">
                          <span>{profile.email}</span>
                          <Mail className="h-4 w-4" />
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row">
                          <span>LinkedIn</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a href={profile.github} target="_blank" rel="noreferrer" className="contact-row">
                          <span>GitHub</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <div className="contact-row cursor-default">
                          <span>{profile.phone}</span>
                          <Phone className="h-4 w-4" />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={stagger} className="contact-note-grid">
                      <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="spotlight-panel">
                        <div className="flex items-center gap-3">
                          <Link2 className="h-5 w-5 text-cyan-200" />
                          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Profile Summary</p>
                        </div>
                        <div className="contact-summary-list mt-6">
                          <div className="contact-summary-row">
                            <span className="contact-summary-label">Role</span>
                            <p>{profile.title}</p>
                          </div>
                          <div className="contact-summary-row">
                            <span className="contact-summary-label">Location</span>
                            <p>{profile.location}</p>
                          </div>
                          <div className="contact-summary-row">
                            <span className="contact-summary-label">Focus</span>
                            <p>{profile.signature}</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="contact-note-card">
                        <p className="section-label">Availability Snapshot</p>
                        <p className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">{profile.timeframe}</p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{profile.availabilityStatus}</p>
                        <p className="mt-6 text-sm leading-7 text-slate-400">Based in {profile.location}. Open to work where AI capability, backend structure, and user experience need to land as one system.</p>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
