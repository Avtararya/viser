import React from "react";
import "./Banner.css";
import Box from "./Box";

export default function Banner() {
  return (
    <div className="Banner">
      <div className="banner-image">
        <img
          src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="img-text">
          <p>Workout videos for every fitness level. Absolutely free.</p>
        </div>
      </div>
      <div class="blank">
        <Box />
      </div>
    </div>
  );
}
