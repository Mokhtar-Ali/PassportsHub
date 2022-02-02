import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Colombia from "./pics/Colombia/Colombia.jpg";
import Colombia from "../pics/Colombia/Colombia.jpg";
import Ecuador from "../pics/Ecuador/quito-main.jpg";
import Egypt from "../pics/Egypt/Pyramids.jpg";
import { Link } from "react-router-dom";

export default function Container() {
  return (
    // gird bootstrap column
    <div style={{ height: "650px", width: "100%", display: "flex" }}>
      <div
        className="cities"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/cities/:id" style={{ margin: "20px" }}>
          <img src={Colombia} height="400px" width="400px" />
          <p className="legend">Colombia</p>
        </Link>
        <Link to="/cities/:id" style={{ margin: "20px" }}>
          <img src={Ecuador} height="400px" width="400px" />
          <p className="legend">Ecuador</p>
        </Link>
        <Link to="/cities/:id" style={{ margin: "20px" }}>
          <img src={Egypt} height="400px" width="400px" />
          <p className="legend">Egypt</p>
        </Link>
        <Link to="/cities/:id" style={{ margin: "20px" }}>
          <img src={Egypt} height="400px" width="400px" />
          <p className="legend">Peru</p>
        </Link>
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
