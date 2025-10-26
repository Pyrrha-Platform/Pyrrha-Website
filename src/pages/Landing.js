import React from "react";
import Header from "../components/Header";
import { DeviceInfo, DashboardInfo, NetworkInfo } from "../components/Devices";
import Banner from "../components/Banner";
import WhoWeAre from "../components/WhoWeAre";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <WhoWeAre />
        <DeviceInfo />
        <DashboardInfo />
        <NetworkInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
