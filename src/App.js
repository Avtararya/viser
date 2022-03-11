import "./App.css";
import Footer from "./Components/Footer";
import Block from "./Components/Block";
import Block1 from "./Components/Block1";
import Banner from "./Components/Banner";
import BottomBlock from "./Components/BottomBlock";
import Black1 from "./Components/Black1";
import Menu from "./Components/Menu";
import Sidemenu from "./Components/Sidemenu";

import { useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <Menu z={setShowButton} a={showButton} />
      {/* <Sidemenu z={setShowButton} a={showButton} /> */}
      <Banner />
      {/* <Block
        imagesrc="https://d18zdz9g6n5za7.cloudfront.net/home/feature-1.jpg"
        color="white"
      /> */}

      {/* <Block1
        imagesrc="https://cloudfront.fitnessblender.com/assets/img/fbplus/fbplus-what-is-2020.jpg "
        color="white"
      /> */}
      <Black1 />
      {/* <Block1
        imagesrc="https://d18zdz9g6n5za7.cloudfront.net/home/home-testimonial.jpg"
        color="#F2F6F9"
      /> */}
      <BottomBlock />
      <Footer />
    </>
  );
}

export default App;
