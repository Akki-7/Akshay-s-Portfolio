import React from 'react'
import { profile } from './profile'
import { MotionConfig, motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download } from 'lucide-react'

const Container = ({ children, className="" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const Section = ({ id, title, children, intro }) => (
  <section id={id} className="scroll-mt-24 py-12 sm:py-16">
    <Container>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
          {intro && <p className="text-slate-300 mt-2">{intro}</p>}
        </div>
        <div className="h-1 w-12 rounded-full bg-brand-600" />
      </div>
      {children}
    </Container>
  </section>
)

const Chip = ({ children }) => <span className="chip">{children}</span>

const LinkButton = ({ href, children }) => (
  <a className="btn" target="_blank" rel="noreferrer" href={href}>
    {children} <ExternalLink size={16} />
  </a>
)

const Header = () => (
  <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/5">
    <Container className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-brand-600 flex items-center justify-center font-bold">A</div>
        <div className="leading-tight">
          <div className="font-semibold">{profile.name}</div>
          <div className="text-sm text-slate-400">{profile.title}</div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-4 text-sm">
        <a href="#about" className="hover:text-brand-500">About</a>
        <a href="#skills" className="hover:text-brand-500">Skills</a>
        <a href="#projects" className="hover:text-brand-500">Projects</a>
        <a href="#experience" className="hover:text-brand-500">Experience</a>
        <a href="#education" className="hover:text-brand-500">Education</a>
        <a href="#contact" className="hover:text-brand-500">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
        <a className="btn hidden sm:inline-flex" href="#contact">
          Get in touch
        </a>
      </div>
    </Container>
  </header>
)

const Hero = () => (
  <div className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />
    <Container className="py-16 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            {profile.name}
          </motion.h1>
          <p className="mt-3 text-lg text-slate-300">{profile.title}</p>
          <p className="mt-6 text-slate-300 max-w-prose">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href={`mailto:${profile.email}`}><Mail size={16}/> Email</LinkButton>
            <LinkButton href={`tel:${profile.phone}`}><Phone size={16}/> Call</LinkButton>
            <LinkButton href={profile.linkedin}><Linkedin size={16}/> LinkedIn</LinkButton>
            <a className="btn" href="/Akshay_CV.pdf" download>
              <Download size={16}/> Download CV
            </a>
          </div>
          <div className="mt-4 text-sm text-slate-400 flex items-center gap-2">
            <MapPin size={16}/> {profile.location}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-6"
        >
          <h3 className="font-semibold">Snapshot</h3>
          <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-slate-400">Experience</dt>
              <dd>~3 years</dd>
            </div>
            <div>
              <dt className="text-slate-400">Primary</dt>
              <dd>React Native</dd>
            </div>
            <div>
              <dt className="text-slate-400">Based in</dt>
              <dd>Hyderabad, India</dd>
            </div>
            <div>
              <dt className="text-slate-400">Open to</dt>
              <dd>Mobile Dev Roles</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </Container>
  </div>
)

const Skills = () => (
  <Section id="skills" title="Skills">
    <div className="card p-6">
      <div className="flex flex-wrap gap-2">
        {profile.skills.map((s) => <Chip key={s}>{s}</Chip>)}
      </div>
    </div>
  </Section>
)

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="grid gap-6 sm:grid-cols-2">
      {profile.projects.map((p) => (
        <motion.div key={p.name} initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.35}} className="card p-6 flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-slate-400 text-sm">{p.period}</p>
            </div>
          </div>
          <p className="mt-3 text-slate-300">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.links?.map((l) => (
              <LinkButton key={l.href} href={l.href}>{l.label}</LinkButton>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
)

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="space-y-4">
      {profile.experience.map((e) => (
        <div key={e.company} className="card p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">{e.role} · {e.company}</h3>
              <p className="text-slate-400">{e.location}</p>
            </div>
            <div className="text-sm text-slate-400">{e.period}</div>
          </div>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-300">
            {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </Section>
)

const Education = () => (
  <Section id="education" title="Education">
    <div className="grid gap-4 sm:grid-cols-2">
      {profile.education.map((ed) => (
        <div key={ed.school} className="card p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{ed.school}</h3>
            <span className="text-sm text-slate-400">{ed.date}</span>
          </div>
          <p className="text-slate-300">{ed.degree}</p>
          <p className="text-slate-400 text-sm">{ed.place}</p>
        </div>
      ))}
    </div>
  </Section>
)

const Contact = () => (
  <Section id="contact" title="Contact">
    <div className="card p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <a className="btn justify-center" href={`mailto:${profile.email}`}><Mail size={16}/> {profile.email}</a>
        <a className="btn justify-center" href={`tel:${profile.phone}`}><Phone size={16}/> {profile.phone}</a>
        <a className="btn justify-center" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
      </div>
    </div>
  </Section>
)

const Footer = () => (
  <footer className="py-10 border-t border-white/5">
    <Container className="text-sm text-slate-400 flex flex-wrap items-center justify-between gap-3">
      <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
      <div>Built with React, Vite & Tailwind.</div>
    </Container>
  </footer>
)

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="font-display">
        <Header />
        <Hero />
        <Section id="about" title="About" intro="A quick intro to my background.">
          <div className="card p-6 text-slate-300">{profile.summary}</div>
        </Section>
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </MotionConfig>
  )
}
