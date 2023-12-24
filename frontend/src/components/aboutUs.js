// AboutUs.js
import React from "react";
import "../styling/aboutUs.css";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="div">
        <div className="group">
          <img className="frame" alt="Frame1" src={"../assets/reborn.png"} />
          <p className="mafia-about">Mudah, Aman, Terpercaya!</p>
          <p className="text-wrapper">
            Passionate about sustainability and driving the future of transportation
          </p>
        </div>
        <div className="group-2">
          <p className="p">
            Mobilnya banyak banget pilihannya, harga bersaing, drivernya ramah dan berpengalaman!
          </p>
          <p className="text-wrapper-2">Tri Suaka</p>
          <img className="img" alt="Frame2" src="../assets/person.png" />
        </div>
        <div className="group-3">
          <p className="text-wrapper-3">
            Mafia Rent Car mantap. mobilnya nyaman, bersih, ditambah ada welcome drink juga! pokoknya best lah!
          </p>
          <div className="data-kos-seluruh">
            Cipung Abubu
          </div>
          <img className="frame2" alt="Frame3" src="./assets/cipung.jpg" />
        </div>
        
        <div className="komputer-wrapper">
          <img className="komputer" alt="Komputer" src=".\assets\porshe.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
