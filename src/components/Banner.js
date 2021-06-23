import React, { useContext } from 'react';
import Pyrrha_logo from '../content/assets/Pyrrha_torch.png';
import landscape from '../content/assets/Prometeo_header.jpg'

import AppContext from '../context/app';

const Banner = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="landing__banner">
      <div className="landing__openEEW">
        <div className="landing__openEEWWrapper">
          <img src={Pyrrha_logo} alt="OpenEEW Logo" />
          <h1>Pyrrha</h1>
        </div>
        
      </div>
      <div className="landing__mission">
        <h2>{t('bannerMission')}</h2>
      </div>
      
    </section>
    
  );
};

export default Banner;
