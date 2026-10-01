import { useEffect, useRef, useState } from "react";
import profileImage from "./assets/profile.png";
import { LINKS, SKILL_TABS, TICKER, FILTERS, PROJECTS, EXPERIENCE, EDUCATION, CERTS } from "./data.js";

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

const Social = () => {
  const labels = { github: "GitHub", linkedin: "LinkedIn", kaggle: "Kaggle", leetcode: "LeetCode" };
  return (
    <div className="social">
      {['github', 'linkedin', 'kaggle', 'leetcode'].map((k) => (
        <a key={k} href={LINKS[k]} target="_blank" rel="noopener noreferrer">{labels[k]}</a>
      ))}
    </div>
  );
};

function Nav() {
  return (
    <nav>
      <a href="#top" className="logo">rekha.dev</a>
      <ul>
        {["about", "skills", "featured", "projects", "experience", "certifications", "terminal", "contact"].map((s) => (
          <li key={s}><a href={"#" + s}>{s[0].toUpperCase() + s.slice(1)}</a></li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  const [ok, setOk] = useState(true);
  const roles = ["Data analyst", "Data scientist", "ML builder"];
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((x) => (x + 1) % roles.length), 2200); return () => clearInterval(id); }, []);
  return (
    <header id="top" className="hero">
      <div>
        <p className="role" key={i}>{roles[i]}</p>
        <h1>Rekha Sida</h1>
        <p className="lead">I turn messy data into decisions with Python, SQL, Power BI and machine learning. Final-year computer engineering student, open to data roles and internships.</p>
        <a className="btn fill" href="#projects">View projects</a>
        <a className="btn line" href={LINKS.email}>Hire me</a>
        <a
          className="btn line"
          href={LINKS.resume || "/Rekha_Sida_Resume.pdf"}
          download="Rekha_Sida_Resume.pdf"
          aria-label="Download Rekha Sida resume"
        >
          Download Resume
        </a>
        <Social />
      </div>
      <div className="photo">
        <img src={profileImage} alt="Rekha Sida" />
     </div> 
    </header>
  );
}

const Marquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="track">{[...TICKER, ...TICKER, ...TICKER].map((t, i) => <span key={i}>{t}</span>)}</div>
  </div>
);

