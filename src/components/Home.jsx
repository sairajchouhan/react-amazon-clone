import React from 'react';
import '../css/Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero section of the home page"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="123456754"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            }
            rating={3}
          />
          <Product
            id="2343235345"
            title={
              'Limitless: Upgrade Your Brain, Learn Anything Faster, and Unlock Your Exceptional Life Kindle Edition'
            }
            price={19.99}
            image={
              'https://m.media-amazon.com/images/I/41U3sg4aP-L._SY346_.jpg'
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="489384389"
            title={'Apple iPhone 11 Pro Max (64GB) - Midnight Green'}
            price={999.99}
            image={
              'https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY327_FMwebp_QL65_.jpg'
            }
            rating={4}
          />
          <Product
            id="485384389"
            title={
              'Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)'
            }
            price={299.99}
            image={
              'https://m.media-amazon.com/images/I/71nplbAMwzL._AC_UL480_FMwebp_QL65_.jpg'
            }
            rating={3}
          />
          <Product
            id="26892568"
            title={
              'Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey'
            }
            price={1599.99}
            image={
              'https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY327_FMwebp_QL65_.jpg'
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="67846885"
            title={
              'G3 Music Presents Yamaha PSR-I400 61-Key Portable Keyboard, Metallic Dark Grey'
            }
            price={1599.99}
            image={
              'https://m.media-amazon.com/images/I/51H2gDK4WDL._AC_UL480_QL65_.jpg'
            }
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
