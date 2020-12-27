import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div id="loading">
      {/* <!-- bouncing balls --> */}
      <div class="bouncer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
