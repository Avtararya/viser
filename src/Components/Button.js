import React from "react";
import "./Button.css";

export default function Button({ text, color }) {
  return (
    <div>
      <div className="button">
        <button type="button" style={{ backgroundColor: color }}>
          {text}
        </button>
      </div>
    </div>
  );
}
