import './Birthday.less';

const Birthday = () => {
  return (
    <section id="birthday" className="birthday-section">
      <h2>🎂 Narodeninové oslavy v Kids Arena</h2>
      <p className="birthday-intro">
        Vyberte si z našich tematických balíčkov a pripravte pre vaše dieťa
        oslavu, na ktorú sa nezabúda!
      </p>

      <div className="birthday-cards">
        <div className="birthday-card basic">
          <h3>🎈 Balík BASIC</h3>
          <div className="price">150€</div>
          <ul>
            <li>Prenájom miestnosti na 2h</li>
            <li>Slávnostná výzdoba</li>
            <li>Občerstvenie (tyčinky, chrumky, sladké snacky)</li>
            <li>Detské šampanské + džúsik pre každé dieťa</li>
            <li>Limonáda 500ml</li>
            <li>🎁 Darček pre oslávenca – vstup do kútika na 1h</li>
          </ul>
        </div>

        <div className="birthday-card premium">
          <h3>🎉 Balík PREMIUM</h3>
          <div className="price">185€</div>
          <ul>
            <li>Prenájom miestnosti na 2h</li>
            <li>Slávnostná výzdoba</li>
            <li>Slávnostné občerstvenie + toasty/hot-dog</li>
            <li>Detské šampanské + džúsik pre každé dieťa</li>
            <li>🎁 Darček pre oslávenca – vstup do herne na 1h</li>
          </ul>
        </div>

        <div className="birthday-card deluxe">
          <h3>🌟 Balík DELUXE</h3>
          <div className="price">220€</div>
          <ul>
            <li>Prenájom miestnosti na 2h</li>
            <li>Slávnostná + balónová výzdoba</li>
            <li>Slávnostné občerstvenie + toasty/hot-dog</li>
            <li>Detské šampanské + džúsik pre každé dieťa</li>
            <li>🎁 Darček pre oslávenca – vstup do herne na 1h</li>
            <li>🎭 ANIMÁTOR + maskot ako prekvapenie</li>
          </ul>
        </div>
      </div>

      <p className="birthday-note">
        Ceny platia pre 8 detí, každé ďalšie dieťa +15€. Každá začatá hodina
        navyše: 50€.
        <br />
        Vlastné občerstvenie: 20€ | Servisný poplatok zahrnutý | Vlastná torta
        bez príplatku.
      </p>

      <div className="buttons-group">
        <a className="button bg-primary" href="#contact">
          Zavolať a objednať oslavu
        </a>
       
      </div>
    </section>
  );
};

export default Birthday;
