import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Buttons/PrimaryButton';

import { GiAmericanFootballHelmet } from 'react-icons/gi';

import 'styles/nav.scss';

const HomeNavbar = () => (
  <>
    <nav className="navbar navbar-expand-lg py-3 px-5 bg-dark" id="navbar">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="logo">FRANCHYZ</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="float-right" id="authNav">
          <PrimaryButton text="Meet my Team now !" icon={<GiAmericanFootballHelmet />} url="/register" />
        </div>
      </div>
    </nav>
  </>
);

export default HomeNavbar;
