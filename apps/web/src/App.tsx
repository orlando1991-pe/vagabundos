import { useEffect, useState } from "react";
import { ArrowRight, Cookie, Instagram, Menu, MessageCircle, Package, X } from "lucide-react";
import { beers, navItems, services, strengths } from "./data";

const instagramUrl = "https://www.instagram.com/cerveceria.vagabundos/";
const whatsappUrl = "https://wa.me/51960254978?text=Hola%20Vagabundos%2C%20quisiera%20hacer%20un%20pedido.";
const email = "cerveceriavagabundos@gmail.com";
const priceFormatter = new Intl.NumberFormat("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function goTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type CookieChoice = "accepted" | "necessary";

type AgeGateState = "question" | "leaving" | "denied";

function hasVerifiedAge() {
  return document.cookie.split("; ").some(cookie => cookie.startsWith("vagabundos-age-verified=true"));
}

function AgeGate({ onVerified }: { onVerified: () => void }) {
  const [state, setState] = useState<AgeGateState>("question");

  function acceptAge() {
    const maxAge = 60 * 60 * 24 * 365;
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `vagabundos-age-verified=true; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
    setState("leaving");
    window.setTimeout(onVerified, 500);
  }

  if (state === "denied") {
    return <main className="age-gate age-gate-denied" aria-live="polite">
      <div className="age-gate-background" aria-hidden="true" />
      <section className="age-denied-card">
        <img src="/assets/logos pngs-VAGABUNDOS-04.png" alt="Cervecería Vagabundos" />
        <p className="age-kicker">Gracias por tu sinceridad</p>
        <h1>Te esperamos. Vuelve pronto.</h1>
        <p>Recuerda que necesitas tener al menos 18 años para entrar en el sitio de Cervecería Vagabundos.</p>
      </section>
    </main>;
  }

  return <main className={`age-gate ${state === "leaving" ? "age-gate-leaving" : ""}`}>
    <div className="age-gate-background" aria-hidden="true" />
    <section className="age-card" role="dialog" aria-modal="true" aria-labelledby="age-title" aria-describedby="age-description">
      <img className="age-logo" src="/assets/logos pngs-VAGABUNDOS-04.png" alt="Cervecería Vagabundos" />
      <div className="age-mark" aria-hidden="true">18<span>+</span></div>
      <p className="age-kicker">Acceso exclusivo para adultos</p>
      <h1 id="age-title">¿Eres mayor de 18 años?</h1>
      <p id="age-description">Este sitio contiene información sobre bebidas alcohólicas. Confirma tu edad para continuar.</p>
      <div className="age-actions">
        <button className="age-yes" onClick={acceptAge} autoFocus>Sí, soy mayor de edad</button>
        <button className="age-no" onClick={() => setState("denied")}>No, todavía no</button>
      </div>
      <small>Al continuar, confirmas que tienes la edad legal para consumir alcohol en tu país.</small>
    </section>
  </main>;
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem("vagabundos-cookie-consent");
    setVisible(!savedChoice);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const closeWithNecessary = (event: KeyboardEvent) => {
      if (event.key === "Escape") saveChoice("necessary");
    };
    window.addEventListener("keydown", closeWithNecessary);
    return () => window.removeEventListener("keydown", closeWithNecessary);
  }, [visible]);

  function saveChoice(choice: CookieChoice) {
    window.localStorage.setItem("vagabundos-cookie-consent", choice);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: choice }));
    setVisible(false);
  }

  if (!visible) return null;

  return <div className="cookie-overlay">
    <section className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div className="cookie-icon" aria-hidden="true"><Cookie /></div>
      <div className="cookie-copy">
        <p className="cookie-kicker">Tu privacidad importa</p>
        <h2 id="cookie-title">Usamos cookies</h2>
        <p id="cookie-description">Utilizamos cookies necesarias para el funcionamiento del sitio y, con tu permiso, cookies opcionales para conocer cómo se utiliza y mejorar tu experiencia.</p>
      </div>
      <div className="cookie-actions">
        <button className="cookie-secondary" onClick={() => saveChoice("necessary")}>Solo necesarias</button>
        <button className="cookie-primary" onClick={() => saveChoice("accepted")} autoFocus>Aceptar todas</button>
      </div>
    </section>
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return <header className="site-header">
    <div className="header-inner">
      <button className="logo-button" onClick={() => goTo("#inicio")} aria-label="Ir al inicio">
        <img src="/assets/logos pngs-VAGABUNDOS-04.png" alt="Cervecería Vagabundos" />
      </button>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map(item => <button key={item.href} onClick={() => goTo(item.href)}>{item.label}</button>)}
      </nav>
      <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Hacer un pedido</a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Navegación móvil">
      {navItems.map(item => <button key={item.href} onClick={() => { setOpen(false); goTo(item.href); }}>{item.label}</button>)}
      <a href={whatsappUrl} target="_blank" rel="noreferrer">Hacer un pedido</a>
    </nav>}
  </header>;
}

function Hero() {
  return <section id="inicio" className="hero">
    <div className="hero-noise" />
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Cervecería peruana · Desde 2020</p>
        <h1>Hay muchas maneras de hacer cerveza. Esta es la nuestra.</h1>
        <p className="hero-lead">Estilos con identidad propia, creados con técnica, calidad y una búsqueda constante por sorprender en cada nueva ronda.</p>
        <div className="hero-actions">
          <button className="primary-button" onClick={() => goTo("#cervezas")}>Conoce las cervezas <ArrowRight size={19} /></button>
          <a className="secondary-button" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={19} /> Síguenos</a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Cerveza Tulum IPA">
        <div className="hero-halo" />
        <div className="hero-image-frame"><img src="/assets/WhatsApp Image 2026-07-23 at 23.52.21 (1).jpeg" alt="Tulum IPA de Cervecería Vagabundos" /></div>
        <div className="award-badge"><strong>2025</strong><span>Mejor Nanocervecería Peruana</span></div>
      </div>
    </div>
  </section>;
}

function About() {
  return <section id="nosotros" className="light-section">
    <div className="container">
      <div className="section-intro split-intro">
        <div><p className="eyebrow dark">Somos Vagabundos</p><h2>Cerveza con identidad, hecha para volver por otra ronda.</h2></div>
        <div><p>Nacimos en 2020 para hacer las cervezas que nos gustaría encontrar en nuestros bares y restaurantes favoritos.</p><p>Trabajamos con integridad y mejora constante. Nuestro mayor orgullo es ver a quienes prueban nuestras cervezas volver por una segunda ronda.</p></div>
      </div>
      <div className="feature-grid">{strengths.map(({title, text, Icon}) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div>
  </section>;
}

function BeerCard({ beer }: { beer: typeof beers[number] }) {
  return <article className="beer-card">
    <div className={`beer-media ${!beer.image ? "beer-placeholder" : ""}`} style={{backgroundColor: beer.accent}}>
      {beer.image ? <img src={beer.image} alt={`${beer.name}, ${beer.style}`} loading="lazy" /> : <div><span>Vagabundos</span><strong>Pils<br/>Plis</strong><small>German Pils</small></div>}
      <span className="ibu-chip">{beer.ibu} IBU</span>
    </div>
    <div className="beer-content">
      <div className="beer-heading"><div><h3>{beer.name}</h3><p>{beer.style} · {beer.abv}</p></div><strong>S/ {priceFormatter.format(beer.price)}</strong></div>
      <p className="beer-color">Color: {beer.color}</p>
      <p>{beer.description}</p>
      <div className="tags">{beer.notes.map(note => <span key={note}>{note}</span>)}</div>
      <a className="order-link" href={`${whatsappUrl}%20Me%20interesa%20${encodeURIComponent(beer.name)}.`} target="_blank" rel="noreferrer">Pedir esta cerveza <ArrowRight size={17}/></a>
    </div>
  </article>;
}

function Beers() {
  return <section id="cervezas" className="dark-section">
    <div className="container">
      <div className="section-intro"><p className="eyebrow">Portafolio permanente</p><h2>Cada cerveza tiene una historia por contar.</h2><p>Desde estilos clásicos hasta propuestas contemporáneas, todas están hechas para acompañar grandes momentos.</p></div>
      <div className="beer-grid">{beers.map(beer => <BeerCard key={beer.id} beer={beer}/>)}</div>
      <div className="pricing-note"><Package/><div><strong>Formatos disponibles</strong><p>Botellas de 330 ml en cajas de 12 o 24 unidades · Barriles de 30 y 50 litros · Envíos a nivel nacional.</p><small>El precio mostrado corresponde a pedidos de 1 a 48 botellas. Desde 49 unidades: Tulum, S/ 9,50; Lifa, S/ 9,00; y los demás estilos, S/ 8,50. Los precios incluyen IGV y están sujetos a disponibilidad.</small></div></div>
    </div>
  </section>;
}

function Services() {
  return <section id="servicios" className="light-section"><div className="container">
    <div className="section-intro"><p className="eyebrow dark">Más que cerveza</p><h2>Creamos experiencias.</h2><p>Hacer una buena cerveza es solo el comienzo. La verdadera magia sucede cuando llega a la barra.</p></div>
    <div className="feature-grid">{services.map(({title,text,Icon}) => <article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
    <div className="service-strip"><strong>También ofrecemos</strong><span>Asesoría comercial permanente</span><span>Cervezas estacionales y ediciones limitadas</span><span>Material de apoyo para tu negocio</span></div>
  </div></section>;
}

function Contact() {
  return <section id="contacto" className="contact-section"><div className="container contact-grid">
    <div><p className="eyebrow">Contáctanos</p><h2>Brindemos por lo que viene.</h2><p>Escríbenos para pedidos, disponibilidad, desarrollos especiales, catas o propuestas para tu negocio.</p></div>
    <div className="contact-links">
      <a href={whatsappUrl} target="_blank" rel="noreferrer"><img className="contact-brand-icon" src="/whatsapp.svg" alt="" aria-hidden="true"/><span><small>WhatsApp</small>+51 960 254 978</span><ArrowRight/></a>
      <a href={`mailto:${email}`}><img className="contact-brand-icon" src="/email.svg" alt="" aria-hidden="true"/><span><small>Correo</small>{email}</span><ArrowRight/></a>
      <a href={instagramUrl} target="_blank" rel="noreferrer"><img className="contact-brand-icon" src="/instagram.svg" alt="" aria-hidden="true"/><span><small>Instagram</small>@cerveceria.vagabundos</span><ArrowRight/></a>
    </div>
  </div></section>;
}

export default function App() {
  const [ageVerified, setAgeVerified] = useState(() => hasVerifiedAge());

  return <>
    {!ageVerified && <AgeGate onVerified={() => setAgeVerified(true)} />}
    <main>
      <Header/><Hero/><About/><Beers/><Services/><Contact/><footer><div className="container footer-inner"><img src="/assets/logos pngs-VAGABUNDOS-04.png" alt="Cervecería Vagabundos"/><p>© {new Date().getFullYear()} Cervecería Vagabundos</p><p>Consume con responsabilidad. Solo para mayores de 18 años.</p></div></footer><CookieConsent/>
    </main>
  </>;
}
