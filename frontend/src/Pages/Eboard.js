import React from "react";
//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import eboard from "./eboard_style.module.css";

const images = require.context("../Photos_Eboard_2", true);


//Sorts and cretaes an image Object that can be returned with URL and Name
const imageList = images.keys().sort().map((image) => {
  const img_url = images(image);
  //Just get the names of each image added
  const img_name = image
    .split("/")
    .pop()
    .replace(/\.jpg$/, "");
  return { url: img_url, name: img_name };
});

//Dictionary of Linkedins
const linkedins_and_names = {
  Rafael: {
    Position: "Web Master",
    Linkedin: "https://www.linkedin.com/in/rafael--abreu/",
  },
  Angel: {
    Position: "President",
    Linkedin: "https://www.linkedin.com/in/angel-cazares-aa655926a/",
  },
  Gabriel: {
    Position: "Internal Vice President",
    Linkedin: "https://www.linkedin.com/in/gabriel-orbe/",
  },
  Tammy: {
    Position: "External Vice President",
    Linkedin: "https://www.linkedin.com/in/tammy-pelaez/"
  },
  Emily: {
    Position: "Educational Coordinator",
    Linkedin: "https://www.linkedin.com/in/emily-morales-medina/",
  },
  Daniel: {
    Position: "Secretary",
    Linkedin: "https://www.linkedin.com/in/daniel-montoya-970488266/",
  },
  Jason:
  {
    Position: "Treasurer",
    Linkedin: "https://www.linkedin.com/in/jason-morales-d/"
  },
  Marcel:
  {
    Position: "Marketing Lead",
    Linkedin: "https://www.linkedin.com"
  },
  Sarah:
  {
    Position: "Public Relations",
    Linkedin: "https://www.linkedin.com"
  },
  Charlie:
  {
    Position: "Designer",
    Linkedin: "https://www.linkedin.com/in/charles-filian-58534b284/"
  }
};

imageList.forEach((imageObj) => {
  console.log("URL:", imageObj.url);
  console.log("Name:", imageObj.name);})

const Eboard = () => {
  console.log(imageList);
  console.log(linkedins_and_names);
  return (
    <>
    
      <head>
        <title>Eboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      
      <body>
        <h1 className={eboard.haccs}>Meet Our Eboard 2023-2024</h1>
  
        <div className={eboard.President}>
          <h1 id="Position">{linkedins_and_names[imageList[0].name].Position}</h1>
            <div>
              <a className={eboard.link} href={linkedins_and_names[imageList[0].name].Linkedin} target="_blank" rel="noreferrer">
              <img src={imageList[0].url} className={eboard.main_img} alt="pic"></img></a>
            </div>

          <p id="Name" className={eboard.name}>{imageList[0].name}</p>
        </div>
        
        <div className={eboard.container}>
          
          <div className={eboard.Member}>
            <h1 id="Position">{linkedins_and_names[imageList[4].name].Position}</h1>
              <div>
                <a className={eboard.link} href={linkedins_and_names[imageList[4].name].Linkedin} target="_blank" rel="noreferrer">
                <img src={imageList[4].url} className={eboard.main_img} alt="pic"></img></a>
              </div>
            <p id="Name" className={eboard.name}>{imageList[4].name}</p>
          </div>
    
          <div className={eboard.Member}>
            <h1 id="Position">{linkedins_and_names[imageList[9].name].Position}</h1>
              <div>
                  <a className={eboard.link} href={linkedins_and_names[imageList[9].name].Linkedin} target="_blank" rel="noreferrer">
                  <img src={imageList[9].url} className={eboard.main_img} alt="pic"></img></a>
              </div>
            <p id="Name" className={eboard.name}>{imageList[9].name}</p>
          </div>
            
          <div className={eboard.Member}>
            <h1 id="Position">{linkedins_and_names[imageList[2].name].Position}</h1>
              <div> 
                <a className={eboard.link} href={linkedins_and_names[imageList[2].name].Linkedin} target="_blank" rel="noreferrer">
                <img src={imageList[2].url} className={eboard.main_img} alt="pic"></img></a>
              </div>
            <p id="Name" className={eboard.name}>{imageList[2].name}</p>
          </div>

          <div className={eboard.Member}>
            <h1 id="Position">{linkedins_and_names[imageList[3].name].Position}</h1>
              <div>
                <a className={eboard.link} href={linkedins_and_names[imageList[3].name].Linkedin} target="_blank" rel="noreferrer">
                <img src={imageList[3].url} className={eboard.main_img} alt="pic"></img></a>
              </div>
            <p id="Name" className={eboard.name}>{imageList[3].name}</p>
          </div>

          <div className={eboard.Member}>
              <h1 id="Position">{linkedins_and_names[imageList[8].name].Position}</h1>
                <div>
                  <a className={eboard.link} href={linkedins_and_names[imageList[8].name].Linkedin} target="_blank" rel="noreferrer">
                  <img src={imageList[8].url} className={eboard.main_img} alt="pic"></img></a>
                </div>
              <p id="Name" className={eboard.name}>{imageList[8].name}</p>
            </div>

          <div className={eboard.Member}>
            <h1 id="Position">{linkedins_and_names[imageList[6].name].Position}</h1>
              <div>
                <a className={eboard.link} href={linkedins_and_names[imageList[6].name].Linkedin} target="_blank" rel="noreferrer">
                <img src={imageList[6].url} className={eboard.main_img} alt="pic"></img></a>
              </div>
            <p id="Name" className={eboard.name}>{imageList[6].name}</p>
          </div>

          <div className={eboard.Member}>
            <h1 id="Position">{linkedins_and_names[imageList[1].name].Position}</h1>
              <div>
                <a className={eboard.link} href={linkedins_and_names[imageList[1].name].Linkedin} target="_blank" rel="noreferrer">
                <img src={imageList[1].url} className={eboard.main_img} alt="pic"></img></a>
              </div>
            <p id="Name" className={eboard.name}>{imageList[1].name}</p>
          </div>

          <div className={eboard.Member}>
            <h1 id="Position">{linkedins_and_names[imageList[7].name].Position}</h1>
              <div>
                <a className={eboard.link} href={linkedins_and_names[imageList[7].name].Linkedin} target="_blank" rel="noreferrer">
                <img src={imageList[7].url} className={eboard.main_img} alt="pic"></img></a>
              </div>
            <p id="Name" className={eboard.name}>{imageList[7].name}</p>
          </div>
        </div>
        
        <div className={eboard.President}>
            <h1 id="Position">{linkedins_and_names[imageList[5].name].Position}</h1>
              <div>
                <a className={eboard.link} href={linkedins_and_names[imageList[5].name].Linkedin} target="_blank" rel="noreferrer">
                <img src={imageList[5].url} className={eboard.main_img} alt="pic"></img></a>
              </div>
            <p id="Name" className={eboard.name}>{imageList[5].name}</p>
          </div>
      </body>
  
    </>

  );
};


//make sure that links are adding dynamically to each image based on the names
export default Eboard;
