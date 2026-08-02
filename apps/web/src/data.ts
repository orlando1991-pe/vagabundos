import { Beer, Flame, MapPin, Music2, ShoppingBag, Sparkles } from "lucide-react";

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cervezas", href: "#cervezas" },
  { label: "Contactanos", href: "#contactanos" }
];

export const beers = [
  {
    id: "tulum",
    name: "Tulum",
    style: "American IPA",
    abv: "6.8%",
    ibu: "50 IBU",
    price: 10,
    accent: "#2587b9",
    image: "/assets/WhatsApp Image 2026-07-23 at 23.52.21 (1).jpeg",
    notes: ["fruta tropical", "cítricos", "amargor limpio"],
    description: "IPA moderna y balanceada con lúpulos neozelandeses y americanos, intensidad aromática y gran tomabilidad.",
    commerceStatus: "Botella 330 ml"
  },
  {
    id: "lifa",
    name: "Lifa",
    style: "American Pale Ale",
    abv: "5.3%",
    ibu: "35 IBU",
    price: 9.5,
    accent: "#b73572",
    image: "/assets/WhatsApp Image 2026-07-23 at 23.52.21.jpeg",
    notes: ["cítricos", "resina", "caramelo ligero"],
    description: "Pale Ale expresiva y equilibrada, con aromas de lúpulos americanos, cuerpo suave y un final limpio.",
    commerceStatus: "Botella 330 ml"
  },
  {
    id: "bien-vienna",
    name: "Bien Vienna!",
    style: "Vienna Lager",
    abv: "5.5%",
    ibu: "25 IBU",
    price: 9,
    accent: "#c45b22",
    image: "/assets/WhatsApp Image 2026-07-23 at 23.52.20 (2).jpeg",
    notes: ["malta tostada", "caramelo", "final seco"],
    description: "Lager ámbar, sabrosa y refrescante; combina suavidad, complejidad y un toque de caramelo.",
    commerceStatus: "Botella 330 ml"
  },
  {
    id: "arigato",
    name: "Arigato",
    style: "Japanese Lager",
    abv: "5%",
    ibu: "15 IBU",
    price: 9,
    accent: "#259a78",
    image: "/assets/WhatsApp Image 2026-07-23 at 23.52.20 (1).jpeg",
    notes: ["flor de cerezo", "jazmín", "hojas de té"],
    description: "Lager ligera, rubia y refrescante, de cuerpo suave, final seco y extrema bebibilidad.",
    commerceStatus: "Botella 330 ml"
  }
];

export const values = [
  {
    title: "Cerveza con calle",
    text: "Recetas con caracter, pensadas para gente curiosa que no se queda quieta.",
    Icon: MapPin
  },
  {
    title: "Lotes vivos",
    text: "Produccion artesanal, rotacion de estilos y frescura como prioridad.",
    Icon: Sparkles
  },
  {
    title: "Bar y comunidad",
    text: "Un punto de encuentro para brindar, escuchar musica y descubrir sabores.",
    Icon: Music2
  }
];

export const commerceRoadmap = [
  { title: "Catalogo", text: "Productos, precios, stock y etiquetas por estilo.", Icon: Beer },
  { title: "Carrito", text: "Base lista para conectar pedidos, packs y promociones.", Icon: ShoppingBag },
  { title: "Lanzamientos", text: "Secciones dinamicas para nuevas birras y eventos.", Icon: Flame }
];
