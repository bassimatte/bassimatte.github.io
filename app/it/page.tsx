const projects = [
  {
    number: "01",
    name: "Mantice",
    kicker: "Il respiro dentro il drone",
    description:
      "Uno strumento ambient profondo per costruire droni in lenta evoluzione con sintesi FM, sottrattiva, granulare e wavetable.",
    tags: ["Ambient", "Spaziale", "In evoluzione"],
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
    kicker: "Niente campioni. Niente loop. Solo matematica.",
    description:
      "Un generatore sonoro organico che trasforma gli algoritmi in suoni strani e tattili: dagli insetti ai fenomeni atmosferici, fino alla fantascienza, al foley e ai glitch.",
    tags: ["Generativo", "Organico", "Giocoso"],
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
    kicker: "Un campo infinito di campane",
    description:
      "Uno strumento generativo dedicato alle campane e a figure risonanti e meditative, sospese tra un oggetto percosso e un luogo immaginato.",
    tags: ["Campane", "Risonanza", "Infinito"],
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
    kicker: "Il suono del mare",
    description:
      "Un motore sonoro generativo per le onde del mare: apprende il carattere spettrale di veri ocean drum e risintetizza paesaggi sonori di onde, infiniti e mai uguali.",
    tags: ["Oceano", "Spettrale", "Infinito"],
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
    title: "Paesaggio ambient granulare in Do maggiore a 120 BPM",
    duration: "04:16",
    preview: "https://cdn.freesound.org/previews/839/839053_15636277-hq.mp3",
  },
  {
    id: "861210",
    title: "Droni ambient, vento e campane che si espandono nella mente",
    duration: "03:00",
    preview: "https://cdn.freesound.org/previews/861/861210_15636277-hq.mp3",
  },
  {
    id: "845391",
    title: "Pad simile a un drone ringhiante per dark ambient",
    duration: "00:30",
    preview: "https://cdn.freesound.org/previews/845/845391_15636277-hq.mp3",
  },
  {
    id: "859546",
    title: "Paesaggio sonoro minimale di pianoforte vintage in Do minore",
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
          <span className="art-caption">DRONE / CONTINUO</span>
        </>
      )}
      {key === "glorb" && (
        <>
          <div className="glorb-orbits"><span /><span /></div>
          <div className="glorb-core" />
          <div className="glorb-particles">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div>
          <span className="art-caption">PROCESSO / EMERSIONE</span>
        </>
      )}
      {key === "campana" && (
        <>
          <div className="campana-bell">
            <div className="campana-strike" />
            <div className="campana-rings"><span /><span /><span /><span /><span /><span /></div>
            <div className="campana-core" />
          </div>
          <span className="art-caption">PERCUSSIONE / DECADIMENTO</span>
        </>
      )}
      {key === "maresono" && (
        <>
          <div className="maresono-horizon" />
          <div className="maresono-waves"><span /><span /><span /><span /><span /></div>
          <span className="art-caption">SPETTRO / MAREA</span>
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
        "Strumenti generativi",
        "Sound design sperimentale",
        "Trasformazione sonora",
        "Sintesi audio",
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

export default function HomeItaliano() {
  return (
    <div lang="it">
      <a className="skip-link" href="#main">Vai al contenuto</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Matteo Bassi, pagina iniziale">
          <span className="wordmark-mark">MB</span>
          <span className="wordmark-handle">/ bassimat</span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#instruments">Strumenti</a>
          <a href="#sounds">Suoni</a>
          <a href="#about">Chi sono</a>
          <a href="#contact">Contatti</a>
        </nav>
        <div className="language-switcher" aria-label="Selezione lingua"><a href="/" lang="en">EN</a><i aria-hidden="true">/</i><a className="active" href="/it/" lang="it" aria-current="page">IT</a></div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" aria-hidden="true" />Autore e sperimentatore sonoro · Italia</p>
            <h1>Matteo Bassi<span>suoni dal nulla.</span></h1>
            <p className="hero-intro">Strumenti generativi e sperimentazione sonora, seguendo l’inaspettato.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#instruments">Esplora gli strumenti <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://freesound.org/people/bassimat/" target="_blank" rel="noreferrer">Ascolta su Freesound <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="hero-signal" aria-hidden="true">
            <div className="signal-label signal-label-left">INGRESSO / CURIOSITÀ</div>
            <HeroConstellation />
            <div className="signal-label signal-label-right">USCITA / MERAVIGLIA</div>
          </div>

          <div className="project-index" aria-label="Progetti in evidenza">
            <span>QUATTRO STRUMENTI</span>
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
            <p className="section-number">01 — STRUMENTI</p>
            <h2>Quattro vie attraverso il suono.</h2>
            <p>Ogni strumento nasce da una domanda diversa. Tutti e quattro sono gratuiti, open source e pronti da suonare nel browser.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.accent}`} id={project.name.toLowerCase()} key={project.name}>
                <a className="project-media" href={project.live} target="_blank" rel="noreferrer" aria-label={`Apri ${project.name}`}>
                  <ProjectArt name={project.name} number={project.number} />
                </a>
                <div className="project-body">
                  <div className="project-title-row">
                    <span className="project-number">{project.number}</span>
                    <div><h3><a href={project.live} target="_blank" rel="noreferrer">{project.name}</a></h3><p className="project-kicker">{project.kicker}</p></div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label={`Qualità di ${project.name}`}>
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
                      aria-label={`Ascolta un esempio di ${project.name}`}
                      aria-pressed="false"
                    ><span className="sample-icon" aria-hidden="true">▶</span> Ascolta</button>
                    <a href={project.live} target="_blank" rel="noreferrer">Suona online <span aria-hidden="true">↗</span></a>
                    <a href={project.code} target="_blank" rel="noreferrer">Codice sorgente <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="sounds-section" id="sounds">
          <div className="sounds-orbit" aria-hidden="true"><span /><span /><span /><i /></div>
          <div className="sounds-copy">
            <p className="section-number">02 — ARCHIVIO FREESOUND</p>
            <h2>Un archivio aperto di texture sonore.</h2>
            <p>Registrazioni sul campo, suoni generati e frammenti del quotidiano trasformati — condivisi perché altri possano scoprirli, usarli e trasformarli ancora.</p>
            <div className="sound-topics" aria-label="Temi dell’archivio sonoro">
              <span>REGISTRAZIONI</span><span>AMBIENT</span><span>FOLEY</span><span>GENERATIVO</span><span>GRANULARE</span>
            </div>
            <div className="archive-list" aria-label="Suoni scelti dall’archivio">
              {archiveSounds.map((sound) => (
                <div className="archive-item" key={sound.id}>
                  <button
                    className="archive-play"
                    type="button"
                    data-sample-project="archive"
                    data-sample-label={sound.title}
                    data-samples={sound.preview}
                    data-sample-names={sound.id}
                    aria-label={`Ascolta ${sound.title}`}
                    aria-pressed="false"
                  ><span className="sample-icon" aria-hidden="true">▶</span></button>
                  <strong>{sound.title}</strong>
                  <span className="archive-duration">{sound.duration}</span>
                  <a href={`https://freesound.org/people/bassimat/sounds/${sound.id}/`} target="_blank" rel="noreferrer">Freesound <span aria-hidden="true">↗</span></a>
                </div>
              ))}
            </div>
            <a className="text-link" href="https://freesound.org/people/bassimat/" target="_blank" rel="noreferrer">Visita bassimat su Freesound <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="section-number">03 — CHI SONO</p>
          <div className="about-grid">
            <h2>La curiosità è lo<span>strumento.</span></h2>
            <div className="about-copy">
              <p className="about-lead">Mi affascina creare qualcosa dal nulla.</p>
              <p>Generare suoni è in parte esperimento, in parte meditazione: un modo per rallentare, seguire i dettagli inattesi e creare strumenti che invitino altre persone a entrare nello stesso processo.</p>
              <p>I progetti raccolti qui sono aperti, giocosi e fatti per essere usati, non semplicemente osservati.</p>
              <div className="about-links">
                <a href="https://github.com/bassimatte" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a href="https://freesound.org/people/bassimat/" target="_blank" rel="noreferrer">Freesound <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-number">04 — CONTATTI</p>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2>Scrivimi.</h2>
              <p>
                Domande, feedback, collaborazioni — o semplicemente una conversazione
                sul suono. Puoi contattarmi via email, Telegram o WhatsApp.
              </p>
            </div>
            <div className="contact-actions">
              <button className="contact-card contact-email" type="button" data-email-link="YmFzc2kubWF0dGVvQGdtYWlsLmNvbQ==" aria-label="Invia un’email a Matteo Bassi">
                <span className="contact-label">Email</span>
                <strong>Invia un’email</strong>
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
        <div><p className="footer-name">Matteo Bassi <span>/ bassimat</span></p><p>Strumenti generativi · trasformazione sonora · strumenti open source</p></div>
        <a href="#top">Torna su <span aria-hidden="true">↑</span></a>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='it';` }} />
      <script dangerouslySetInnerHTML={{ __html: `(function(){var b=document.querySelector('[data-email-link]');if(!b)return;b.addEventListener('click',function(){window.location.href='mailto:'+atob(b.getAttribute('data-email-link'));});})();` }} />
    </div>
  );
}
