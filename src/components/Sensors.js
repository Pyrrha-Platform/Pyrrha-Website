import React, { useContext } from "react";
import board from "../content/assets/pyrrha-arch.jpg";
import AppContext from "../context/app";
import dash from "../content/assets/Pyrrha-dashboardSS.png";
import device from "../content/assets/pyrrha-device-opt.png";
import deviceFull from "../content/assets/pyrrha-device.png";
import test from "../content/assets/pyrrha-testing.png";
import { Grid, Row, Column } from "carbon-components-react";
import salome from "../content/assets/Salome-Valero.jpeg";
import marco from "../content/assets/Marco-Emilio-Rodriguez-Serrano.jpeg";
import joan from "../content/assets/Joan-Herrera.jpeg";
import artur from "../content/assets/Artur-Alvarez.jpeg";

const SensorInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="info-section">
        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("sensorTitle")}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t("sensorDescription1")}</h3>
          </Column>
        </Row>
        <Row className="info-textz">
          <Column lg={4}></Column>
          <Column lg={6}>
            <img
              className="sensor-image"
              src={board}
              alt="A 3D printed sensor"
            ></img>
          </Column>
        </Row>
        <Row className="info-textz">
          <Column lg={4}></Column>
          <Column lg={12} style={{ border: "1px" }}>
            <div className="archdescrip">
              <h4>{t("Arch-Description1")}</h4>
              <br />
              <h4>{t("Arch-Description2")}</h4>
              <br />
              <h4>{t("Arch-Description3")}</h4>
              <br />
              <h4>{t("Arch-Description4")}</h4>
              <br />
              <h4>{t("Arch-Description5")}</h4>
              <br />
              <h4>{t("Arch-Description6")}</h4>
              <br />
              <h4>{t("Arch-Description7")}</h4>
              <br />
              <h4>{t("Arch-Description8")}</h4>
              <br />
              <h4>{t("Arch-Description9")}</h4>
              <br />
              <h4>{t("Arch-Description10")}</h4>
              <br />
              <h4>{t("Arch-Description11")}</h4>
              <br />
            </div>
          </Column>
        </Row>

        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("sensorTitle1")}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t("sensorDescription2")}</h3>
            <Column lg={{ span: 6, offset: 0 }}>
              <a href={deviceFull}><img className="device" src={device} alt="Pyrrha device" /></a>
            </Column>
            <h3>{t("sensorDescription3")}</h3>
            <Column lg={{ span: 6, offset: 0 }}>
              <img className="dash" src={dash} alt="Prometeo dashboard"></img>
            </Column>
          </Column>
        </Row>

        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("sensorTitle2")}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t("sensorDescription4")}</h3>
            <Column lg={{ span: 6, offset: 0 }}>
              <img
                className="testing"
                src={test}
                alt="pyrrha testing pic"
              ></img>
            </Column>
            <div classname="tests">
              <h3>{t("TestingTarget")}</h3>
              <br />
              <h4>{t("TestingTargetA")}</h4>
              <h4>{t("TestingTargetB")}</h4>
              <h4>{t("TestingTargetC")}</h4>
              <br />
            </div>
            <div classname="results">
              <h3>{t("Results")}</h3>
              <br />
              <h4>{t("ResultsA")}</h4>
              <h4>{t("ResultsB")}</h4>
              <h4>{t("ResultsC")}</h4>
            </div>
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
          <Column lg={4}>
            <h2>{t("dashboardTitle")}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t("dashboardDescription")}</h3>
          </Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 12, offset: 3 }}>
            <div class="gallery">
              <img src={salome} alt="Salomé Valero"></img>
              <div class="desc">
                <p>Salomé Valero</p>
                <p>Chief Executive Officer</p>
                <p>Co-Founder</p>
              </div>
            </div>
            <div class="gallery">
              <img src={marco} alt="Marco Emilio Rodríguez Serrano" />
              <div class="desc">
                <p>Marco Emilio Rodríguez Serrano</p>
                <p>Chief Technology Officer</p>
                <p>Co-Founder</p>
              </div>
            </div>
            <div class="gallery">
              <img src={joan} alt="Joan Herrera" />
              <div class="desc">
                <p>Joan Herrera</p>
                <p>Chief Operating Officer</p>
                <p>Co-Founder</p>
              </div>
            </div>
            <div class="gallery">
              <img src={artur} alt="Artur Álvarez" />
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
      {" "}
      <Grid className="info-section">
        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("networkTitle")}</h2>
          </Column>
          <Column lg={8}>
            <h4>{t("networkDescription1")}</h4>
            <h4>{t("networkDescription2")}</h4>
            <h4>{t("networkDescription3")}</h4>
            <h4>{t("networkDescription4")}</h4>
            <h4>{t("networkDescription5")}</h4>
          </Column>
          <Column lg={{ span: 3, offset: 1 }}>

          </Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 11, offset: 4 }}>

          </Column>
        </Row>
      </Grid>
    </section>
  );
};

export { SensorInfo, DashboardInfo, NetworkInfo };
