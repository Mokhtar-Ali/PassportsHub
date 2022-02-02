import React from "react";
import Cairo from "../blogs/Cairo";
import { Jumbotron } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../style/egypt.css";

function Egypt() {
  return (
    <div className="egypt">
      <div className="egypt-headlines">
        <Jumbotron className="egypt-headlines" />
      </div>

      <div className="cities">
        <Cairo />
      </div>
    </div>
  );
}

export default Egypt;
