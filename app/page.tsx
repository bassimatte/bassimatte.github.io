import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Mantice",
    kicker: "The breath behind the drone",
    description:
      "A deep ambient instrument for building slowly evolving drones with FM, subtractive, granular and wavetable synthesis.",
    tags: ["Ambient", "Spatial", "Evolving"],
    accent: "orange",
    image: "/projects/mantice.png",
    imageAlt: "Mantice ambient drone synthesizer interface",
    live: "https://bassimatte.github.io/mantice/",
    code: "https://github.com/bassimatte/mantice",
  },
  {
    number: "02",
    name: "Glorb",
    kicker: "No samples. No loops. Just math.",
    description:
      "An organic sound generator that turns algorithms into strange, tactile audio—from insects and weather to sci-fi, foley and glitch.",
    tags: ["Generative", "Organic", "Playful"],
    accent: "cyan",
    image: "/projects/glorb.png",
    imageAlt: "Glorb organic sound generator interface",
    live: "https://bassimatte.github.io/glorb/",
    code: "https://github.com/bassimatte/glorb",
  },
  {
    number: "03",
    name: "Campana",
    kicker: "An infinite field of bells",
    description:
      "A focused generative bell instrument for resonant, meditative patterns—somewhere between a struck object and an imagined place.",
    tags: ["Bells", "Resonance", "Infinite"],
    accent: "gold",
    image: "/projects/campana.png",
    imageAlt: "Campana generative bell instrument interface",
    live: "https://bassimatte.github.io/campana/",
    code: "https://github.com/bassimatte/campana",
  },
];

const wave = [
  18, 26, 34, 20, 14, 28, 48, 66, 42, 25, 18, 38, 76, 54, 31, 20, 28, 62,
  88, 58, 34, 24, 46, 70, 44, 30, 18, 26, 52, 82, 64, 36, 22, 18, 42, 72,
  92, 68, 38, 20, 30, 56, 78, 48, 26, 18, 36, 66, 84, 52, 32, 22, 42, 74,
  60, 34, 20, 28, 50, 76, 48, 28, 18, 34, 58, 40, 24, 16, 26, 44, 32, 18,
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://bassimatte.github.io/#person",
      name: "Matteo Bassi",
      alternateName: "bassimat",
      url: "https://bassimatte.github.io/",
      sameAs: [
        "https://github.com/bassimatte",
        "https://freesound.org/people/bassimat/",
        "https://t.me/m1285b",
      ],
      email: "bassi.matteo@gmail.com",
      knowsAbout: [
        "Generative audio",
        "Sound design",
        "Field recording",
        "Audio synthesis",
      ],
    },
    ...projects.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.name,
      url: project.live,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web browser",
      isAccessibleForFree: true,
      creator: { "@id": "https://bassimatte.github.io/#person" },
      description: project.description,
    })),
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Matteo Bassi, home">
          <span className="wordmark-mark">MB</span>
          <span className="wordmark-handle">/ bassimat</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#instruments">Instruments</a>
          <a href="#sounds">Sounds</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://github.com/bassimatte" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" aria-hidden="true" />Independent sound maker · Italy</p>
            <h1>Matteo Bassi<span>makes sound from nothing.</span></h1>
            <p className="hero-intro">Generative instruments, field recordings and open experiments for people who listen closely.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#instruments">Explore the instruments <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://freesound.org/people/bassimat/" target="_blank" rel="noreferrer">Listen on Freesound <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="hero-signal" aria-hidden="true">
            <div className="signal-label signal-label-left">INPUT / CURIOSITY</div>
            <div className="signal-bars">
              {wave.map((height, index) => <span key={`${height}-${index}`} style={{ height: `${height}%` }} />)}
            </div>
            <div className="signal-line" />
            <div className="signal-label signal-label-right">OUTPUT / WONDER</div>
          </div>

          <div className="project-index" aria-label="Featured projects">
            <span>THREE INSTRUMENTS</span>
            <ol>
              <li><a href="#mantice"><b>01</b> Mantice</a></li>
              <li><a href="#glorb"><b>02</b> Glorb</a></li>
              <li><a href="#campana"><b>03</b> Campana</a></li>
            </ol>
          </div>
        </section>

        <section className="projects-section" id="instruments">
          <div className="section-heading">
            <p className="section-number">01 — INSTRUMENTS</p>
            <h2>Three ways into sound.</h2>
            <p>Each instrument begins with a different question. All three are free, open source and ready to play in your browser.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.accent}`} id={project.name.toLowerCase()} key={project.name}>
                <a className="project-media" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 840px) 100vw, 50vw" />
                  <span className="project-open" aria-hidden="true">↗</span>
                </a>
                <div className="project-body">
                  <div className="project-title-row">
                    <span className="project-number">{project.number}</span>
                    <div><h3>{project.name}</h3><p className="project-kicker">{project.kicker}</p></div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.name} qualities`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">Play online <span aria-hidden="true">↗</span></a>
                    <a href={project.code} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="sounds-section" id="sounds">
          <div className="sounds-orbit" aria-hidden="true"><span /><span /><span /><i /></div>
          <div className="sounds-copy">
            <p className="section-number">02 — FREESOUND ARCHIVE</p>
            <h2>A public archive of texture.</h2>
            <p>Field recordings, generated sounds and transformed everyday moments—shared for other people to discover, use and reshape.</p>
            <div className="sound-topics" aria-label="Sound archive topics">
              <span>FIELD RECORDING</span><span>AMBIENT</span><span>FOLEY</span><span>GENERATIVE</span><span>GRANULAR</span>
            </div>
            <a className="text-link" href="https://freesound.org/people/bassimat/" target="_blank" rel="noreferrer">Visit bassimat on Freesound <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="section-number">03 — ABOUT</p>
          <div className="about-grid">
            <h2>Curiosity is the<span>instrument.</span></h2>
            <div className="about-copy">
              <p className="about-lead">I’m fascinated by the process of creating something from nothing.</p>
              <p>Generating sound is part experiment, part meditation: a way to slow down, follow unexpected details and make tools that invite other people into the same process.</p>
              <p>The projects here are open, playful and made to be used—not simply observed.</p>
              <div className="about-links">
                <a href="https://github.com/bassimatte" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a href="https://freesound.org/people/bassimat/" target="_blank" rel="noreferrer">Freesound <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-number">04 — CONTACT</p>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2>Say hello.</h2>
              <p>
                Questions, feedback, collaboration—or simply a conversation
                about sound. Write by email or find me on Telegram.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-card contact-email" href="mailto:bassi.matteo@gmail.com">
                <span className="contact-label">Email</span>
                <strong>bassi.matteo@gmail.com</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a className="contact-card contact-telegram" href="https://t.me/m1285b" target="_blank" rel="noreferrer">
                <span className="contact-label">Telegram</span>
                <strong>@m1285b</strong>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div><p className="footer-name">Matteo Bassi <span>/ bassimat</span></p><p>Generative audio · field recordings · open tools</p></div>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
