import React from "react";
import Quito from "../blogs/Quito";
import Banos from "../blogs/Banos";
import { Jumbotron } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../style/colombia.css";
import Medellin from "../blogs/Medelin";

function Colombia() {
  return (
    <div className="colombia">
      <div className="colombia-headlines">
        <Jumbotron className="colombia-headlines" />
      </div>

      <div className="cities">
        <Medellin />
      </div>
    </div>
  );
}

export default Colombia;
