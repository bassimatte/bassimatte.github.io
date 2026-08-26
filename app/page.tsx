const projects = [
  {
    number: "01",
    name: "Mantice",
    kicker: "The breath behind the drone",
    description:
      "A deep ambient instrument for building slowly evolving drones with FM, subtractive, granular and wavetable synthesis.",
    tags: ["Ambient", "Spatial", "Evolving"],
    accent: "orange",
    live: "https://bassimatte.github.io/mantice/",
    code: "https://github.com/bassimatte/mantice",
    samples: ["https://cdn.freesound.org/previews/860/860122_15636277-hq.mp3"],
    sampleNames: ["expanding_drone"],
    sampleGainsDb: [0],
  },
  {
    number: "02",
    name: "Glorb",
    kicker: "No samples. No loops. Just math.",
    description:
      "An organic sound generator that turns algorithms into strange, tactile audio—from insects and weather to sci-fi, foley and glitch.",
    tags: ["Generative", "Organic", "Playful"],
    accent: "cyan",
    live: "https://bassimatte.github.io/glorb/",
    code: "https://github.com/bassimatte/glorb",
    samples: [
      "https://cdn.freesound.org/previews/855/855481_15636277-hq.mp3",
      "https://cdn.freesound.org/previews/855/855564_15636277-hq.mp3",
    ],
    sampleNames: ["ui", "insects"],
    sampleGainsDb: [-1.5, -8.4],
  },
  {
    number: "03",
    name: "Campana",
    kicker: "An infinite field of bells",
    description:
      "A focused generative bell instrument for resonant, meditative patterns—somewhere between a struck object and an imagined place.",
    tags: ["Bells", "Resonance", "Infinite"],
    accent: "gold",
    live: "https://bassimatte.github.io/campana/",
    code: "https://github.com/bassimatte/campana",
    samples: ["https://cdn.freesound.org/previews/855/855554_15636277-hq.mp3"],
    sampleNames: ["aurora"],
    sampleGainsDb: [-2.1],
  },
  {
    number: "04",
    name: "Maresono",
    kicker: "The sound of the sea",
    description:
      "A generative sound engine for ocean waves that learns the spectral character of real ocean drums and resynthesizes infinite, never-repeating wave soundscapes.",
    tags: ["Ocean", "Spectral", "Infinite"],
    accent: "teal",
    live: "https://bassimatte.github.io/maresono/",
    code: "https://github.com/bassimatte/maresono",
    samples: ["/audio/maresono-onda-lunga-sample.mp3"],
    sampleNames: ["onda_lunga"],
    sampleGainsDb: [0],
  },
];

const archiveSounds = [
  {
    id: "839053",
    title: "Granular Ambient Landscape in C Major at 120bpm",
    duration: "04:16",
    preview: "https://cdn.freesound.org/previews/839/839053_15636277-hq.mp3",
  },
  {
    id: "861210",
    title: "Ambient Drones, Wind and Chimes Growing into your Mind Soundscape",
    duration: "03:00",
    preview: "https://cdn.freesound.org/previews/861/861210_15636277-hq.mp3",
  },
  {
    id: "845391",
    title: "Drone Like Growling Pad for Dark Ambient",
    duration: "00:30",
    preview: "https://cdn.freesound.org/previews/845/845391_15636277-hq.mp3",
  },
  {
    id: "859546",
    title: "Minimal Vintage Relaxing Meditative Ambient Piano Soundscape in C minor",
    duration: "43:57",
    preview: "https://cdn.freesound.org/previews/859/859546_15636277-hq.mp3",
  },
];

function HeroConstellation() {
  return (
    <div className="hero-constellation">
      <div className="constellation-lines">{Array.from({ length: 15 }, (_, index) => <i key={index} />)}</div>
      <div className="constellation-grains">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div>
    </div>
  );
}

