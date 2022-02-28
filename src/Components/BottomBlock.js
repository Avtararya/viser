import React from "react";
import Button from "./Button";
import "./BottomBlock.css";

export default function BottomBlock() {
  return (
    <div>
      <div className="bottom-block">
        <div className="bottontext">
          <p>Ready to try a Fitness Blender workout?</p>
        </div>
        <div className="bottombtn">
          <Button text="GET STARTED TODAY" color="black" />
        </div>
      </div>
    </div>
  );
}
