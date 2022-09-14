import React from "react";
import "./NavigationBar.sass";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <div className="logo">
        <Link to="/" className="logotxt">
          Team Matrix
        </Link>
      </div>
      <Link className="nortxt" to="/allcow">
        All Cows
      </Link>
    </div>
  );
}
