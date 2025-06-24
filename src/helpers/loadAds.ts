export const loadAds = () => {
  const measurementId = import.meta.env.VITE_GTAG_ID;

  if (typeof window === 'undefined' || typeof window.gtag !== 'undefined')
    return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
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
