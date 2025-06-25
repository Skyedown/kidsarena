import React, { useRef, useEffect } from 'react';
import './cookie-policy.less';

interface CookiePolicyModalProps {
  onClose: () => void;
}

const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="cookie-policy-modal-overlay">
      <div className="cookie-policy-modal" ref={modalRef}>
        <button
          className="cookie-policy-close"
          onClick={onClose}
          aria-label="Zavrieť"
        >
          ×
        </button>
        <h1>Zásady používania cookies</h1>

        <h2>Úvod</h2>
        <p>
          Na našej webovej stránke používame cookies, aby sme zlepšili vašu
          používateľskú skúsenosť, analyzovali návštevnosť a zobrazovali
          relevantné reklamy.
        </p>

        <h2>Čo sú cookies?</h2>
        <p>
          Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom zariadení,
          keď navštívite webovú stránku. Pomáhajú nám zapamätať si vaše
          preferencie a poskytnúť vám lepší servis.
        </p>

        <h2>Aké cookies používame?</h2>
        <p>
          Používame technické cookies nevyhnutné pre fungovanie stránky,
          analytické cookies (napr. Google Analytics) a marketingové cookies
          (napr. Google Ads), ktoré nám umožňujú lepšie cieliť reklamu.
        </p>

        <h2>Ako môžete cookies spravovať?</h2>
        <p>
          Môžete zmeniť svoje nastavenia cookies kedykoľvek vo svojom
          prehliadači. Väčšina prehliadačov umožňuje zakázať alebo vymazať
          cookies. Ak odmietnete niektoré cookies, niektoré funkcie stránky
          nemusia správne fungovať.
        </p>

        <h2>Kontakt</h2>
        <p>V prípade otázok nás môžete kontaktovať na info@kidsarena.sk.</p>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
