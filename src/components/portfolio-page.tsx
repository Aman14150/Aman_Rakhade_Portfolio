"use client";

import { useEffect, useRef, useState } from "react";

const BASE = (process.env.NEXT_PUBLIC_BASE_PATH ?? "");

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Award,
  Cpu,
  Download,
  FolderGit2,
  Mail,
  Menu,
  X,
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
  badgeCollectionUrl,
  certifications,
  experiences,
  navigation,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

// Long sections must reveal as soon as they enter a small viewport.
const viewport = { once: true, amount: 0.01 };
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
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: smoothEase },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

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
            aria-current={isActive ? "location" : undefined}
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

function JourneyBlock({ items }: { items: JourneyItem[] }) {
  return (
    <div className="journey-block">
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
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                    {item.title}
                  </h3>
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
                  <BriefcaseBusiness className="h-4 w-4" />
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
            <h2 className="identity-name text-white">{profile.name}</h2>
          </div>
        </div>
      </div>

      <div className={compact ? "identity-detail-list sm:grid-cols-2" : "identity-detail-list"}>
        <div className="identity-detail-item">
          <Mail className="h-4 w-4 text-orange-200" />
          <div>
            <p className="identity-detail-label">Email</p>
            <a href={`mailto:${profile.email}`} className="identity-detail-value">
              {profile.email.split("@")[0]}<wbr />@{profile.email.split("@")[1]}
            </a>
          </div>
        </div>
        <div className="identity-detail-item">
          <Phone className="h-4 w-4 text-orange-200" />
          <div>
            <p className="identity-detail-label">Phone</p>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="identity-detail-value">{profile.phone}</a>
          </div>
        </div>
        <div className="identity-detail-item">
          <MapPin className="h-4 w-4 text-orange-200" />
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
  const [activeSection, setActiveSection] = useState("#about");
  const [profileOpen, setProfileOpen] = useState(false);
  const profileToggle = useRef<HTMLButtonElement>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [featuredProject, ...remainingProjects] = projects;
  const otherProjects = showMoreProjects ? remainingProjects : remainingProjects.slice(0, 2);
  const experienceJourney: JourneyItem[] = experiences.map((experience, index) => ({
    id: `experience-${index}`,
    title: experience.role,
    organization: experience.company,
    period: experience.period,
    summary: experience.bullets[0] ?? "",
    bullets: experience.bullets.slice(1),
  }));

  useEffect(() => {
    if (!profileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
        profileToggle.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [profileOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[id]"));
    if (!sections.length) return;
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
      const viewportBottom = window.innerHeight;
      const atBottom = window.scrollY + viewportBottom >= document.documentElement.scrollHeight - 4;
      let currentSection = sections[0];
      let largestVisibleHeight = -1;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, headerBottom));
        if (visibleHeight > largestVisibleHeight) {
          largestVisibleHeight = visibleHeight;
          currentSection = section;
        }
      }
      // Keep a heading aligned beneath the sticky header selected after an anchor jump.
      const alignedSection = sections.find((section) => {
        const top = section.getBoundingClientRect().top;
        return Math.abs(top - headerBottom) <= 32;
      });
      if (alignedSection) currentSection = alignedSection;
      if (window.scrollY <= 4) currentSection = sections[0];
      // Unlisted sections (such as certifications) deliberately clear the nav highlight.
      const sectionHash = `#${atBottom ? sections[sections.length - 1].id : currentSection.id}`;
      setActiveSection(sectionHash);
      if (window.location.hash !== sectionHash) {
        window.history.replaceState(window.history.state, "", sectionHash);
      }
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    const observer = new ResizeObserver(scheduleUpdate);
    sections.forEach((section) => observer.observe(section));
    const header = document.querySelector("header");
    if (header) observer.observe(header);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className={`portfolio-scene ${profileOpen ? "profile-is-open" : ""}`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <aside
          id="profile-sidebar"
          className="profile-drawer"
          aria-label="Profile and contact details"
          hidden={!profileOpen}
        >
          <div className="profile-drawer-toolbar">
            <span>Profile</span>
            <button type="button" onClick={() => { setProfileOpen(false); profileToggle.current?.focus(); }} className="profile-close" aria-label="Close profile">
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <ProfileCard />
        </aside>

        <div className="portfolio-layout mx-auto w-full max-w-[80rem] px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
          <header className="site-header">
            <button
              type="button"
              className="profile-toggle"
              ref={profileToggle}
              aria-label={profileOpen ? "Close profile sidebar" : "Open profile"}
              aria-expanded={profileOpen}
              aria-controls="profile-sidebar"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <Menu size={20} aria-hidden="true" /><span>Profile</span>
            </button>
            <div className="header-nav-wrap"><SectionNavigation activeSection={activeSection} /></div>
          </header>
          <main id="main-content" tabIndex={-1} className="content-body portfolio-main">
            <motion.section id="about" variants={stagger} initial="hidden" animate="show" className="narrative-shell hero-section anchor-section">
              <div className="narrative-section space-y-5 p-6 sm:px-10 sm:py-8">
                <motion.div variants={fadeUp} className="space-y-3">
                  <h1 className="hero-title">{profile.name}</h1>
                  <p className="text-xl font-medium text-orange-200">{profile.title}</p>
                  <p className="hero-summary text-slate-300">{profile.heroSummary}</p>
                </motion.div>
                <motion.div variants={fadeUp} className="hero-actions">
                  <motion.a href="#projects" className="hero-primary-button" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    View projects<ArrowRight className="h-4 w-4" />
                  </motion.a>
                  <a href={`${BASE}${profile.resume}`} download className="hero-secondary-button"><Download className="h-4 w-4" />Resume (PDF)</a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="identity-social-link" aria-label="GitHub profile"><GitHubIcon className="h-5 w-5" /></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="identity-social-link" aria-label="LinkedIn profile"><LinkedinIcon className="h-5 w-5" /></a>
                </motion.div>
              </div>
            </motion.section>

            <motion.section id="projects" variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="narrative-shell anchor-section">
              <div className="narrative-section space-y-8 p-6 sm:p-10">
                <motion.h2 variants={fadeUp} className="section-title text-white">Projects</motion.h2>
                <motion.article variants={fadeUp} className="project-card project-card-featured">
                  <div className="workflow-preview" aria-label="Resume screening workflow"><span>Resume + job description</span><ArrowRight aria-hidden="true" size={18} /><span>Extract + match</span><ArrowRight aria-hidden="true" size={18} /><span>Ranked shortlist</span></div>
                  <div className="space-y-5">
                    <h3 className="text-3xl font-semibold tracking-tight text-white">{featuredProject.title}</h3>
                    <p className="project-period">{featuredProject.subtitle} · {featuredProject.period}</p>
                    <p className="project-summary text-slate-300">{featuredProject.description}</p>
                    <div className="project-story-grid">
                      <div className="project-story-card"><p className="project-flow-label">Problem</p><p className="project-flow-value">{featuredProject.problem}</p></div>
                      <div className="project-story-card"><p className="project-flow-label">What I built</p><p className="project-flow-value">{featuredProject.solution}</p></div>
                      <div className="project-story-card project-story-card-impact"><p className="project-flow-label">Result</p><p className="project-flow-value">{featuredProject.impact}</p></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">{featuredProject.stack.map((item) => <span key={item} className="stack-chip">{item}</span>)}</div>
                  <a href="#contact" className="project-card-link">Discuss this project<ArrowUpRight className="h-4 w-4" /></a>
                </motion.article>
                <motion.div variants={stagger} className="project-grid">
                  {otherProjects.map((project, index) => (
                    <motion.article key={project.title} variants={fadeUp} initial={false} animate="show" className={`project-card group ${projectRowAccents[index % projectRowAccents.length]}`}>
                      {index < 2 && <div className="workflow-preview" aria-label={`${project.title} workflow`}>{(index === 0 ? ["Claims + policies", "Search + analyse", "Grounded summaries"] : ["Incoming fax", "Extract + match", "NextGen + staff review"]).map((step) => <span key={step}>{step}</span>)}</div>}
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                        <p className="project-period">{project.period}</p>
                      </div>
                      <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                      <p className="project-outcome">{project.impact}</p>
                      <details className="project-details">
                        <summary>How it works<span className="sr-only">: {project.title}</span></summary>
                        <div className="project-card-story">
                          <div><p className="project-flow-label">Problem</p><p className="project-flow-value">{project.problem}</p></div>
                          <div><p className="project-flow-label">What I built</p><p className="project-flow-value">{project.solution}</p></div>
                        </div>
                      </details>
                      <div className="flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="stack-chip stack-chip-sm">{item}</span>)}</div>
                      <a href={project.href ?? "#contact"} target={project.href ? "_blank" : undefined} rel={project.href ? "noreferrer" : undefined} className="project-card-link" aria-label={`${project.href ? "View live project" : "Discuss project"}: ${project.title}`}>
                        <span>{project.href ? "View live project" : "Discuss this project"}</span><ArrowUpRight className="h-4 w-4" />
                      </a>
                    </motion.article>
                  ))}
                </motion.div>
                <button type="button" className="hero-secondary-button" aria-expanded={showMoreProjects} onClick={() => setShowMoreProjects(!showMoreProjects)}>{showMoreProjects ? "Show fewer projects" : "More projects"}</button>
              </div>
            </motion.section>

            <motion.section id="experience" variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="narrative-shell anchor-section">
              <div className="narrative-section space-y-8 p-6 sm:p-10">
                <motion.h2 variants={fadeUp} className="section-title text-white">Experience</motion.h2>
                <JourneyBlock items={experienceJourney.slice(0, 2)} />
                <details className="project-details"><summary>Earlier internships</summary><JourneyBlock items={experienceJourney.slice(2)} /></details>
              </div>
            </motion.section>

            <motion.section id="skills" variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="narrative-shell anchor-section">
              <div className="narrative-section space-y-8 p-6 sm:p-10">
                <motion.h2 variants={fadeUp} className="section-title text-white">Skills</motion.h2>
                {skillGroups.map((group) => (
                  <motion.div key={group.title} variants={fadeUp} className="skill-band">
                    <div><h3 className="skill-band-title">{group.title}</h3>{group.note && <p className="mt-2 text-xs leading-5 text-slate-400">{group.note}</p>}</div>
                    <div className="flex flex-wrap gap-2.5">{group.items.map((item) => <span key={item} className="stack-chip">{item}</span>)}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section id="certifications" variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="narrative-shell anchor-section" aria-labelledby="certifications-heading">
              <div className="narrative-section space-y-8 p-6 sm:p-10">
                <motion.h2 id="certifications-heading" variants={fadeUp} className="section-title text-white">Certifications &amp; Badges</motion.h2>
                <div className="project-grid">
                  {certifications.map((credential) => (
                    <motion.article key={credential.title} variants={fadeUp} className="project-card">
                      {credential.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={`${BASE}${credential.image}`} alt={`${credential.title} badge`} width={112} height={112} loading="lazy" decoding="async" className="h-28 w-28 object-contain" />
                      ) : <Award className="h-6 w-6 text-orange-200" aria-hidden="true" />}
                      <h3 className="text-xl font-semibold text-white">{credential.title}</h3>
                      <p className="text-sm text-slate-300">{credential.issuer}</p>
                      <p className="project-period">{credential.type} · {credential.date}</p>
                      {credential.href && (
                        <a href={credential.href} target="_blank" rel="noreferrer" className="project-card-link" aria-label={`View credential: ${credential.title}`}>
                          View credential<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </motion.article>
                  ))}
                </div>
                <a href={badgeCollectionUrl} target="_blank" rel="noreferrer" className="hero-secondary-button">View all badges on Credly<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              </div>
            </motion.section>

            <motion.section id="contact" variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="narrative-shell anchor-section">
              <div className="narrative-section space-y-6 p-6 sm:p-10">
                <motion.h2 variants={fadeUp} className="section-title text-white">Get in touch</motion.h2>
                <p className="text-slate-300">{profile.availability}</p>
                <button type="button" className="hero-secondary-button" onClick={async () => {
                  try { await navigator.clipboard.writeText(profile.email); setCopyStatus("Email copied."); }
                  catch { setCopyStatus("Copy unavailable. Select the email address below to copy it manually."); }
                }}>Copy email</button>
                <p role="status" className="text-sm text-slate-300">{copyStatus}</p>
                <div className="contact-links">
                  <a href={`mailto:${profile.email}`} className="contact-row"><span>{profile.email}</span><Mail className="h-4 w-4" /></a>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-row"><span>{profile.phone}</span><Phone className="h-4 w-4" /></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row"><span>LinkedIn</span><ArrowUpRight className="h-4 w-4" /></a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="contact-row"><span>GitHub</span><ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </MotionConfig>
  );
}
