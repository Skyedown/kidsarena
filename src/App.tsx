import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Rental from './components/rental/Rental';
import RentalGallery from './components/rental-gallery/Rental-gallery';
import ArenaGallery from './components/arena-gallery/Arena-gallery';

import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import './index.less';
import Birthday from './components/birthday/Birthday';
import CookieConsent from './components/cookie-consent/cookie-consent';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ArenaGallery />
      <Birthday />
      <Rental />
      <RentalGallery />
      <Pricing />
      <Contact />
      <Footer />
      <CookieConsent />
    </>
  );
};

export default App;
