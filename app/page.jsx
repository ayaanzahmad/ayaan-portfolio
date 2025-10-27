"use client";

import React,{ useMemo, useState } from "react";

const PROJECTS = [
  {
    id: "tech-liquidators",
    title: "TechLiquidators Manifest Analyzer",
    subtitle:
      "ETL + Pricing Intelligence: ingest manifests → enrich via APIs → compute ROI + recommended max bid",
    bullets: [
      "Ingest CSV/XLSX manifests; normalize UPC/SKU/qty/condition",
      "Enrich with UPCItemDB + 90‑day eBay sold comps (IQR‑trim outliers)",
      "Fees/shipping/defect knobs → net resale → Recommended Max Bid",
      "Sortable dashboard + CSV export; caching + retry for flaky APIs",
    ],
    tech: ["Python", "Pandas", "Streamlit", "SQLite", "eBay API", "UPCItemDB"],
    impact: "Turned hours of manual pricing into minutes; more consistent bids & margins",
    img: "/projects/tech-liquidators.png",
    links: {
      repo: "https://github.com/ayaan-yourrepo/tech-liquidators",
      demo: "https://your-demo-link.example",
      writeup: "https://your-blog-or-notion.example/tech-liquidators",
    },
    tags: ["Data Pipeline", "ETL", "Analytics"],
  },
  {
    id: "youtube-shorts-pipeline",
    title: "YouTube Shorts Automation Pipeline",
    subtitle:
      "End-to-end content ops: topic → script → clip assembly → captions → upload scheduler",
    bullets: [
      "LLM prompts → script + SEO title/hashtags",
      "Clip trimming, TTS/music overlay, burned-in captions",
      "Retryable job queue; idempotent uploads; progress logging",
    ],
    tech: ["Python", "MoviePy", "FFmpeg", "GCP/AWS (optional)", "YouTube API"],
    impact: "Batched production of shorts; consistent cadence without manual toil",
    img: "/projects/youtube-pipeline.png",
    links: {
      repo: "https://github.com/ayaan-yourrepo/youtube-shorts",
      demo: "https://your-demo-link.example",
      writeup: "https://your-notion.example/youtube-pipeline",
    },
    tags: ["Automation", "APIs", "Media"],
  },
  {
    id: "masjid-app",
    title: "Masjid App (Community Events & Prayer Times)",
    subtitle:
      "Local discovery: mosques near you, programs, sports runs, room booking, notifications",
    bullets: [
      "Geo search + activity feed; age-range event notifications",
      "Basic organizer dashboard; RSVPs and interest signals",
      "Future: social graph + ‘who’s going’ visibility",
    ],
    tech: ["Flutter/React Native", "Supabase/Firebase", "Maps API"],
    impact: "Activates under-served communities with a lightweight, modern UX",
    img: "/projects/masjid-app.png",
    links: {
      repo: "https://github.com/ayaan-yourrepo/masjid-app",
      demo: "https://your-demo-link.example",
      writeup: "https://your-notion.example/masjid-app",
    },
    tags: ["Mobile", "Geo", "Community"],
  },
  {
    id: "veyra",
    title: "Veyra — AI Wardrobe & Styling Assistant",
    subtitle:
      "Closet scan + try-on concepts; overlap CV + LLM for outfit suggestions & social closet sharing",
    bullets: [
      "Prototype: item detection, metadata extraction, outfit graph",
      "Explores multi-shot ‘closet sweep’ vs single-item capture",
      "Cost modeling for inference overlap (accuracy vs spend)",
    ],
    tech: ["Python", "OpenCV", "LLM APIs", "Next.js"],
    impact: "Faster digitization and styling; potential marketplace hooks",
    img: "/projects/veyra.png",
    links: {
      repo: "https://github.com/ayaan-yourrepo/veyra",
      demo: "https://your-demo-link.example",
      writeup: "https://your-notion.example/veyra",
    },
    tags: ["AI", "Computer Vision", "Product"],
  },
  {
    id: "paths",
    title: "Paths — Skills→Role Mapping (Career Pivot Tool)",
    subtitle:
      "Enter skills/degree → get target roles, gaps, and 6‑week learning plan (YC-style MVP)",
    bullets: [
      "Role ontology + skill graph; gap analysis",
      "Auto‑generate micro‑curricula and project prompts",
      "Room for credential upload + verification",
    ],
    tech: ["Next.js", "Postgres", "LLM APIs", "Shadcn UI"],
    impact: "Turns vague transitions into a concrete, stepwise path",
    img: "/projects/paths.png",
    links: {
      repo: "https://github.com/ayaan-yourrepo/paths",
      demo: "https://your-demo-link.example",
      writeup: "https://your-notion.example/paths",
    },
    tags: ["EdTech", "AI", "Career"],
  },
];

