import React from "react";
import "./Jumbotron.scss";


const Jumbotron = ({ children }) => (
    <div className="jumbotron">
      {children}
      <h1>Plan A Date
      </h1>
    </div>
  );


export default Jumbotron;