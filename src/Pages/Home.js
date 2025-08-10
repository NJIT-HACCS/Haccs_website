import DanielWin from "../CarouselPics/DanielWin.JPG";
import Lim_Pres from "../CarouselPics/Lim_Pres.jpg";
import firstGBMFall from "../CarouselPics/firstGBMFall.jpg";
import InvolvementFair from "../CarouselPics/InvolvementFair.jpg";

import AliceCarousel from "react-alice-carousel";
import KeyboardDoubleArrowRightRounded from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRounded from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import "../carousel.css";
import home from "./home_style.module.css";
import mission from "../resources/images/mission.png"
import vision from "../resources//images/vision.png"
import { visionText } from "../resources/constants/HaccsConstants";
import { missionText } from "../resources/constants/HaccsConstants";
//import { processColor } from "react-native";


//Function where images will be imported 
// const Images = () => {
//   const [images, setImages] = useState([]);
// }

const HomePage = () => {
  return (
    <>
      <div className={home.app} style={{
          alignItems: 'center',
        }}
      >
        <AliceCarousel className={home.carousel}
          renderPrevButton={() => {
            return (
              <KeyboardDoubleArrowLeftRounded style={{ fontSize: "48px" }} />
            );
          }}
          renderNextButton={() => {
            return (
              <KeyboardDoubleArrowRightRounded style={{ fontSize: "48px" }} />
            );
          }}
          animationType="slide"
          keyboardNavigation="true"
          mouseTracking="true"
          infinite="true"
          autoPlay="true"
          autoPlayInterval={3000}
        >
          <img src={firstGBMFall} className={home.carousel} alt="pic" />
          <img src={Lim_Pres} className={home.carousel} alt="pic" />
          <img src={DanielWin} className={home.carousel} alt="pic" />
          <img src={InvolvementFair} className={home.carousel} alt="pic" />
        </AliceCarousel>
      </div>

    <div className="container">

      <div className={home.info}>

        <div className={home.icons}>
            <img src={vision} alt="HACCS vision statement"></img>
            <img src={mission} alt="HACCS mission statement"></img>
        </div>

        <div className={home.content}>

          <div className={home.vision}>
            <h1>Vision</h1>
            <div className={home.vision_text}>
              <p>{visionText}</p>
            </div>
          </div>

          <div className={home.mission}>
            <h1>Mission</h1>
            <div className={home.mission_text}>
              <p>{missionText}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
