import { useState } from "react";
import {
  ArrowRight,
  Instagram,
  Mail,
  Menu,
  Minus,
  Phone,
  Plus,
  Send,
  ShoppingCart,
  X
} from "lucide-react";
import { beers, commerceRoadmap, navItems, values } from "./data";

const instagramUrl = "https://www.instagram.com/cerveceria.vagabundos/?hl=es";

function goTo(id: string) {
  document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-stout/80 px-4 py-3 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <button className="flex items-center gap-3 text-left" onClick={() => goTo("#inicio")}>
          <img className="h-9 w-auto max-w-[190px] object-contain sm:h-11 sm:max-w-[250px]" src="/assets/logos pngs-VAGABUNDOS-04.png" alt="Vagabundos cervecería" />
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-white/10"
              onClick={() => goTo(item.href)}
            >
              <span className="font-body text-sm font-semibold uppercase text-foam">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          className="hidden items-center gap-2 rounded-full bg-malt px-5 py-3 shadow-glow transition hover:scale-105 md:flex"
          onClick={() => goTo("#cervezas")}
        >
          <ShoppingCart size={18} color="#170f0b" />
          <span className="font-body text-sm font-black uppercase text-stout">Ver cervezas</span>
        </button>

        <button className="rounded-full border border-white/15 p-3 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} color="#fff5df" /> : <Menu size={24} color="#fff5df" />}
        </button>
      </div>

      {open && (
        <nav className="mx-auto mt-4 grid w-full max-w-7xl gap-2 border-t border-white/10 pt-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.href}
              className="rounded-xl bg-white/5 px-4 py-4 text-left"
              onClick={() => {
                setOpen(false);
                goTo(item.href);
              }}
            >
              <span className="font-body text-base font-bold uppercase text-foam">{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-stout pt-28">
      <div className="absolute inset-0 opacity-60 beer-noise" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-stout to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pt-20">
        <div className="z-10">
          <p className="mb-5 max-w-max rounded-full border border-malt/40 bg-malt/10 px-4 py-2 font-body text-xs font-black uppercase tracking-[0.24em] text-malt">
            Cerveza artesanal para almas inquietas
          </p>
          <h1 className="font-display text-6xl uppercase leading-none tracking-normal text-foam sm:text-7xl lg:text-8xl">
            Birras con ruta, fuego y barrio.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-foam/80">
            Vagabundos es una cerveceria artesanal con espiritu viajero: recetas honestas, sabores
            intensos y una experiencia preparada para convertirse en tienda online.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="flex items-center gap-3 rounded-full bg-malt px-6 py-4 shadow-glow transition hover:scale-105"
              onClick={() => goTo("#cervezas")}
            >
              <span className="font-body text-sm font-black uppercase text-stout">Explorar cervezas</span>
              <ArrowRight size={20} color="#170f0b" />
            </button>
            <button
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-4 transition hover:bg-white/15"
              onClick={() => window.open(instagramUrl, "_blank")}
            >
              <Instagram size={20} color="#fff5df" />
              <span className="font-body text-sm font-black uppercase text-foam">Instagram</span>
            </button>
          </div>
        </div>

        <div className="relative flex min-h-[460px] items-center justify-center">
          <div className="pulse-glow absolute h-72 w-72 rounded-full bg-malt/30 blur-3xl" />
          <div className="relative flex h-[500px] w-full max-w-[430px] items-center justify-center">
            <div className="hero-product absolute inset-y-3 left-1/2 w-[72%] -translate-x-1/2 rotate-3 overflow-hidden rounded-xl border border-white/15 bg-foam shadow-ink sm:w-[68%]">
              <img className="h-full w-full object-cover" src="/assets/WhatsApp Image 2026-07-23 at 23.52.21 (1).jpeg" alt="Ficha de producto de la cerveza Tulum IPA" fetchPriority="high" />
            </div>
            <div className="absolute right-1 top-16 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md md:right-0">
              <p className="font-display text-4xl uppercase text-malt">+3</p>
              <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-foam/80">
                estilos base
              </p>
            </div>
            <div className="absolute left-0 top-36 rounded-2xl border border-malt/30 bg-stout/70 p-4 backdrop-blur-md">
              <p className="font-display text-4xl uppercase text-foam">100%</p>
              <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-malt">artesanal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="bg-foam px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="font-body text-sm font-black uppercase tracking-[0.28em] text-amber">Nosotros</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-stout md:text-7xl">
              La parada perfecta antes de seguir camino. 
            </h2>
          </div>
          <p className="font-body text-lg leading-8 text-ink/70">
            Nacimos para hacer cerveza que se sienta cercana y memorable. Nuestro mundo mezcla barra,
            musica, amigos, lotes pequenos y una obsesion por servir cada pinta fresca. Esta web ya
            queda preparada para crecer hacia reservas, venta por packs y lanzamientos por temporada.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {values.map(({ title, text, Icon }) => (
            <article key={title} className="group rounded-lg border border-stout/10 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-ink">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-stout transition group-hover:bg-malt">
                <Icon size={24} color="#fff5df" />
              </div>
              <h3 className="font-display text-3xl uppercase text-stout">{title}</h3>
              <p className="mt-3 font-body text-base leading-7 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuantityButton({ value, setValue }: { value: number; setValue: (value: number) => void }) {
  return (
    <div className="mt-5 flex items-center justify-between rounded-full border border-stout/10 bg-white px-2 py-2">
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-stout" onClick={() => setValue(Math.max(0, value - 1))}>
        <Minus size={18} color="#fff5df" />
      </button>
      <span className="font-body text-lg font-black text-stout">{value}</span>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-malt" onClick={() => setValue(value + 1)}>
        <Plus size={18} color="#170f0b" />
      </button>
    </div>
  );
}

function Beers() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const total = beers.reduce((sum, beer) => sum + (quantities[beer.id] || 0) * beer.price, 0);

  return (
    <section id="cervezas" className="relative overflow-hidden bg-stout px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 opacity-45 beer-noise" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-sm font-black uppercase tracking-[0.28em] text-malt">Cervezas</p>
            <h2 className="mt-3 max-w-3xl font-display text-5xl uppercase leading-none text-foam md:text-7xl">
              Catalogo listo para vender.
            </h2>
          </div>
          <div className="rounded-lg border border-malt/30 bg-white/10 p-5 backdrop-blur-md">
            <p className="font-body text-xs font-black uppercase tracking-[0.24em] text-malt">Pre-carrito demo</p>
            <p className="mt-1 font-display text-4xl uppercase text-foam">S/ {total.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {beers.map((beer) => {
            const value = quantities[beer.id] || 0;
            return (
              <article key={beer.id} className="beer-card rounded-lg border border-white/10 bg-foam p-5 shadow-ink">
                <div className="product-media relative aspect-[4/5] overflow-hidden rounded-md" style={{ backgroundColor: beer.accent }}>
                  <img className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.03]" src={beer.image} alt={`Ficha y botella de ${beer.name}, ${beer.style}`} loading="lazy" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-stout/90 px-3 py-2 font-body text-xs font-black uppercase tracking-wider text-foam backdrop-blur-sm">
                    {beer.ibu}
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-4xl uppercase text-stout">{beer.name}</h3>
                    <p className="font-body text-sm font-black uppercase tracking-[0.2em] text-amber">
                      {beer.style} / {beer.abv}
                    </p>
                  </div>
                  <p className="shrink-0 font-display text-3xl uppercase text-stout">S/ {beer.price.toFixed(2)}</p>
                </div>
                <p className="mt-4 font-body text-base leading-7 text-ink/70">{beer.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {beer.notes.map((note) => (
                    <span key={note} className="rounded-full bg-stout/10 px-3 py-2 font-body text-xs font-black uppercase text-stout">
                      {note}
                    </span>
                  ))}
                </div>
                <QuantityButton
                  value={value}
                  setValue={(next) => setQuantities((current) => ({ ...current, [beer.id]: next }))}
                />
                <p className="mt-3 text-center font-body text-xs font-black uppercase tracking-[0.18em] text-hop">
                  {beer.commerceStatus}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {commerceRoadmap.map(({ title, text, Icon }) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <Icon size={24} color="#f3b449" />
              <h3 className="mt-5 font-display text-3xl uppercase text-foam">{title}</h3>
              <p className="mt-2 font-body text-sm leading-6 text-foam/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contactanos" className="bg-foam px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-body text-sm font-black uppercase tracking-[0.28em] text-amber">Contactanos</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-stout md:text-7xl">
            Trae sed, ideas o pedidos grandes.
          </h2>
          <div className="mt-8 grid gap-4">
            <button className="flex items-center gap-4 text-left" onClick={() => window.open(instagramUrl, "_blank")}>
              <Instagram size={22} color="#d76b2b" />
              <span className="font-body text-base font-bold text-ink">@cerveceria.vagabundos</span>
            </button>
            <button className="flex items-center gap-4 text-left" onClick={() => {
              window.location.href = "mailto:hola@vagabundosbeer.com";
            }}>
              <Mail size={22} color="#d76b2b" />
              <span className="font-body text-base font-bold text-ink">hola@vagabundosbeer.com</span>
            </button>
            <div className="flex items-center gap-4">
              <Phone size={22} color="#d76b2b" />
              <span className="font-body text-base font-bold text-ink">+34 600 000 000</span>
            </div>
          </div>
        </div>

        <form className="rounded-lg bg-stout p-5 shadow-ink md:p-8">
          <h2 className="font-display text-4xl uppercase text-foam">Escribenos</h2>
          <p className="mt-2 font-body text-sm leading-6 text-foam/70">
            Formulario visual listo para conectar al backend de contactos.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-md border border-white/10 bg-white/10 px-4 py-4 font-body text-foam outline-none placeholder:text-foam/50" placeholder="Nombre" />
            <input className="rounded-md border border-white/10 bg-white/10 px-4 py-4 font-body text-foam outline-none placeholder:text-foam/50" placeholder="Email" />
          </div>
          <input className="mt-4 w-full rounded-md border border-white/10 bg-white/10 px-4 py-4 font-body text-foam outline-none placeholder:text-foam/50" placeholder="Asunto" />
          <textarea
            className="mt-4 min-h-36 w-full rounded-md border border-white/10 bg-white/10 px-4 py-4 font-body text-foam outline-none placeholder:text-foam/50"
            placeholder="Cuentanos que necesitas"
          />
          <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-malt px-6 py-4 transition hover:scale-[1.02]">
            <Send size={18} color="#170f0b" />
            <span className="font-body text-sm font-black uppercase text-stout">Enviar mensaje</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-stout">
      <Header />
      <Hero />
      <About />
      <Beers />
      <Contact />
      <footer className="bg-stout px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <img className="h-10 w-auto max-w-[220px] object-contain" src="/assets/logos pngs-VAGABUNDOS-04.png" alt="Vagabundos cervecería" loading="lazy" />
          <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-malt">Brinda distinto</p>
        </div>
      </footer>
    </main>
  );
}