const SOCIALS = [
  { label: "Email", href: "mailto:ayaanzahmad@gmail.com" },
  { label: "GitHub", href: "https://github.com/ayaanzahmad" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayaan-ahmad-071673321/" },
  { label: "Resume (PDF)", href: "/Ayaan-Resume.pdf" },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => ["All", ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))], []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return PROJECTS.filter(p => {
      const inTag = activeTag === "All" || p.tags.includes(activeTag);
      const inText = (
        p.title + " " + p.subtitle + " " + p.tech.join(" ") + " " + p.bullets.join(" ")
      ).toLowerCase().includes(q);
      return inTag && inText;
    });
  }, [query, activeTag]);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow" />
            <div>
              <h1 className="text-xl font-semibold">Ayaan Ahmad</h1>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Full‑Stack • Data Pipelines • Automation</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="hover:underline" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              I build lean systems that turn messy data into <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">useful decisions</span>.
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Focused on pipelines, automation, and clean UIs. Recent work includes a manifest analyzer for ROI‑based reselling, a YouTube
              shorts pipeline, and community/product experiments. Fast learner, ship often.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {[
                "Python",
                "Pandas",
                "FastAPI/Flask",
                "React/Next.js",
                "SQL",
                "APIs",
                "Docker",
              ].map((t) => (
                <span key={t} className="rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm">
              <h3 className="text-sm font-medium">Quick Actions</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="hover:underline" href="#projects">View Projects ↓</a>
                </li>
                <li>
                  <a className="hover:underline" href={SOCIALS.find(s=>s.label.includes("Resume"))?.href} target="_blank" rel="noreferrer">Download Resume</a>
                </li>
                <li>
                  <a className="hover:underline" href={SOCIALS.find(s=>s.label==="Email")?.href}>Email Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-6xl px-4 pb-3">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex gap-2 flex-wrap">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  activeTag === t
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-600"
                    : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, features…"
              className="w-full md:w-80 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/70 dark:bg-neutral-900 hover:shadow-lg transition-shadow">
              {p.img && (
                <div className="aspect-video bg-neutral-200/60 dark:bg-neutral-800/60 overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.subtitle}</p>
                <ul className="mt-3 space-y-1 text-sm list-disc list-inside text-neutral-700 dark:text-neutral-300">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-neutral-300 dark:border-neutral-700 px-2 py-0.5 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                {p.impact && (
                  <p className="mt-3 text-sm italic text-neutral-600 dark:text-neutral-400">Impact: {p.impact}</p>
                )}
                <div className="mt-4 flex gap-3 text-sm">
                  {p.links?.repo && (
                    <a href={p.links.repo} target="_blank" rel="noreferrer" className="underline underline-offset-2">Code</a>
                  )}
                  {p.links?.demo && (
                    <a href={p.links.demo} target="_blank" rel="noreferrer" className="underline underline-offset-2">Demo</a>
                  )}
                  {p.links?.writeup && (
                    <a href={p.links.writeup} target="_blank" rel="noreferrer" className="underline underline-offset-2">Write‑up</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {new Date().getFullYear()} Ayaan Ahmad. All rights reserved.</p>
            <div className="flex gap-4">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="hover:underline" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
