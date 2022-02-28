import React from "react";
import "./Block.css";
import Button from "./Button";

export default function Block({ imagesrc, color }) {
  return (
    <>
      <div className="Block1" style={{ backgroundColor: color }}>
        <div className="block-ctn1">
          <div className="content1 ">
            <h1>Lorem Lorem Lorem </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus voluptate at, consequatur ipsa dolore perferendis
              debitis fugit, quasi deserunt expedita ipsam eius officiis iusto
              vel minima et cumque? Illo, aliquam! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Necessitatibus voluptate at,
              consequatur ipsa dolore perferendis debitis fugit, quasi deserunt
              expedita ipsam eius officiis iusto vel minima et cumque? Illo,
              aliquam!
            </p>
          </div>
          <div className="image1">
            <img src={imagesrc} alt="" />
          </div>
        </div>
        <div className="btn-1">
          <Button text="join now" color="#5999c0" />
        </div>
      </div>
    </>
  );
}

/* <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lato"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div >
        <div>
        

          <div className="">
            <i className=""></i>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-third w3-center">
            <i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
          </div>

          <div className="w3-twothird">
            <h1>Lorem Ipsum</h1>
            <h5 className="w3-padding-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h5>

            <p className="w3-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-third w3-center">
            <i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>

            <h5 className="w3-padding-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h5>

            <p className="w3-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="w3-third w3-center">
            <i className="fa fa-anchor w3-padding-64 w3-color-red"></i>
          </div>
          
        </div>
      </div>
      // 

      <div className="w4-container w3-linear-gradient(-225deg,#00daff 0%,#4296cb 100%) w3-center w3-opacity w3-padding-64 bg-primery">
        <h1 className="w4-margin w3-xlarge">Quote of the day: live life</h1>
     


<input type="button" class="button" value="Input Button"></input>
      </div> */
