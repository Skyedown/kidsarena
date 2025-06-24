import { useEffect, useState } from 'react';
import { loadGA } from '../../helpers/loadGA';

import './cookie-consent.less';
import { loadAds } from '../../helpers/loadAds';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted');
    if (accepted) {
      loadGA();
      loadAds();
    } else {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    loadGA();
    loadAds();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-bar">
      <p>
        Tento web používa cookies na zlepšenie vašej skúsenosti. Používaním webu
        súhlasíte s ich použitím.
      </p>
      <button onClick={acceptCookies}>Súhlasím</button>
    </div>
  );
};

export default CookieConsent;
