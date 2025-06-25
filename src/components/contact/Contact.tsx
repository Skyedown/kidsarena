import './Contact.less';
import { trackEvent } from '../../helpers/analytics';


const rentalId = import.meta.env.VITE_CALL_RENTAL_CONVERSION_EVENT_ID;
const kidsArenaId = import.meta.env.VITE_CALL_ARENA_CONVERSION_EVENT_ID;

const callRentalConversion = () => {
  trackEvent('call_click', 'contact', 'rental_phone_click');
  window.gtag?.('event', 'conversion', {
    send_to: rentalId,
  });
};

const callKidsArenaConversion = () => {
  trackEvent('call_click', 'contact', 'arena_phone_click');
  window.gtag?.('event', 'conversion', {
    send_to: kidsArenaId,
  });
};

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Kontakt</h2>
      <div className="contact-wrapper">
        <div className="contact-map">
          <iframe
            title="Kids Arena Location"
            src="https://www.google.com/maps?q=Kids+Arena+%C5%A0amor%C3%ADn&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-info">
          <p>
            <strong>Adresa:</strong> NC Aréna, Ul. Bratislavská 1200/35B,
            Šamorín
          </p>
          <br />
          <h4>Detský kútik:</h4>{' '}
          <p>
            <strong>Telefón - </strong>{' '}
            <a onClick={callKidsArenaConversion} href="tel:+421903174333">
              0903 174 333
            </a>
          </p>
          <p>
            <strong>Rezervácia –</strong>{' '}
            <a href="https://www.bookiopro.com/kids-arena/rs-widget?lang=sk">
              https://www.bookiopro.com/kids-arena/rs-widget?lang=sk
            </a>
          </p>
          <h4>Otváracie hodiny:</h4> <p>Po - Pia: 9:00 - 20:00</p>{' '}
          <p>So - Ne: 10:00 - 20:00</p> <br />
          <h4>Prenájom atrakcií:</h4>{' '}
          <p>
            <strong>Telefón –</strong>{' '}
            <a onClick={callRentalConversion} href="tel:+421917109235">
              0917 109 235
            </a>
          </p>
          <p className="see-you">Tešíme sa na Vašu návštevu!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
