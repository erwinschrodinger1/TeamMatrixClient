import "./TableContent.sass";
import { Link } from "react-router-dom";
import Cow from "../../../cow.png";

import React from "react";

export default function TableContent(prop) {
  console.log(prop);
  return (
    <div className="TableContent">
      <Link to={`/cow/${prop.data.name}`} className="table">
        <p>{prop.index + 1}</p>
        <p>{prop.data.name}</p>
      </Link>
      <img src={Cow} alt="cow" width={64} />
    </div>
  );
}
