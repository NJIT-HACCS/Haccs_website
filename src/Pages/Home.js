import DanielWin from "../CarouselPics/DanielWin.jpg";
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
import mission from "../resources/mission.png"
import vision from "../resources/vision.png"
//import { processColor } from "react-native";


console.log(firstGBMFall);
//Function where images will be imported 
// const Images = () => {
//   const [images, setImages] = useState([]);
// }


const media = require.context("../CarouselPics");
const imageUrls = [
  <img src={firstGBMFall} className={home.carousel}/>,
  <img src={Lim_Pres} className={home.carousel}/>
  
  // Add more image URLs as needed
];
const mediaList = media.keys().map((img)=>{

    const img_name = img.split("/").pop();


    return <img src={`../CarouselPics/${img_name}`} className={home.carousel} ></img>
})

console.log(mediaList);


const HomePage = () => {
  return (
    <>
      <div className={home.app}>
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
          items={mediaList}
        />
        
          
       
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
              <p>To enhance the college experience and professional development of
              Hispanic/Latino students in the Ying Wu College of Computing
              (YWCC) by providing resources such as workshops, technical
              interview prep, and fostering a supportive community. HACCS
              promotes career advancement, facilitates information exchange, and
              celebrates cultural diversity.</p>
            </div>
          </div>

          <div className={home.mission}>
            <h1>Mission</h1>
            <div className={home.mission_text}>
              <p>  We are committed to cultivating a strong community, encouraging
              cultural awareness, and providing resources to empower members as
              they pursue successful careers in computing. Through collaboration
              and engagement, we aim to amplify our impact and contribute to a
              more inclusive and diverse computing field.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
