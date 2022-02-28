import React from "react";

export default function Block1({ imagesrc, color }) {
  return (
    <div>
      <div className="Block2" style={{ backgroundColor: color }}>
        <div className="image2">
          <img src={imagesrc} alt="" />
        </div>
        <div className="content2 ">
          <h1>Lorem Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus voluptate at, consequatur ipsa dolore perferendis
            debitis fugit, quasi deserunt expedita ipsam eius officiis iusto vel
            minima et cumque? Illo, aliquam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Necessitatibus voluptate at,
            consequatur ipsa dolore perferendis debitis fugit, quasi deserunt
            expedita ipsam eius officiis iusto vel minima et cumque? Illo,
            aliquam!
          </p>
        </div>
      </div>
    </div>
  );
}
