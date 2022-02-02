import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Colombia from "./pics/Colombia/Colombia.jpg";
import Colombia from "../pics/Colombia/Colombia.jpg";
import Ecuador from "../pics/Ecuador/quito-main.jpg";
import Egypt from "../pics/Egypt/Pyramids.jpg";

export default function Container() {
  return (
    <div style={{ height: "650px", width: "100%", display: "flex" }}>
      <div
        className="countries"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <img src={Colombia} height="400px" width="400px" />
          <p className="legend">Colombia</p>
        </div>
        <div>
          <img src={Ecuador} height="400px" width="400px" />
          <p className="legend">Ecuador</p>
        </div>
        <div>
          <img src={Egypt} height="400px" width="400px" />
          <p className="legend">Egypt</p>
        </div>
        <div>
          <img src={Egypt} height="400px" width="400px" />
          <p className="legend">Peru</p>
        </div>
        {/* <Carousel>
          <div>
            <img src={Colombia} height="400px" width="400px" />
            <p className="legend">Colombia</p>
          </div>
          <div>
            <img src={Ecuador} />
            <p className="legend">Ecuador</p>
          </div>
          <div>
            <img src={Egypt} />
            <p className="legend">Egypt</p>
          </div>
        </Carousel> */}
      </div>
      {/* <div className="latest-travel"> Latest Travels</div> */}
    </div>
  );
}
