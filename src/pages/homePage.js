import React from "react";
import AppRating from "../components/AppRating";
import BrandsLove from "../components/BrandsLove";
import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";
import DownloadCred from "../components/DownloadCred";
import ExploreRewards from "../components/ExploreRewards";

const HomePage = () => {
  return (
    <>
      <Header />
      <DownloadCred />
      <ProductShowcase />
      <ExploreRewards />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
