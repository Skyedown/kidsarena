import './Rental.less';

const Rental = () => {
  return (
    <section id="rental" className="rental-section">
      <h2>Prenájom atrakcií</h2>
      <div className="rental-content">
        <div className="rental-image">
          <img src="/images/mushroom-house.jpg" alt="Prenájom atrakcií" />
        </div>
        <div className="rental-text">
          <p>
            🎪 Plánujete školskú akciu, obecný deň alebo narodeninovú párty?
            Máme pre vás všetko, čo potrebujete na to, aby sa z vašej udalosti
            stala nezabudnuteľná zábava pre deti aj dospelých!
          </p>
          <p>
            🏰 Prenajímame skákacie hrady rôznych veľkostí, nafukovací Bubble
            House plný balónov, elektrické autíčka, pojazdné koníky, veselých
            maskotov a stánky s popcornom 🍿 či cukrovou vatou 🍭.
          </p>
          <p>
            🎨 Okrem atrakcií zabezpečujeme aj doplnkové služby ako maľovanie na
            tvár, trblietavé tetovačky a ďalšie aktivity, ktoré deti zbožňujú.
          </p>
          <p>
            🚚 A čo je najlepšie? Atrakcie dovážame po takmer celom západnom
            Slovensku! Zabezpečíme dopravu, montáž, obsluhu a odvoz – vy sa
            môžete sústrediť len na užívanie si podujatia.
          </p>
          <p>
            🎉 S Kids Arena Šamorín bude vaša akcia plná smiechu, radosti a
            detských výkrikov nadšenia!
          </p>
          <p className="birthday-note">
            Objednávka je potvrdená zložením zálohy podľa dohody.
          </p>
          <div className="buttons-group">
            <a className="button bg-primary" href="#contact">
              Zavolať
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rental;
