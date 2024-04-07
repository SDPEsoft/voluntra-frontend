import React from "react";
import NavigationBar from "../components/layouts/Navbar";
import BannerSection from "../components/home-page/BannerSection";
import FeatureOpportunities from "../components/home-page/FeatureOpportunities";
import FeatureCommunityGatherings from "../components/home-page/FeatureCommunityGatherings";
import Footer from "../components/layouts/Footer";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />

      <BannerSection />

      <FeatureOpportunities />

      <FeatureCommunityGatherings />

      <Footer />
    </div>
  );
};

export default HomePage;
