import React from 'react';

import PrimaryButton from 'components/Buttons/PrimaryButton';
import { GiAmericanFootballHelmet } from 'react-icons/gi';

import 'styles/carousel.scss';

const Carousel = () => (
  <>
    <div id="carouselExampleSlidesOnly" className="carousel slide h-50" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="hero-image-1">
            <div className="hero-text-1">
              <h1 className="text-white">
                Manage your team to the
                {'\n'}
                <span>NEXT LEVEL</span>
              </h1>
              <PrimaryButton text="Meet my Team now !" icon={<GiAmericanFootballHelmet />} url="/register" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="hero-image-2">
            <div className="hero-text-2">
              <h1 className="text-white">
                Manage your team to the
                {'\n'}
                <span>NEXT LEVEL</span>
              </h1>
              <PrimaryButton text="Meet my Team now !" icon={<GiAmericanFootballHelmet />} url="/register" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="hero-image-3">
            <div className="hero-text-3">
              <h1 className="text-white">
                Manage your team to the
                {'\n'}
                <span>NEXT LEVEL</span>
              </h1>
              <PrimaryButton text="Meet my Team now !" icon={<GiAmericanFootballHelmet />} url="/register" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Carousel;
