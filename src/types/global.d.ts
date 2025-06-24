export {};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CALL_RENTAL_CONVERSION_EVENT_ID: string;
  readonly VITE_CALL_ARENA_CONVERSION_EVENT_ID: string;
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_GTAG_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
