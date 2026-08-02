declare global {
  var global: typeof globalThis;
}

if (!globalThis.global) {
  globalThis.global = globalThis;
}

export {};
