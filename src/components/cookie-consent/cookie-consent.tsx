import { useEffect, useState } from 'react';
import { initGA } from '../../helpers/analytics';
import { loadAds } from '../../helpers/loadAds';

import './cookie-consent.less';

type CookieConsentProps = {
  onPolicyShow: () => void;
};

const CookieConsent = ({ onPolicyShow }: CookieConsentProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted');
    if (accepted) {
      initGA();
      loadAds();
    } else {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    initGA();
    loadAds();
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookies-accepted', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-bar">
      <p>
        Tento web používa cookies na zlepšenie vašej skúsenosti.{' '}
        <span
          onClick={onPolicyShow}
          style={{ color: '#fff', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Viac o cookies
        </span>
      </p>
      <div className="cookie-buttons">
        <button onClick={acceptCookies}>Súhlasím</button>
        <button className="deny-cookies" onClick={declineCookies}>
          Nesúhlasím
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
