import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Mail, Menu, MessageCircle, Package, Phone, X } from "lucide-react";
import { beers, navItems, services, strengths } from "./data";

const instagramUrl = "https://www.instagram.com/cerveceria.vagabundos/";
const whatsappUrl = "https://wa.me/51960254978?text=Hola%20Vagabundos%2C%20quisiera%20hacer%20un%20pedido.";
const email = "cerveceriavagabundos@gmail.com";
const priceFormatter = new Intl.NumberFormat("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function goTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <a href={whatsappUrl} target="_blank" rel="noreferrer"><Phone/><span><small>WhatsApp</small>+51 960 254 978</span><ArrowRight/></a>
      <a href={`mailto:${email}`}><Mail/><span><small>Correo</small>{email}</span><ArrowRight/></a>
      <a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram/><span><small>Instagram</small>@cerveceria.vagabundos</span><ArrowRight/></a>
    </div>
  </div></section>;
}

export default function App() {
  return <main><Header/><Hero/><About/><Beers/><Services/><Contact/><footer><div className="container footer-inner"><img src="/assets/logos pngs-VAGABUNDOS-04.png" alt="Cervecería Vagabundos"/><p>© {new Date().getFullYear()} Cervecería Vagabundos</p><p>Consume con responsabilidad. Solo para mayores de 18 años.</p></div></footer></main>;
}
