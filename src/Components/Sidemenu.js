import { useEffect } from "react";
import "./Sidemenu.css";

const Sidemenu = ({ z, a }) => {
  const dtitle = [
    {
      title: "TITLE1",
      type: "WORKOUTS",
    },
    {
      title: "TITLE2",
      type: "WORKOUTS",
    },
    {
      title: "TITLE3",
      type: "FITNESS",
    },
    {
      title: "TITLE1",
      type: "WORKOUTS",
    },
    {
      title: "TITLE2",
      type: "WORKOUTS",
    },
    {
      title: "TITLE3",
      type: "FITNESS",
    },
    {
      title: "TITLE1",
      type: "WORKOUTS",
    },
    {
      title: "TITLE2",
      type: "WORKOUTS",
    },
    {
      title: "TITLE3",
      type: "FITNESS",
    },
  ];

  const workouts = dtitle.filter((d) => d.type === "WORKOUTS");
  const fitness = dtitle.filter((d) => d.type === "FITNESS");
  return (
    <div className={a ? "Sidemenu" : "hide"}>
      <div className="search">
        <h2>Search</h2>
      </div>
      <div className="side-content">
        {workouts.map((w) => {
          return (
            <div className="side-section">
              <p className="title">WORKOUTS</p>
              <span>
                <p>{w.title}</p>
                <p>{w.title}</p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidemenu;
