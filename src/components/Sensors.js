import React, { useContext } from 'react';
import { Grid, Row, Column} from 'carbon-components-react';
import board from '../content/assets/pyrrha-arch.jpg';
// import nodeGray from '../content/assets/Prometeo-device.jpg';
// import dashboard from '../content/assets/dash.jpg';
import salome from '../content/assets/Salome-Valero.jpeg'
import marco from '../content/assets/Marco-Emilio-Rodriguez-Serrano.jpeg'
import joan from '../content/assets/Joan-Herrera.jpeg'
import Artur from '../content/assets/Artur-Alvarez.jpeg'
// import hazardmap from '../content/assets/Prometeo-ack.jpg';
import AppContext from '../context/app';

const SensorInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="info-section">
        <Row className="info-text">
          {/* TODO: Get text from json. */}
          <Column lg={4}>
            <h2>{t('sensorTitle')}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t('sensorDescription1')}</h3>
            
          </Column>
          <Column lg={{ span: 3, offset: 1 }}>
           
          </Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 6, offset: 4 }}>
            <img
              className="sensor-image"
              src={board}
              alt="A 3D printed sensor"
            ></img>
            <div>
            <h4>{t('Arch-Description1')}</h4>
            <h4>{t('Arch-Description2')}</h4>
            <h4>{t('Arch-Description3')}</h4>
            <h4>{t('Arch-Description4')}</h4>
            <h4>{t('Arch-Description5')}</h4>
            <h4>{t('Arch-Description6')}</h4>
            <h4>{t('Arch-Description7')}</h4>
            <h4>{t('Arch-Description8')}</h4>
            <h4>{t('Arch-Description9')}</h4>
            <h4>{t('Arch-Description10')}</h4>
            <h4>{t('Arch-Description11')}</h4>
            </div>

            <h3>{t('sensorDescription2')}</h3>
            <h3>{t('sensorDescription3')}</h3>
            <h3>{t('sensorDescription4')}</h3>

          </Column>
        </Row>
      </Grid>
      
    </section>
    
  );
};

const DashboardInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="info-section">
        <Row className="info-text">
          {/* TODO: Get text from json. */}
          <Column lg={4}>
            <h2>{t('dashboardTitle')}</h2>
          </Column>
          <Column lg={12}>
            <h3>{t('dashboardDescription')}</h3>

          </Column>
          <Column lg={{ span: 3, offset: 1 }}>
            {/* <Button
              onClick={() => {
                window.open(
                  'https://github.com/openeew/openeew/wiki/Getting-Involved',
                  '_blank',
                  'noopener'
                );
              }}
              kind="secondary"
            >
              {t('dashboardButtonText')}
            </Button> */}
          </Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 12, offset: 3 }}>
            <div class="gallery">
              <img 
               src ={salome}
               alt ="Salome valero"
              ></img>
                <div class="desc">
                  <p>Salomé Valero </p>
                  <p>Chief Executive Officer </p>
                  <p>Co-Founder</p>
              </div>
           </div>

            <div class="gallery">
              <img 
                src ={marco}
                alt ="Marco Emilio Rodriquez Serrano"
              ></img>
                <div class="desc">
                  <p>Marco Emilio Rodríguez Serrano</p> 
                  <p> Chief Technology Officer </p>
                  <p>Co-Founder</p>
               </div>
           </div>

           <div class="gallery">
              <img 
                src ={joan}
                alt = "Joan Herrera"
              ></img>
                <div class="desc">
                  <p>Joan Herrera </p>
                  <p>Chief Operating Officer</p>
                  <p>Co-Founder</p>
              </div>
           </div>

            <div class="gallery">
              <img 
                src ={Artur}
                alt = "Artur Alvarez" 
              ></img>
                <div class="desc">
                  <p>Artur Álvarez</p>
                  <p>Media Producer</p>
                  <p>Co-Founder</p>
              </div>
           </div>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

const NetworkInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      {' '}
      <Grid className="info-section">
        <Row className="info-text">
          {/* TODO: Get text from json. */}
          <Column lg={4}>
            <h2>{t('networkTitle')}</h2>
          </Column>
          <Column lg={9}>
            <h4>{t('networkDescription1')}</h4>
            <h4>{t('networkDescription2')}</h4>
            <h4>{t('networkDescription3')}</h4>
            <h4>{t('networkDescription4')}</h4>
            <h4>{t('networkDescription5')}</h4>
            <h4>{t('networkDescription6')}</h4>

          </Column>
          <Column lg={{ span: 3, offset: 1 }}>
            {/* <Button
              onClick={() => {
                window.open(
                  'https://github.com/openeew/openeew/wiki/Build-a-Network',
                  '_blank',
                  'noopener'
                );
              }}
              kind="secondary"
            >
              {t('networkButtonText')}
            </Button> */}
          </Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 11, offset: 4 }}>
            {/* <img
              className="dashboard-image"
              src={hazardmap}
              alt="Earthquake hazard map"
            ></img> */}
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

export { SensorInfo, DashboardInfo, NetworkInfo };
