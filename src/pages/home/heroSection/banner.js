import React from "react";
import BannerBg from "../../../assets/images/bannerbg.jpg";
import "./banner.css";
import GetGiveHelpModal from "./modal/getGiveHelpModal";

export default function Banner() {
  return (
    <>
      <div className=" theme-bg">
        <div className="d-flex container">
          <div className="col-5 row ms-5">
            <div className="text-banner my-auto  ">
              <p className="fs-4  bannerHead">A community is like a ship, everyone ought to be prepared to take the helm</p>
              <div className="butn  align-items-center  ">
                
                <GetGiveHelpModal />
                
              </div>
            </div>
          </div>
          <div className="bannerbg ">
            <img src={BannerBg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}
