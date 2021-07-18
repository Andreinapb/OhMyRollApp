import React from "react";
import '../../styles/Banner.scss'

const Banner = () => {

    // const altura = document.body.scrollHeight - window.innerHeight;
    // const fondo = document.getElementById('fondo');
    
    // window.onscroll = () => {
    //     const anchoFondo = (window.pageYOffset / altura) * 700;
    //     if(anchoFondo <= 100){
    //         fondo.style.width = anchoFondo + '%';
    //     }
    // }
    
  return (
    <div>
      <div class="contenido-header">
        <div class="fondo" id="fondo">
          <h1 class="texto">OH MY ROLL</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
