import "./TableContent.sass";
import { Link } from "react-router-dom";

import React from "react";

export default function TableContent(prop) {
  console.log(prop);
  return (
    <div className="TableContent">
      <Link to={`/cow/${prop.data.name}`}>
        <p>{prop.index}</p>
        <p>{prop.data.name}</p>
      </Link>
    </div>
  );
}
