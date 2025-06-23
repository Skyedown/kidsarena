import './Pricing.less';

const pricingItems = [
  {
    title: 'Labková patrola nafukovací hrad',
    price: '~ Od 150 € / deň',
    image: '/images/paw-patrol-jump-house.jpg',
  },
  {
    title: 'Šmolkovský nafukovací hrad',
    price: '~Od 150 € / deň',
    image: '/images/mushroom-house.jpg',
  },
  {
    title: 'Nafukovací terč',
    price: '~Od 180 € / deň',
    image: '/images/darts.png',
  },
  {
    title: 'Mini bungee trampolína',
    price: 'Cena dohodou',
    image: '/images/pink-bunjee.jpg',
  },
  {
    title: 'Skákací hrad',
    price: '~60 € / deň',
    image: '/images/castle.jpg',
  },
  {
    title: 'Jednorožcový skákací hrad',
    price: '~60 € / deň',
    image: '/images/unicorn-house.jpg',
  },
  {
    title: 'Bubble house',
    price: '~200 € / deň (iba s obsluhou)',
    image: '/images/bubble-house.jpg',
  },
  {
    title: 'Elektrické autíčka',
    price: 'Cena dohodou (iba s obsluhou)',
    image: '/images/cars.jpg',
  },
  {
    title: 'Maľovanie na tvár',
    price: 'Cena dohodou',
    image: '/images/face-paint.jpg',
  },
  {
    title: 'Maskoti - veľký výber',
    price: '~Od 50 € / deň',
    image: '/images/paw-patrol.jpg',
  },
  { title: 'Šmykľavka', price: '~60 € / deň', image: '/images/slide.jpg' },
  {
    title: 'Farebný skákací hrad so šmykľavkou',
    price: '~50 € / deň',
    image: '/images/jump-houses-color.jpg',
  },

  {
    title: 'Koníky na kolieskach',
    price: '~200 € / deň (iba s obsluhou)',
    image: '/images/ponny-arena.jpg',
  },

  {
    title: 'Stroj na cukrovú vatu',
    price: 'Cena dohodou (iba s obsluhou)',
    image: '/images/cottom-candy.jpg',
  },
  {
    title: 'Nafukovací domček so šmykľavkou',
    price: '~50 € / deň',
    image: '/images/jumping-house.jpg',
  },
  {
    title: 'Stroj na ľadovú drť',
    price: 'Cena dohodou (iba s obsluhou)',
    image: '/images/drt.jpg',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <h2>Cenník</h2>
      <p className="pricing-note">
        Uvedené ceny sú orientačné a platia pre samostatné zapožičanie atrakcií
        bez obsluhy. Konečná cena závisí od viacerých faktorov – napríklad či si
        atrakciu prenajímate aj s personálom (napr. maskot, obsluha ku stroju na
        cukrovú vatu), ako aj od počtu objednaných položiek.
        <br />
        <br />
        📦 Pri väčšom počte atrakcií vieme poskytnúť zľavu alebo{' '}
        <strong>dopravu zadarmo</strong>.
        <br />
        Cena dopravy závisí od lokality a počtu prenajatých atrakcií.
        <br />
        <br />
        👉 Príklad: Ak si objednáte skákací hrad, stroj na popcorn a maskota do
        tej istej lokality, vieme zabezpečiť výhodnejšiu cenu aj bezplatnú
        dopravu.
        <br />
        <br />
        Radi vám pripravíme individuálnu cenovú ponuku na mieru – stačí nás
        kontaktovať. 📞
      </p>
      <div className="buttons-group">
        <a className="button bg-primary my-3rem" href="#contact">
          Zavolať
        </a>
      </div>

      <div className="pricing-table">
        {pricingItems.map((item, i) => (
          <div
            key={i}
            className="pricing-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="pricing-overlay">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
