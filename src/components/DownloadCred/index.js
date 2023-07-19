import React from "react";
import Button from "../common/Button";
import "./downloadCred.css";

const DownloadCred = () => {
  return (
    <div className="download-cred-wrapper">
      <div className="flex absolute-center download-claim-label">
        <div>pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className="claim-anchor">
          claim now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
          />
        </div>
      </div>
      <div className="flex flex-col absolute-center download-cred max-width">
        <div className="download-heading">
          rewards for paying credit card bills.
        </div>
        <div className="download-subheading">
          join 7.5M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
};

export default DownloadCred;
