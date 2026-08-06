import { Award, Beer, GraduationCap, Handshake, Sparkles, Utensils } from "lucide-react";

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cervezas", href: "#cervezas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" }
];

export const beers = [
  {
    id: "tulum", name: "Tulum", style: "IPA", color: "Rubia dorada", abv: "6.8%", ibu: 50,
    price: 10, bulkPrice: 9.5, accent: "#2484b2",
    image: "/assets/WhatsApp Image 2026-07-23 at 23.52.21 (1).jpeg",
    notes: ["Frutas tropicales", "Cítricos frescos", "Amargor limpio"],
    description: "Una IPA moderna y balanceada, de gran intensidad aromática gracias a lúpulos neozelandeses y americanos, con una tomabilidad que sorprende."
  },
  {
    id: "lifa", name: "Lifa", style: "American Pale Ale", color: "Dorado profundo", abv: "5.3%", ibu: 35,
    price: 9.5, bulkPrice: 9, accent: "#b73572",
    image: "/assets/WhatsApp Image 2026-07-23 at 23.52.21.jpeg",
    notes: ["Cítricos", "Resina", "Caramelo ligero"],
    description: "Puro balance entre lúpulos americanos y maltas caramelo ligeras. De amargor moderado, final limpio y mucho carácter."
  },
  {
    id: "bien-vienna", name: "Bien Vienna!", style: "Vienna Lager", color: "Ámbar cobrizo", abv: "5.5%", ibu: 25,
    price: 9, bulkPrice: 8.5, accent: "#c35b22",
    image: "/assets/WhatsApp Image 2026-07-23 at 23.52.20 (2).jpeg",
    notes: ["Malta tostada", "Caramelo", "Final seco"],
    description: "Una lager con carácter, sabrosa y refrescante. Combina suavidad y complejidad con un equilibrio que invita al siguiente trago."
  },
  {
    id: "arigato", name: "Arigato", style: "Japanese Lager", color: "Dorado pálido", abv: "5%", ibu: 15,
    price: 9, bulkPrice: 8.5, accent: "#269879",
    image: "/assets/WhatsApp Image 2026-07-23 at 23.52.20 (1).jpeg",
    notes: ["Flor de cerezo", "Jazmín", "Hojas de té"],
    description: "Nuestro homenaje a la sencillez y elegancia japonesa: ligera, refrescante, de cuerpo suave, final seco y extremadamente bebible."
  },
  {
    id: "pils-plis", name: "Pils Plis", style: "German Pils", color: "Dorado claro", abv: "5.2%", ibu: 31,
    price: 9, bulkPrice: 8.5, accent: "#d4b529", image: null,
    notes: ["Lúpulos nobles", "Herbal", "Floral"],
    description: "Una interpretación brillante y refrescante de la Pils alemana, con lúpulos nobles de Baviera, amargor limpio y gran carácter."
  }
];

export const strengths = [
  { title: "+30 medallas", text: "Reconocimientos nacionales e internacionales respaldan nuestra calidad y consistencia.", Icon: Award },
  { title: "Portafolio vivo", text: "Estilos permanentes y ediciones limitadas que evolucionan durante todo el año.", Icon: Sparkles },
  { title: "Desde 2020", text: "Creamos cervezas con identidad propia, combinando técnica, calidad y curiosidad.", Icon: Beer }
];

export const services = [
  { title: "Desarrollos a medida", text: "Cervezas exclusivas según el giro de tu negocio y las preferencias de tus clientes.", Icon: Handshake },
  { title: "Capacitación", text: "Formación para tu equipo en estilos, servicio y recomendaciones al cliente.", Icon: GraduationCap },
  { title: "Catas y maridajes", text: "Experiencias a cargo de nuestro maestro cervecero, juez BJCP y bier sommelier certificado.", Icon: Utensils }
];
