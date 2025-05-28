import { useState } from 'react';
import './Arena-gallery.less';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  '/images/arena/arena-1.jpg',
  '/images/arena/arena-4.jpg',
  '/images/arena/arena-5.jpg',
  '/images/arena/bday-1.jpg',
  '/images/arena/bday-2.jpg',
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Ako to v našom kútiku vyzerá?</h2>
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
