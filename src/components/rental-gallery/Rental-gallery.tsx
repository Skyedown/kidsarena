import { useState } from 'react';
import './Rental-gallery.less';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  '/images/boubble-house.jpg',
  '/images/castle.jpg',
  '/images/jumping-house.jpg',
  '/images/mushroom-house.jpg',
  '/images/slide.jpg',
  '/images/elsa-olaf.jpg',
  '/images/masa-and-bear.jpg',
  '/images/mickey-miney.jpg',
  '/images/shrek.jpg',
  '/images/stich.jpg',
  '/images/woman-and-cat.jpg',
  '/images/paw-patrol.jpg',
  '/images/ponny-arena.jpg',
  '/images/tom-and-jerry.jpg',
  '/images/mario.jpg',
  '/images/smurfs.jpg',
  '/images/minion.jpg',
  '/images/pepa-1.jpg',
  '/images/pepa-2.jpg',
  '/images/paw-dog.jpg',
  '/images/drt.jpg',
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Čo si u nás môžete prenajať?</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Galéria ${i + 1}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  );
};

export default Gallery;