function ProjectArt({ name, number }: { name: string; number: string }) {
  const key = name.toLowerCase();

  return (
    <div className={`project-art art-${key}`} aria-hidden="true">
      <span className="art-number">{number} / 04</span>
      {key === "mantice" && (
        <>
          <div className="mantice-waves"><span /><span /><span /><span /></div>
          <div className="mantice-spectrum">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div>
          <span className="art-caption">DRONE / CONTINUUM</span>
        </>
      )}
      {key === "glorb" && (
        <>
          <div className="glorb-orbits"><span /><span /></div>
          <div className="glorb-core" />
          <div className="glorb-particles">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div>
          <span className="art-caption">PROCEDURE / EMERGENCE</span>
        </>
      )}
      {key === "campana" && (
        <>
          <div className="campana-bell">
            <div className="campana-strike" />
            <div className="campana-rings"><span /><span /><span /><span /><span /><span /></div>
            <div className="campana-core" />
          </div>
          <span className="art-caption">STRIKE / DECAY</span>
        </>
      )}
      {key === "maresono" && (
        <>
          <div className="maresono-horizon" />
          <div className="maresono-waves"><span /><span /><span /><span /><span /></div>
          <span className="art-caption">SPECTRUM / TIDE</span>
        </>
      )}
    </div>
  );
}

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
        "https://wa.me/bassimat",
      ],
      knowsAbout: [
        "Generative instruments",
        "Experimental sound design",
        "Sound transformation",
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
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" aria-hidden="true" />Independent sound maker · Italy</p>
            <h1>Matteo Bassi<span>make sound from nothing.</span></h1>
            <p className="hero-intro">Generative instruments and experimental sound transformation—following the unexpected.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#instruments">Explore the instruments <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://freesound.org/people/bassimat/" target="_blank" rel="noreferrer">Listen on Freesound <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="hero-signal" aria-hidden="true">
            <div className="signal-label signal-label-left">INPUT / CURIOSITY</div>
            <HeroConstellation />
            <div className="signal-label signal-label-right">OUTPUT / WONDER</div>
          </div>

          <div className="project-index" aria-label="Featured projects">
            <span>FOUR INSTRUMENTS</span>
            <ol>
              <li><a href="#mantice"><b>01</b> Mantice</a></li>
              <li><a href="#glorb"><b>02</b> Glorb</a></li>
              <li><a href="#campana"><b>03</b> Campana</a></li>
              <li><a href="#maresono"><b>04</b> Maresono</a></li>
            </ol>
          </div>
        </section>

        <section className="projects-section" id="instruments">
          <div className="section-heading">
            <p className="section-number">01 — INSTRUMENTS</p>
            <h2>Four ways into sound.</h2>
            <p>Each instrument begins with a different question. All four are free, open source and ready to play in your browser.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.accent}`} id={project.name.toLowerCase()} key={project.name}>
                <a className="project-media" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                  <ProjectArt name={project.name} number={project.number} />
                </a>
                <div className="project-body">
                  <div className="project-title-row">
                    <span className="project-number">{project.number}</span>
                    <div><h3><a href={project.live} target="_blank" rel="noreferrer">{project.name}</a></h3><p className="project-kicker">{project.kicker}</p></div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.name} qualities`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="project-links">
                    <button
                      className="sample-link"
                      type="button"
                      data-sample-project={project.name.toLowerCase()}
                      data-samples={project.samples.join("|")}
                      data-sample-names={project.sampleNames.join("|")}
                      data-sample-gains-db={project.sampleGainsDb.join("|")}
                      aria-label={`Play ${project.name} sample`}
                      aria-pressed="false"
                    ><span className="sample-icon" aria-hidden="true">▶</span> Sample</button>
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
            <div className="archive-list" aria-label="Selected sounds from the archive">
              {archiveSounds.map((sound) => (
                <div className="archive-item" key={sound.id}>
                  <button
                    className="archive-play"
                    type="button"
                    data-sample-project="archive"
                    data-sample-label={sound.title}
                    data-samples={sound.preview}
                    data-sample-names={sound.id}
                    aria-label={`Play ${sound.title}`}
                    aria-pressed="false"
                  ><span className="sample-icon" aria-hidden="true">▶</span></button>
                  <strong>{sound.title}</strong>
                  <span className="archive-duration">{sound.duration}</span>
                  <a href={`https://freesound.org/people/bassimat/sounds/${sound.id}/`} target="_blank" rel="noreferrer">Freesound <span aria-hidden="true">↗</span></a>
                </div>
              ))}
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
                about sound. Write by email, Telegram or WhatsApp.
              </p>
            </div>
            <div className="contact-actions">
              <button className="contact-card contact-email" type="button" data-email-link="YmFzc2kubWF0dGVvQGdtYWlsLmNvbQ==" aria-label="Send Matteo Bassi an email">
                <span className="contact-label">Email</span>
                <strong>Send an email</strong>
                <i aria-hidden="true">↗</i>
              </button>
              <a className="contact-card contact-telegram" href="https://t.me/m1285b" target="_blank" rel="noreferrer">
                <span className="contact-label">Telegram</span>
                <strong>@m1285b</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a className="contact-card contact-whatsapp" href="https://wa.me/bassimat" target="_blank" rel="noreferrer">
                <span className="contact-label">WhatsApp</span>
                <strong>@bassimat</strong>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div><p className="footer-name">Matteo Bassi <span>/ bassimat</span></p><p>Generative instruments · sound transformation · open tools</p></div>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script dangerouslySetInnerHTML={{ __html: `(function(){var b=document.querySelector('[data-email-link]');if(!b)return;b.addEventListener('click',function(){window.location.href='mailto:'+atob(b.getAttribute('data-email-link'));});})();` }} />
    </>
  );
}
