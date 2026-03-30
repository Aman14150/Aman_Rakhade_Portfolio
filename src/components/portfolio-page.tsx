"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
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
  stats,
} from "@/data/portfolio";

const viewport = { once: true, amount: 0.2 };
const smoothEase = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: smoothEase },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

function SectionHeader({
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
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[2.85rem]">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-300">
      {children}
    </span>
  );
}

export function PortfolioPage() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <div className="relative overflow-x-clip">
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-12 lg:pb-24">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="glass-panel sticky top-4 z-30 mb-8 rounded-[1.75rem] px-4 py-4 sm:px-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-slate-200">
                  ARR
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                  AI Engineer Portfolio
                </p>
              </div>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10 lg:hidden"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            <nav className="flex flex-wrap gap-2 text-xs text-slate-300 sm:text-sm lg:justify-center">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 transition hover:border-cyan-300/30 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={profile.resume}
              download
              className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10 lg:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </motion.header>

        <main className="space-y-10 lg:space-y-14">
          <section className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="glass-panel-strong panel-glow relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="absolute right-[-5rem] top-12 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" />
                Currently building as an AI engineer
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <p className="font-mono text-sm uppercase tracking-[0.34em] text-slate-500">
                    {profile.location}
                  </p>
                  <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[0.94]">
                    Engineering AI-driven software that feels sharp, usable, and production-ready.
                  </h1>
                </div>

                <p className="text-balance max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  {profile.heroSummary}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {heroTags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-100"
                  >
                    Explore projects
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4" />
                    Start a conversation
                  </a>
                </div>
              </motion.div>

              <motion.div variants={stagger} className="mt-10 grid gap-4 lg:grid-cols-3">
                {focusAreas.map((area) => (
                  <motion.div
                    key={area.title}
                    variants={fadeUp}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="text-sm font-semibold text-white">{area.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {area.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
              <motion.div variants={fadeUp} className="glass-panel rounded-[2rem] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="section-label">Overview</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
                      {profile.name}
                    </h2>
                    <p className="mt-3 text-sm uppercase tracking-[0.28em] text-cyan-100">
                      {profile.title} / {profile.timeframe}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/8 p-3 text-cyan-200">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
                  {profile.longSummary}
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-center gap-3 rounded-[1.2rem] border border-white/8 bg-slate-950/35 px-4 py-3 text-sm text-slate-300">
                    <MapPin className="h-4 w-4 text-cyan-200" />
                    {profile.location}
                  </div>
                  <div className="flex items-center gap-3 rounded-[1.2rem] border border-white/8 bg-slate-950/35 px-4 py-3 text-sm text-slate-300">
                    <Mail className="h-4 w-4 text-cyan-200" />
                    {profile.email}
                  </div>
                  <div className="flex items-center gap-3 rounded-[1.2rem] border border-white/8 bg-slate-950/35 px-4 py-3 text-sm text-slate-300">
                    <Phone className="h-4 w-4 text-cyan-200" />
                    {profile.phone}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-panel rounded-[2rem] p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="section-label">Signals</p>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-emerald-100">
                    Active
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.35rem] border border-white/8 bg-slate-950/40 p-4"
                    >
                      <p className="text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-panel rounded-[2rem] p-6 sm:p-7">
                <p className="section-label">Highlights</p>
                <div className="mt-5 space-y-4">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          <motion.section
            id="about"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]"
          >
            <motion.div variants={fadeUp} className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <SectionHeader
                label="About"
                title="Building intelligent software with product judgment, not just technical output."
                description="My work sits at the intersection of AI capability, backend reliability, and interface quality. I care about whether a system is useful, maintainable, and clear to the people using it."
              />
            </motion.div>

            <motion.div variants={stagger} className="grid gap-5 md:grid-cols-3">
              {currentFocus.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="glass-panel rounded-[1.75rem] p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-100">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-5 lg:grid-cols-3"
          >
            {principles.map((principle) => (
              <motion.article
                key={principle.title}
                variants={fadeUp}
                className="glass-panel rounded-[1.75rem] p-6"
              >
                <p className="section-label">Principle</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </motion.section>

          <motion.section
            id="experience"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-6"
          >
            <SectionHeader
              label="Experience"
              title="A progression from web execution into applied AI engineering."
              description="The path runs through frontend delivery, MERN work, backend APIs, and now AI-centric systems where product polish and technical structure need to coexist."
            />

            <div className="grid gap-5">
              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  variants={fadeUp}
                  className="glass-panel rounded-[1.9rem] p-6 sm:p-7"
                >
                  <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                    <div className="relative">
                      <div className="absolute bottom-0 left-4 top-11 hidden w-px bg-white/10 lg:block" />
                      <div className="flex items-center gap-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
                          {experience.period}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                            {experience.role}
                          </h3>
                          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200">
                          <BriefcaseBusiness className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3 md:grid-cols-3">
                        {experience.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="rounded-[1.2rem] border border-white/8 bg-slate-950/35 px-4 py-4"
                          >
                            <p className="text-sm leading-7 text-slate-300">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="projects"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-6"
          >
            <SectionHeader
              label="Projects"
              title="Selected builds across AI systems, healthcare software, and team operations."
              description="Each project reflects a different engineering mode: AI workflow design, maintainable backend architecture, or collaborative full-stack execution."
            />

            <motion.article
              variants={fadeUp}
              className="glass-panel-strong panel-glow overflow-hidden rounded-[2rem] p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="section-label">Featured project</p>
                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-500">
                    {featuredProject.subtitle} / {featuredProject.period}
                  </p>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    {featuredProject.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {featuredProject.stack.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5 rounded-[1.7rem] border border-cyan-300/15 bg-cyan-300/[0.05] p-6">
                  <div>
                    <p className="section-label">Project impact</p>
                    <p className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-cyan-50">
                      {featuredProject.impact}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm leading-7 text-slate-300">
                    <p>
                      This project demonstrates your AI profile most clearly because it combines retrieval, multilingual access, real-time interaction, and direct user value.
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-cyan-100 transition hover:text-white"
                    >
                      Discuss similar work
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-5 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className="glass-panel group rounded-[1.8rem] p-6 transition duration-300 hover:border-cyan-300/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
                        {project.period}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">{project.subtitle}</p>
                    </div>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 transition group-hover:border-cyan-300/30 group-hover:text-cyan-100"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-6 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-6 rounded-[1.3rem] border border-cyan-300/14 bg-cyan-300/[0.05] px-4 py-3 text-sm text-cyan-100">
                    {project.impact}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="skills"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-6"
          >
            <SectionHeader
              label="Skills"
              title="A toolkit shaped for modern software and AI delivery."
              description="The stack spans applied machine learning, interface engineering, backend systems, and the tooling required to ship product-quality work end to end."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <motion.article
                  key={group.title}
                  variants={fadeUp}
                  className="glass-panel rounded-[1.75rem] p-6"
                >
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              id="contact"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="glass-panel rounded-[2rem] p-6 sm:p-8"
            >
              <SectionHeader
                label="Contact"
                title="Open to serious work in AI products and intelligent software."
                description={profile.availability}
              />

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-between rounded-[1.3rem] border border-white/8 bg-slate-950/40 px-4 py-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                >
                  <span>{profile.email}</span>
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.3rem] border border-white/8 bg-slate-950/40 px-4 py-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.3rem] border border-white/8 bg-slate-950/40 px-4 py-4 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="flex items-center justify-between gap-3 rounded-[1.3rem] border border-white/8 bg-slate-950/40 px-4 py-4 text-sm text-slate-300">
                  <span>{profile.phone}</span>
                  <Phone className="h-4 w-4 text-cyan-200" />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="space-y-5"
            >
              <motion.div variants={fadeUp} className="glass-panel rounded-[2rem] p-6 sm:p-8">
                <div className="flex items-center gap-3 text-cyan-200">
                  <GraduationCap className="h-5 w-5" />
                  <p className="section-label">Education</p>
                </div>
                <div className="mt-6 space-y-4">
                  {education.map((item) => (
                    <div
                      key={item.institution}
                      className="rounded-[1.35rem] border border-white/8 bg-slate-950/35 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-white">
                          {item.institution}
                        </h3>
                        <p className="font-mono text-xs uppercase tracking-[0.26em] text-slate-500">
                          {item.period}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                      <p className="mt-1 text-sm text-cyan-100">{item.meta}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-panel-strong rounded-[2rem] p-6 sm:p-8">
                <div className="flex items-center gap-3 text-cyan-200">
                  <Sparkles className="h-5 w-5" />
                  <p className="section-label">Final note</p>
                </div>
                <p className="mt-6 max-w-2xl text-balance text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                  I aim to build software that feels considered from system design to final interaction.
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  The site is structured for ongoing iteration, so when you want to add actual company details, more projects, deployment links, or achievement metrics, the content layer is already ready for it.
                </p>
              </motion.div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}