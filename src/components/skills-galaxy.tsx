"use client";

import { useState, type CSSProperties } from "react";
import { AppWindow, Cloud, Code2, Database, ScanText, Server } from "lucide-react";
import { skillOrbits } from "@/data/portfolio";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Skill = { name: string; logo?: string; icon?: "scan"; mark?: string };
type Ring = { name: string; logo?: string };

function RingMark({ ring }: { ring: Ring }) {
  return (
    <span className="skills-orbit-mark" aria-hidden="true">
      {ring.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${BASE}${ring.logo}`} alt="" width={28} height={28} loading="lazy" decoding="async" />
      ) : ring.name === "Databases" ? <Database size={22} /> : ring.name === "Backend" ? <Server size={22} /> : <AppWindow size={22} />}
    </span>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <span className="skills-galaxy-logo" aria-hidden="true">
      {skill.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${BASE}${skill.logo}`} alt="" width={32} height={32} loading="lazy" decoding="async" />
      ) : skill.icon === "scan" ? <ScanText size={26} /> : <span className="skills-galaxy-monogram">{skill.mark}</span>}
    </span>
  );
}

type SatelliteProps = { skill: Skill; index: number; count: number; ringIndex: number };

function SkillSatellite({ skill, index, count, ringIndex }: SatelliteProps) {
  const duration = [58, 72, 86][ringIndex];
  const style = { "--orbit-delay": `${-index * duration / count}s` } as CSSProperties;

  return (
    <div className="skills-galaxy-satellite" style={style} tabIndex={0} aria-label={skill.name}>
      <div className="skills-galaxy-satellite-face">
        <SkillIcon skill={skill} />
        <span className="skills-galaxy-satellite-name">{skill.name}</span>
      </div>
    </div>
  );
}

function CloudSatellite({ skill, index, count, ringIndex }: SatelliteProps) {
  const duration = [58, 72, 86][ringIndex];
  const style = { "--orbit-delay": `${-index * duration / count}s` } as CSSProperties;

  return (
    <div className="skills-cloud-satellite" style={style} tabIndex={0} aria-label={skill.name}>
      <SkillIcon skill={skill} />
      <span className="skills-galaxy-satellite-name">{skill.name}</span>
    </div>
  );
}

export function SkillsGalaxy() {
  const [selectedTone, setSelectedTone] = useState("sky");
  const group = skillOrbits.find((orbit) => orbit.tone === selectedTone) ?? skillOrbits[0];

  return (
    <div className="skills-galaxy">
      <div className="skills-galaxy-switcher" role="group" aria-label="Choose skills view" data-active={selectedTone}>
        {[skillOrbits[1], skillOrbits[0]].map((orbit) => (
          <button
            key={orbit.tone}
            type="button"
            className="skills-galaxy-switch"
            aria-pressed={selectedTone === orbit.tone}
            onClick={() => setSelectedTone(orbit.tone)}
          >
            {orbit.tone === "sky" ? <Code2 size={19} aria-hidden="true" /> : <Cloud size={19} aria-hidden="true" />}
            {orbit.tone === "sky" ? "Full-stack development" : "Cloud services"}
          </button>
        ))}
      </div>
      <section className={`skills-galaxy-card skills-galaxy-${group.tone}`} aria-label={`${group.title} skills`}>
          <div className="skills-orbit-headings" aria-label="Orbit groups">
            {group.rings.map((ring, ringIndex) => (
              <div key={ring.name} className={`skills-orbit-heading skills-orbit-heading-${ringIndex}`}>
                <RingMark ring={ring} />
                <span>{ring.name}</span>
              </div>
            ))}
          </div>
          <div className="skills-galaxy-panel" key={group.tone}>
            {group.tone === "cloud" ? (
              <div className="skills-cloud-stage">
                {group.rings.map((ring, ringIndex) => (
                  <div key={ring.name} role="group" aria-label={`${ring.name} services`} className={`skills-cloud-orbit skills-cloud-orbit-${ringIndex}`}>
                    <div className="skills-cloud-ring" aria-hidden="true" />
                    <h4 className="skills-cloud-ring-title"><RingMark ring={ring} />{ring.name}</h4>
                    <div className="skills-cloud-services">
                      {ring.skills.map((skill, index) => (
                        <CloudSatellite key={skill.name} skill={skill} index={index} count={ring.skills.length} ringIndex={ringIndex} />
                      ))}
                    </div>
                  </div>
                ))}
                <div className="skills-cloud-core" aria-hidden="true"><Cloud size={22} /></div>
              </div>
            ) : <div className="skills-stack-stage">
              {group.rings.map((ring, ringIndex) => {
                return (
                  <div key={ring.name} role="group" aria-label={`${ring.name} skills`} className={`skills-stack-orbit skills-stack-orbit-${ringIndex}`}>
                    <h4 className="skills-stack-ring-title"><RingMark ring={ring} />{ring.name}</h4>
                    <div className="skills-galaxy-rotator">
                      {ring.skills.map((skill, index) => (
                        <SkillSatellite
                          key={skill.name}
                          skill={skill}
                          index={index}
                          count={ring.skills.length}
                          ringIndex={ringIndex}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="skills-stack-core" aria-hidden="true">
                <Code2 size={23} />
              </div>
            </div>}
          </div>
      </section>
    </div>
  );
}
