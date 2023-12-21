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
            Lorem ipsum
          </p>
          <p className="text-wrapper-2">John Cena</p>
          <img className="img" alt="Frame2" src="../assets/person.png" />
        </div>
        <div className="group-3">
          <p className="text-wrapper-3">
            Mafia Rent Car mantap. mobilnya nyaman, bersih, ditambah ada welcome drink juga! pokoknya best lah!
          </p>
          <div className="data-kos-seluruh">
            Data Kos Mencakup Seluruh Surabaya
          </div>
          <img className="frame2" alt="Frame3" src="./assets/person.png" />
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-4">Contact us on:</div>
            <div className="group-4">
              {/* Tambahkan tombol-tombol sosial media */}
              <a href="https://www.instagram.com/adibdaffa_" target="_blank" rel="noopener noreferrer">
                <img className="instagram" alt="Instagram" src="./assets/instagram.png" />
              </a>
              <a href="https://www.facebook.com/akun_facebook_anda" target="_blank" rel="noopener noreferrer">
                <img className="facebook" alt="Facebook" src="./assets/github.png" />
              </a>
              <a href="https://wa.me/6281239070425" target="_blank" rel="noopener noreferrer">
                <img className="whatsapp" alt="Whatsapp" src="./assets/whatsapp.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="komputer-wrapper">
          <img className="komputer" alt="Komputer" src=".\assets\porshe.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
