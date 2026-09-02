import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sostieni Bassimat — Mantieni Online Strumenti Sonori Indipendenti",
  description: "Aiuta a coprire i costi di Mantice e degli altri strumenti sonori gratuiti e open source di Matteo Bassi.",
  alternates: {
    canonical: "/it/support/",
    languages: { en: "/support/", it: "/it/support/", "x-default": "/support/" },
  },
  openGraph: {
    title: "Sostieni Bassimat",
    description: "Aiuta a mantenere online strumenti sonori indipendenti, gratuiti e senza pubblicità.",
    url: "/it/support/",
  },
};

const principles = [
  ["Gratuito, sempre", "Il sostegno non sblocca funzioni e non cambia ciò che le altre persone possono usare."],
  ["Senza pubblicità", "Gli strumenti restano spazi dedicati all’ascolto, alla sperimentazione e al sound design."],
  ["Infrastruttura reale", "I contributi aiutano a pagare i server che sintetizzano, trasmettono e renderizzano l’audio online."],
];

const supportOptions = [
  { label: "€3", href: "https://www.paypal.com/ncp/payment/XBB3GTVW4A4HJ" },
  { label: "€5", href: "https://www.paypal.com/ncp/payment/MG75SFMPNTJ2N", recommended: true },
  { label: "€10", href: "https://www.paypal.com/ncp/payment/2G57DWHR2MTXN" },
  { label: "€20", href: "https://www.paypal.com/ncp/payment/S25UZZ2UC3JZQ" },
  { label: "Altro", href: "https://www.paypal.com/ncp/payment/LXKTGLVEJRMR8", custom: true },
];

export default function SupportPageItaliano() {
  return (
    <div lang="it">
      <a className="skip-link" href="#main">Vai al contenuto</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="/it/" aria-label="Matteo Bassi, pagina iniziale">
          <span className="wordmark-mark">MB</span>
          <span className="wordmark-handle">/ bassimat</span>
        </a>
        <nav aria-label="Navigazione sostegno">
          <a href="/it/#instruments">Strumenti</a>
          <a href="/it/#about">Chi sono</a>
          <a href="/it/#contact">Contatti</a>
        </nav>
        <div className="language-switcher" aria-label="Selezione lingua"><a href="/support/" lang="en">EN</a><i aria-hidden="true">/</i><a className="active" href="/it/support/" lang="it" aria-current="page">IT</a></div>
      </header>

      <main className="support-page" id="main">
        <section className="support-hero">
          <p className="eyebrow"><span className="signal-dot" aria-hidden="true" />Indipendente · gratuito · open source</p>
          <h1>Aiuta il suono a restare<span>vivo e online.</span></h1>
          <p className="support-lead">Tutti gli strumenti sono gratuiti, open source e realizzati senza pubblicità. I loro motori audio online comportano comunque costi reali di hosting. Se ti piace usarli, considera la possibilità di contribuire ai loro costi di hosting.</p>
          <div className="support-payment" aria-labelledby="support-amount-title">
            <p className="support-payment-label" id="support-amount-title">Scegli un importo una tantum</p>
            <div className="support-amounts">
              {supportOptions.map(option => (
                <a
                  className={`support-amount-option${option.recommended ? " recommended" : ""}${option.custom ? " custom" : ""}`}
                  href={option.href}
                  key={option.label}
                  target="_blank"
                  rel="noreferrer"
                  data-support-checkout="paypal"
                  aria-label={`Sostegno di ${option.label} tramite PayPal; apre il pagamento sicuro in una nuova scheda`}
                >
                  <strong>{option.label}</strong>
                  {option.recommended && <span>Consigliato</span>}
                </a>
              ))}
            </div>
            <p className="support-provider-note">Il pagamento sicuro è gestito da PayPal. PayPal, carte e wallet compatibili vengono proposti in base al dispositivo e al Paese. Bassimat non riceve mai i tuoi dati di pagamento.</p>
          </div>
          <div className="support-actions"><a className="button button-secondary" href="/it/#instruments">Esplora gli strumenti <span aria-hidden="true">←</span></a></div>
        </section>

        <section className="support-principles" aria-labelledby="support-principles-title">
          <div className="support-heading">
            <p className="section-number">COME FUNZIONA</p>
            <h2 id="support-principles-title">Contribuire senza escludere.</h2>
          </div>
          <div className="support-principle-grid">
            {principles.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="support-costs" aria-labelledby="support-costs-title">
          <p className="section-number">COSA SOSTIENI</p>
          <div>
            <h2 id="support-costs-title">I server trasformano i parametri in suono.</h2>
            <p>Quando una persona ascolta un drone, prova una texture o scarica un render, un motore di sintesi remoto crea quell’audio. I contributi servono a mantenere disponibili questi motori e a sviluppare gli strumenti che li circondano.</p>
            <p>È un sostegno volontario, non un acquisto. Ogni strumento resta completamente utilizzabile anche senza contribuire.</p>
          </div>
        </section>
      </main>

      <footer>
        <div><p className="footer-name">Matteo Bassi <span>/ bassimat</span></p><p>Strumenti sonori indipendenti · disponibili gratuitamente</p></div>
        <div className="footer-links"><a href="/it/">Home</a><a href="/it/#contact">Contatti</a></div>
      </footer>

    </div>
  );
}
