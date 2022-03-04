import "./Menu.css";
import Dropdown from "./Dropdown";
import { useEffect } from "react";

export default function Menu({ z, a }) {
  const dtitle = [
    {
      title: "TITLE1",
      type: "WORKOUTS",
    },
    {
      title: "TITLE2",
      type: "FITNESS",
    },
    {
      title: "TITLE3",
      type: "FITNESS",
    },
  ];

  const workouts = dtitle.filter((d) => d.type === "WORKOUTS");
  const fitness = dtitle.filter((d) => d.type === "FITNESS");

  useEffect(() => {
    const setSideMenu = () => {
      z(!a);
    };
    return () => {
      z(false);
    };
  });

  return (
    <div className="ct">
      <div className="container header-container">
        <div className="logo">
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg"
            alt=""
          />
        </div>
        <div className="navbar">
          <ul className="menu">
            <Dropdown title="WORKOUTS" dropDown={workouts} />
            <Dropdown title="FITNESS" dropDown={fitness} />
            <Dropdown title="FITNESS" dropDown={fitness} />
            <Dropdown title="FITNESS" dropDown={fitness} />
            <Dropdown title="FITNESS" dropDown={fitness} />
            <Dropdown title="FITNESS" dropDown={fitness} />
          </ul>
        </div>
        <div className="logo1">
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo.svg"
            alt=""
          />
        </div>
        {/* <div onClick={setSideMenu} className="mobile-button"> */}
        <i class={a ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
    </div>
    // </div>
  );
}
