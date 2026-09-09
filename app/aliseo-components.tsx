const TESTFLIGHT_URL = "https://testflight.apple.com/join/K1fZXjpc";
const ELEKTRONAUTS_URL = "https://www.elektronauts.com/t/beta-aliseo-an-ipad-sample-manager-and-project-backup-tool-for-digitakt-ii/255080";

function HomeArt({ italian = false }: { italian?: boolean }) {
  return (
    <>
      <div className="aliseo-home-grid" />
      <div className="aliseo-terminal aliseo-terminal-left"><span>IPAD</span><b>{italian ? "FILE" : "FILES"}</b><i /><i /></div>
      <div className="aliseo-terminal aliseo-terminal-right"><span>DIGITAKT</span><b>+DRIVE</b><i /><i /></div>
      <div className="aliseo-wind">{Array.from({ length: 7 }, (_, index) => <span key={index} />)}</div>
      <div className="aliseo-grains">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div>
      <div className="aliseo-wave">{Array.from({ length: 22 }, (_, index) => <i key={index} />)}</div>
      <p className="aliseo-art-label">{italian ? "SUONO IN TRANSITO" : "SOUND IN TRANSIT"} / 01</p>
      <p className="aliseo-rec"><span />REC / 24 BIT</p>
    </>
  );
}

