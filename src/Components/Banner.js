import React from "react";
import "./Banner.css";
import Box from "./Box";

export default function Banner() {
  return (
    <div className="Banner">
      <div className="banner-image">
        <img
          src="https://d18zdz9g6n5za7.cloudfront.net/home/home-masthead-20201031-1340.webp"
          alt=""
        />
        <div className="img-text">
          <p>Workout videos for every fitness level. Absolutely free.</p>
        </div>
      </div>
      <div class="blank">
        <h1>1</h1>
      </div>
      <Box />
    </div>
  );
}
