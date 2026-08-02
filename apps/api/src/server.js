import cors from "cors";
import { randomUUID } from "crypto";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { beers } from "./catalog.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(helmet());
app.use(cors({ origin: process.env.WEB_ORIGIN || "*" }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "vagabundos-api" });
});

app.get("/api/beers", (_req, res) => {
  res.json({ data: beers.filter((beer) => beer.active) });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required" });
  }

  return res.status(201).json({
    data: {
      id: randomUUID(),
      name,
      email,
      message,
      status: "received"
    }
  });
});

app.post("/api/orders/preview", (req, res) => {
  const items = Array.isArray(req.body?.items) ? req.body.items : [];
  const lines = items.map((item) => {
    const beer = beers.find((candidate) => candidate.id === item.id);
    const quantity = Number(item.quantity || 0);
    return beer && quantity > 0 ? { ...beer, quantity, subtotal: beer.price * quantity } : null;
  }).filter(Boolean);

  res.json({
    data: {
      lines,
      total: lines.reduce((sum, line) => sum + line.subtotal, 0)
    }
  });
});

app.listen(port, () => {
  console.log(`Vagabundos API listening on http://localhost:${port}`);
});
