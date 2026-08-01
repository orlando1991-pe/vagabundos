# Vagabundos

Web estatica inicial para Cerveceria Vagabundos, construida con React Native Web, Tailwind CSS y un backend Node/Express preparado para evolucionar a e-commerce.

## Estructura

- `apps/web`: experiencia responsive con secciones Inicio, Nosotros, Cervezas y Contactanos.
- `apps/api`: API base para salud, catalogo, contacto y preview de pedidos.

## Comandos

```bash
npm install
npm run dev:web
npm run dev:api
```

La web queda por defecto en `http://localhost:5173` y la API en `http://localhost:4000`.

## Siguiente fase de comercio

- Conectar `GET /api/beers` al catalogo visual.
- Persistir pedidos y contactos en base de datos.
- Agregar autenticacion de admin para gestionar stock, precios y lanzamientos.
- Integrar pasarela de pago y envio.
