import React, { Component } from "react";
import Widecard from "../components/Widecard";
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="B.Tech ECE"
          where="MG University"
          from="July 2012"
          to="July 2016"
        />
        <Widecard
          title="SSLC | HSC"
          where="Nava Nirman Higher Secondary School"
          from="2010"
          to="2012"
        />
      </div>
    );
  }
}
export default Education;
