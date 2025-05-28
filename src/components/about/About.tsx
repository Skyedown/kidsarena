import './About.less';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>O našom kútiku</h2>
      <div className="about-content">
        <div className="about-image">
          <img
            src="/images/arena/kids-with-mascot.jpg"
            alt="Kids Arena kútik"
          />
        </div>
        <div className="about-text">
          <p>
            Kids Arena Šamorín je miesto, kde sa deti cítia ako doma. 🏡 Náš
            detský kútik je bezpečný, farebný a veselý svet plný hier, smiechu a
            radosti.
          </p>
          <p>
            🎲 Čaká na vás množstvo hračiek, herných kútikov a aktivít, ktoré
            rozžiaria detské očká. Či už prídete na chvíľku alebo na celý deň,
            deti sa u nás zabavia a vy si môžete oddýchnuť.
          </p>
          <p>
            🧁 Pre rodičov máme pripravené chutné koláčiky a lahodnú kávu ☕,
            ktorú si môžete vychutnať v pohodlí pri sledovaní, ako sa vaše dieťa
            hrá a zabáva.
          </p>
          <p>
            🎟️ Vstup do detského kútika platí len pre deti. Cenník:
            <br />
            <strong>1 hodina – 5 €</strong>
            <br />
            <strong>2 hodiny – 9,5 €</strong>
            <br />
            <strong>Neobmedzený čas (nad 2 hod) – 12 €</strong>
          </p>
          <p>
            🎉 Organizujeme aj narodeninové oslavy, pri ktorých sa každý malý
            oslávenec cíti ako hviezda.
          </p>
          <p>
            👶 Potrebujete si niečo vybaviť v meste? Ponúkame aj možnosť{' '}
            <strong>krátkodobého stráženia detí</strong> s milým a skúseným
            personálom. Cena za stráženie je <strong>5 € / hod</strong> mimo
            vstupu do kútika.
          </p>
          <p>
            Príďte sa presvedčiť, že Kids Arena Šamorín je miesto, kde sa z
            detských snov stáva skutočná zábava! ✨
          </p>
          <div className="buttons-group">
            <a className="button bg-primary" href="#contact">
              Zavolať
            </a>
            <a
              className="button bg-secondary"
              href="https://www.bookiopro.com/kids-arena/rs-widget?lang=sk"
              target="_blank"
            >
              Rezervovať čas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
