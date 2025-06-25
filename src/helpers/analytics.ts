import ReactGA from 'react-ga4';

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!measurementId) return;
  ReactGA.initialize(measurementId);
};

export const trackPageview = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (
  action: string,
  category?: string,
  label?: string
) => {
  ReactGA.event({
    category: category || 'general',
    action,
    label,
  });
};
