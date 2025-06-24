export const loadGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (typeof window === 'undefined' || typeof window.gtag === 'function' || !measurementId) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.setAttribute('data-origin', 'custom-ga4');
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId);
  };
};