function About() {
  return (
    <section id="about" className="rv">
      <h2>About</h2>
      <div className="two">
        <div>
          <p>I'm a final-year Computer Engineering student who turns messy data into decisions. I clean it, find the story in it, and ship the result as a dashboard or a live app that people can actually use.</p>
          <p>I found $100K+ in losses hidden in 9,994 retail orders, built a churn model with 79.84% accuracy and deployed it on Streamlit, and used a hypothesis test to show a redesigned landing page should not launch. I also build full-stack AI apps like KrishiMitra+, ExpenseAI and Tripzy.</p>
          <p>I'm looking for a data analyst or data science role where I can work on real business questions.</p>
        </div>
        <div>
          <div className="about-highlight">
            <span>What I bring</span>
            <p>From data cleaning to model deployment, I enjoy turning raw business data into clear, practical decisions.</p>
          </div>
          <div className="facts">
            <div><span>Studying</span><b>B.Tech, Computer Engineering</b></div>
            <div><span>CGPA</span><b>7.90</b></div>
            <div><span>Based in</span><b>Vadodara, India</b></div>
            <div><span>Open to</span><b>Data analyst and data science roles</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const tabs = Object.keys(SKILL_TABS);
  const [tab, setTab] = useState(tabs[0]);
  return (
    <section id="skills" className="rv">
      <h2>Skills</h2>
      <div className="chips" role="tablist">
        {tabs.map((t) => <button key={t} role="tab" aria-selected={t === tab} className={t === tab ? "chip act" : "chip"} onClick={() => setTab(t)}>{t}</button>)}
      </div>
      <div className="tiles">
        {SKILL_TABS[tab].map(([n, d]) => <div className="tile" key={n}><h3>{n}</h3><p>{d}</p></div>)}
      </div>
    </section>
  );
}

const Links = ({ p }) => (
  <div className="links">
    <a href={p.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live demo</a>}
    {(p.more || []).map(([l, u]) => <a key={l} href={u} target="_blank" rel="noopener noreferrer">{l}</a>)}
  </div>
);

function Featured() {
  return (
    <section id="featured" className="rv">
      <h2>Featured projects</h2>
      <div className="feat">
        {PROJECTS.filter((p) => p.featured).map((p) => (
          <article className="card big" key={p.title}>
            <span className="hl">{p.hl}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div>{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            <Links p={p} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [f, setF] = useState("all");
  const list = PROJECTS.filter((p) => f === "all" || p.cat === f);
  return (
    <section id="projects">
      <h2>All projects</h2>
      <div className="chips">
        {FILTERS.map(([k, l]) => <button key={k} className={k === f ? "chip act" : "chip"} onClick={() => setF(k)}>{l}</button>)}
      </div>
      <div className="grid">
        {list.map((p) => (
          <article className="card" key={p.title}>
            <span className="note">{p.note}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div>{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            <Links p={p} />
          </article>
        ))}
      </div>
      <p className="more">More on <a href={LINKS.github + "?tab=repositories"} target="_blank" rel="noopener noreferrer">my GitHub</a>.</p>
    </section>
  );
}

const Timeline = ({ items }) => (
  <div className="tl">
    {items.map((x) => (
      <div className="it" key={x.role || x.title}>
        <h3>{x.role || x.title}</h3>
        <div className="meta">{x.org}{x.when ? " | " + x.when : ""}</div>
        <p>{x.text}</p>
      </div>
    ))}
  </div>
);

const Experience = () => (
  <section id="experience" className="rv">
    <h2>Experience and education</h2>
    <div className="two"><Timeline items={EXPERIENCE} /><Timeline items={EDUCATION} /></div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="rv">
    <h2>Certifications</h2>
    <div className="certs">
      {CERTS.map((c) => (
        <div className="cert" key={c.title}>
          <h3>{c.title}</h3>
          <p>{c.org}{c.year ? " | " + c.year : ""}</p>
          {c.link && <a href={c.link} target="_blank" rel="noopener noreferrer">View credential</a>}
        </div>
      ))}
    </div>
  </section>
);

function Terminal() {
  const cmds = {
    help: () => ["Commands: about, skills, show-projects, contact, github, clear"],
    about: () => ["Rekha Sida, final-year computer engineering student. Data analysis, ML and AI apps."],
    skills: () => Object.entries(SKILL_TABS).map(([k, v]) => k + ": " + v.map((s) => s[0]).join(", ")),
    "show-projects": () => PROJECTS.map((p) => "- " + p.title + " (" + p.note + ")"),
    contact: () => ["Email: " + LINKS.email, "LinkedIn: " + LINKS.linkedin],
    github: () => ["Opening " + LINKS.github],
  };
  const [log, setLog] = useState([{ c: "", o: ["Type help to see commands."] }]);
  const [v, setV] = useState("");
  const box = useRef(null);
  useEffect(() => { if (box.current) box.current.scrollTop = box.current.scrollHeight; }, [log]);
  const run = (e) => {
    e.preventDefault();
    const c = v.trim().toLowerCase();
    setV("");
    if (!c) return;
    if (c === "clear") return setLog([]);
    if (c === "github") window.open(LINKS.github, "_blank", "noopener");
    setLog((l) => [...l, { c, o: cmds[c] ? cmds[c]() : ["Command not found: " + c + ". Type help."] }]);
  };
  return (
    <section id="terminal" className="rv">
      <h2>Terminal</h2>
      <div className="term" onClick={() => document.getElementById("tin").focus()}>
        <div className="out" ref={box} aria-live="polite">
          {log.map((l, i) => (
            <div key={i}>{l.c && <div className="cmd">{">"} {l.c}</div>}{l.o.map((x, j) => <div key={j}>{x}</div>)}</div>
          ))}
        </div>
        <form onSubmit={run} className="inl"><span>{">"}</span><input id="tin" value={v} onChange={(e) => setV(e.target.value)} placeholder="try show-projects" autoComplete="off" spellCheck="false" aria-label="Terminal command" /></form>
      </div>
    </section>
  );
}

const Contact = () => (
  <section id="contact" className="contact rv">
    <h2>Let's work together</h2>
    <p>I'm open to data analyst, data science and internship roles. Email is the quickest way to reach me.</p>
    <a className="mail" href={"mailto:" + LINKS.email}>{LINKS.email}</a>
    <Social />
  </section>
);

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Featured />
        <Projects />
        <Experience />
        <Certifications />
        <Terminal />
        <Contact />
      </main>
      <footer>Designed and built by Rekha Sida</footer>
    </>
  );
}
