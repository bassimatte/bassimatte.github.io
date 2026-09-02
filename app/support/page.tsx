import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Bassimat — Keep Independent Sound Tools Online",
  description: "Help cover the hosting costs of Mantice and other free, open-source sound tools by Matteo Bassi.",
  alternates: {
    canonical: "/support/",
    languages: { en: "/support/", it: "/it/support/", "x-default": "/support/" },
  },
  openGraph: {
    title: "Support Bassimat",
    description: "Help keep independent, ad-free sound tools online and free for everyone.",
    url: "/support/",
  },
};

const principles = [
  ["Free stays free", "Supporting the work never unlocks features or changes what other people can use."],
  ["No advertising", "The instruments remain focused spaces for listening, experimentation and sound design."],
  ["Real infrastructure", "Contributions help cover the servers that synthesize, stream and render audio online."],
];

const supportOptions = [
  { label: "€3", href: "https://www.paypal.com/ncp/payment/XBB3GTVW4A4HJ" },
  { label: "€5", href: "https://www.paypal.com/ncp/payment/MG75SFMPNTJ2N", recommended: true },
  { label: "€10", href: "https://www.paypal.com/ncp/payment/2G57DWHR2MTXN" },
  { label: "€20", href: "https://www.paypal.com/ncp/payment/S25UZZ2UC3JZQ" },
  { label: "Custom", href: "https://www.paypal.com/ncp/payment/LXKTGLVEJRMR8", custom: true },
];

export default function SupportPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Matteo Bassi, home">
          <span className="wordmark-mark">MB</span>
          <span className="wordmark-handle">/ bassimat</span>
        </a>
        <nav aria-label="Support navigation">
          <a href="/#instruments">Instruments</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="language-switcher" aria-label="Language selection"><a className="active" href="/support/" lang="en" aria-current="page">EN</a><i aria-hidden="true">/</i><a href="/it/support/" lang="it">IT</a></div>
      </header>

      <main className="support-page" id="main">
        <section className="support-hero">
          <p className="eyebrow"><span className="signal-dot" aria-hidden="true" />Independent · free · open source</p>
          <h1>Help keep the sound<span>alive and online.</span></h1>
          <p className="support-lead">All instruments are free to use, open source and made without advertising. Their online audio engines still have real hosting costs. If you enjoy using them, please consider supporting their hosting costs.</p>
          <div className="support-payment" aria-labelledby="support-amount-title">
            <p className="support-payment-label" id="support-amount-title">Choose a one-time amount</p>
            <div className="support-amounts">
              {supportOptions.map(option => (
                <a
                  className={`support-amount-option${option.recommended ? " recommended" : ""}${option.custom ? " custom" : ""}`}
                  href={option.href}
                  key={option.label}
                  target="_blank"
                  rel="noreferrer"
                  data-support-checkout="paypal"
                  aria-label={`${option.label} support through PayPal; opens secure checkout in a new tab`}
                >
                  <strong>{option.label}</strong>
                  {option.recommended && <span>Suggested</span>}
                </a>
              ))}
            </div>
            <p className="support-provider-note">Secure checkout is hosted by PayPal. PayPal, cards and eligible wallets are offered according to your device and region. Bassimat never receives your payment credentials.</p>
          </div>
          <div className="support-actions"><a className="button button-secondary" href="/#instruments">Explore the instruments <span aria-hidden="true">←</span></a></div>
        </section>

        <section className="support-principles" aria-labelledby="support-principles-title">
          <div className="support-heading">
            <p className="section-number">HOW SUPPORT WORKS</p>
            <h2 id="support-principles-title">Contribution without exclusion.</h2>
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
          <p className="section-number">WHAT IT COVERS</p>
          <div>
            <h2 id="support-costs-title">Servers turn parameters into sound.</h2>
            <p>When someone streams a drone, auditions a texture or downloads a render, a remote synthesis engine creates that audio for them. Contributions go toward keeping those engines available and maintaining the tools around them.</p>
            <p>This is voluntary support, not a purchase. Every instrument remains fully usable whether or not you contribute.</p>
          </div>
        </section>
      </main>

      <footer>
        <div><p className="footer-name">Matteo Bassi <span>/ bassimat</span></p><p>Independent sound tools · freely available</p></div>
        <div className="footer-links"><a href="/">Home</a><a href="/#contact">Contact</a></div>
      </footer>

    </>
  );
}