export function AliseoHomeSection({ italian = false }: { italian?: boolean }) {
  const href = italian ? "/it/aliseo/" : "/aliseo/";
  const verbs = italian ? ["Prepara", "Trasferisci", "Registra", "Proteggi"] : ["Prepare", "Transfer", "Record", "Protect"];
  return (
    <>
      <link rel="stylesheet" href="/aliseo-home.css" />
      <section className="aliseo-home-section" id="aliseo">
        <div className="aliseo-home-heading">
          <p className="section-number">02 — {italian ? "FLUSSO DI LAVORO" : "SOUND WORKFLOW"}</p>
          <div>
            <p className="aliseo-home-status"><span />{italian ? "APP NATIVA PER IPAD · BETA PUBBLICA" : "NATIVE IPAD APP · PUBLIC BETA"}</p>
            <h2>Aliseo<small>{italian ? "Porta con te i tuoi suoni." : "Carry your sounds across."}</small></h2>
          </div>
        </div>
        <div className="aliseo-home-card">
          <a className="aliseo-home-art" href={href} data-aliseo-action="discover" aria-label={italian ? "Scopri Aliseo" : "Discover Aliseo"}><HomeArt italian={italian} /></a>
          <div className="aliseo-home-copy">
            <p>{italian ? "Uno spazio di lavoro nativo per iPad con cui preparare, trasferire, registrare e proteggere campioni tra iPad e Digitakt II, senza passare dal computer." : "A native iPad workspace for preparing, transferring, recording and protecting samples between iPad and Digitakt II—without returning to a computer."}</p>
            <ol>{verbs.map((verb, index) => <li key={verb}><b>0{index + 1}</b>{verb}</li>)}</ol>
            <div className="aliseo-home-meta"><span>IPADOS 17+</span><span>DIGITAKT II</span></div>
            <a className="aliseo-home-link" href={href} data-aliseo-action="discover">{italian ? "Scopri Aliseo" : "Discover Aliseo"} <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

function FullArt({ italian = false }: { italian?: boolean }) {
  return (
    <div className="aliseo-visual" aria-hidden="true">
      <div className="visual-grid" />
      <div className="terminal terminal-left"><span>IPAD</span><b>{italian ? "FILE" : "FILES"}</b><i /><i /><i /></div>
      <div className="terminal terminal-right"><span>DIGITAKT</span><b>+DRIVE</b><i /><i /><i /></div>
      <div className="wind-field">{Array.from({ length: 7 }, (_, index) => <span key={index} />)}</div>
      <div className="carried-grains">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</div>
      <div className="waveform">{Array.from({ length: 24 }, (_, index) => <i key={index} />)}</div>
      <div className="capture"><span />REC / 24 BIT</div>
      <p className="visual-caption">{italian ? "SUONO IN TRANSITO" : "SOUND IN TRANSIT"} / 01</p>
    </div>
  );
}

function MeterPanel({ italian = false }: { italian?: boolean }) {
  return (
    <div className="meter-panel" aria-hidden="true">
      <div className="meter-top"><span>{italian ? "INGRESSO USB" : "USB INPUT"} / STEREO</span><span>48 kHz · 24 bit</span></div>
      <div className="spectral-lines">{Array.from({ length: 20 }, (_, index) => <i key={index} />)}</div>
      <div className="meter-wave" />
      <div className="meter-readout"><b>−12.4</b><span>dBFS</span><em>● {italian ? "SEGNALE" : "SIGNAL"}</em></div>
    </div>
  );
}

export function AliseoPage({ italian = false }: { italian?: boolean }) {
  const home = italian ? "/it/" : "/";
  const otherLanguage = italian ? "/aliseo/" : "/it/aliseo/";
  const directions = italian ? [
    ["Prepara", "Taglia, normalizza, sfuma, converti in mono, concatena o suddividi i campioni prima di inviarli allo strumento.", "MODIFICA · FORMA · CHOP"],
    ["Trasferisci", "Esplora File su iPad e la +Drive del Digitakt fianco a fianco. Trasferisci campioni, cartelle e selezioni con il trascinamento.", "FILE · TRASFERIMENTO · ORDINE"],
    ["Registra", "Registra l’audio USB stereo del Digitakt direttamente su iPad, con monitoraggio, livelli, avvio sul segnale e pre-roll.", "MONITOR · REGISTRAZIONE · 24 BIT"],
    ["Proteggi", "Salva un progetto Digitakt II insieme ai campioni utilizzati e ripristina il pacchetto completo quando serve.", "BACKUP · RIPRISTINO · PORTA CON TE"],
  ] : [
    ["Prepare", "Trim, normalize, fade, convert to mono, concatenate or chop samples before sending them to the instrument.", "EDIT · SHAPE · CHOP"],
    ["Transfer", "Browse iPad Files and the Digitakt +Drive side by side. Transfer samples, folders and selections with drag and drop.", "FILES · TRANSFER · ORGANISE"],
    ["Record", "Capture the Digitakt’s stereo USB audio directly on iPad, with input monitoring, level meters, signal triggering and pre-roll.", "MONITOR · CAPTURE · 24 BIT"],
    ["Protect", "Back up a Digitakt II project together with its referenced samples, then restore the complete package when needed.", "BACK UP · RESTORE · CARRY"],
  ];

  return (
    <div className="aliseo-page" lang={italian ? "it" : "en"}>
      <link rel="stylesheet" href="/aliseo.css" />
      <a className="skip-link" href="#main">{italian ? "Vai al contenuto" : "Skip to content"}</a>
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href={home} aria-label="Matteo Bassi, home"><span className="wordmark-mark">MB</span><span className="wordmark-handle">/ bassimat</span></a>
        <nav aria-label={italian ? "Navigazione principale" : "Primary navigation"}><a href="#workflow">{italian ? "Flusso" : "Workflow"}</a><a href="#details">{italian ? "Dettagli" : "Details"}</a><a href="#beta">Beta</a></nav>
        <div className="language-switcher" aria-label={italian ? "Selezione lingua" : "Language selection"}>{italian ? <><a href={otherLanguage} lang="en">EN</a><i aria-hidden="true">/</i><a className="active" href="/it/aliseo/" lang="it" aria-current="page">IT</a></> : <><a className="active" href="/aliseo/" lang="en" aria-current="page">EN</a><i aria-hidden="true">/</i><a href={otherLanguage} lang="it">IT</a></>}</div>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" aria-hidden="true" />{italian ? "App nativa per iPad · Beta pubblica" : "Native iPad app · Public beta"}</p>
            <h1>Aliseo<span>{italian ? "Porta con te i tuoi suoni." : "Carry your sounds across."}</span></h1>
            <p className="hero-intro">{italian ? "Uno spazio di lavoro per preparare, trasferire, registrare e proteggere campioni tra iPad e Digitakt II, senza passare dal computer." : "A sound workspace for preparing, transferring, recording and protecting samples between iPad and Digitakt II—without returning to a computer."}</p>
            <div className="hero-actions"><a className="button button-primary" href={TESTFLIGHT_URL} data-aliseo-action="testflight" target="_blank" rel="noreferrer">{italian ? "Partecipa su TestFlight" : "Join on TestFlight"} <span aria-hidden="true">↗</span></a><a className="button button-secondary" href={ELEKTRONAUTS_URL} data-aliseo-action="discussion" target="_blank" rel="noreferrer">{italian ? "Discussione sulla beta" : "Beta discussion"} <span aria-hidden="true">↗</span></a></div>
            <ul className="requirements" aria-label={italian ? "Requisiti" : "Requirements"}><li>iPadOS 17+</li><li>Digitakt II</li><li>USB Audio / MIDI</li></ul>
          </div>
          <FullArt italian={italian} />
        </section>
        <section className="workflow-section" id="workflow">
          <div className="section-heading"><p className="section-number">01 — {italian ? "FLUSSO" : "WORKFLOW"}</p><h2>{italian ? <>Una corrente.<br />Quattro direzioni.</> : <>One current.<br />Four directions.</>}</h2><p>{italian ? "Aliseo trasforma iPad e Digitakt in un unico spazio di lavoro, mantenendo i passaggi pratici vicini al suono." : "Aliseo turns the iPad and Digitakt into one connected workspace, keeping the practical steps close to the sound."}</p></div>
          <div className="workflow-grid">{directions.map(([title, description, tags], index) => <article className={index === 2 ? "accent" : undefined} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><small>{tags}</small></article>)}</div>
        </section>
        <section className="details-section" id="details"><div className="details-copy"><p className="section-number">02 — {italian ? "VICINO AL SUONO" : "CLOSE TO THE SOUND"}</p><h2>{italian ? "Vedi ciò che stai portando." : "See what you are carrying."}</h2><p>{italian ? "Forma d’onda, spettro, posizione di riproduzione, loop e livelli dBFS rendono visibile ogni campione prima del trasferimento. La stessa visione essenziale continua durante la modifica e la registrazione." : "Waveforms, spectrum, playback position, looping and dBFS metering make each sample visible before it moves. The same focused view continues through editing and recording."}</p></div><MeterPanel italian={italian} /></section>
        <section className="beta-section" id="beta"><p className="section-number">03 — {italian ? "BETA PUBBLICA" : "PUBLIC BETA"}</p><div><h2>{italian ? "Per lo spazio tra l’idea e lo strumento." : "Built for the space between ideas and the instrument."}</h2><p>{italian ? "Aliseo è in pieno sviluppo. La beta pubblica è aperta a test accurati su diversi iPad, versioni firmware di Digitakt II e configurazioni USB." : "Aliseo is under active development. The public beta is open for careful testing across different iPads, Digitakt II firmware versions and USB setups."}</p><a className="beta-note" href={TESTFLIGHT_URL} data-aliseo-action="testflight" target="_blank" rel="noreferrer"><span>{italian ? "STATO" : "STATUS"}</span><strong>{italian ? "Beta pubblica disponibile su TestFlight" : "Public TestFlight beta open"} <i aria-hidden="true">↗</i></strong></a><p className="disclaimer">{italian ? "Aliseo è un progetto indipendente e non è affiliato né approvato da Elektron Music Machines. Digitakt è un marchio di Elektron Music Machines MAV AB." : "Aliseo is an independent project and is not affiliated with or endorsed by Elektron Music Machines. Digitakt is a trademark of Elektron Music Machines MAV AB."}</p></div></section>
      </main>
      <footer><div><p className="footer-name">Matteo Bassi <span>/ bassimat</span></p><p>{italian ? "Strumenti sonori indipendenti · disponibili gratuitamente" : "Independent sound tools · available freely"}</p></div><a href={home}>{italian ? "Torna al portfolio" : "Back to the portfolio"} <span aria-hidden="true">↗</span></a></footer>
    </div>
  );
}
