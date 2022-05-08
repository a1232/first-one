import React from "react";
import { MdDehaze } from "react-icons/md";
import image from "../../../resources/images/a1.jpg";

import "./toolbar.css";
function Toolbar() {
  return (
    <div className="toolbar">
      <div>
        <MdDehaze />
      </div>
      <div>
        <input type="text" />
      </div>
      <img src={image} alt="images" height="50px" width="50px" />
    </div>
  );
}
export default Toolbar;
