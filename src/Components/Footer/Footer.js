import React from "react";
import '../../styles/Footer.scss'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import faq from '../../assets/ayuda.png'


const Footer = () => {
  return (
    <div>
      <div className="row justify-content-center contacto" id="contacto">
        <div className="col-12 col-md-9 text-center">
          <h2 className="subtitulo">
            <span>Contactanos</span>
          </h2>
        </div>

        <div className="redes col-12 d-flex justify-content-center ">
          <a href="" className="redes-text">
            <img src={instagram} alt="" className="icono" />
            Instagram
          </a>
          <a href="" className="redes-text">
            <img src={whatsapp} alt="" className="icono" />
            whatsapp
          </a>
          <a href="" className="redes-text">
            <img src={faq} alt="" className="icono" />
            Faq
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
