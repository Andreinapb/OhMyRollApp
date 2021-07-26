import React from 'react';
import'../../styles/Recomendaciones.scss';
import tiempo from '../../assets/tiempo.png';
import exclamacion from '../../assets/exclamacion.png';
import regalo from '../../assets/regalo.png';


const Recomendaciones = () => {
    return (
        <div>
                   <div class="container" id="recomendaciones">
            <div class="row recomendaciones d-flex justify-content-around">
                <article class="col-10 col-sm-3">
                    <figure class="text-center">
                        <img class="icono" src={tiempo} alt=""/>
                        <figcaption>
                            <p>
                                <strong class="mb-2 titulo-recomendacion">Tibio es mas rico</strong>
                                <div class="w-100">Caliéntalos 15 segundos en el micro</div>
                            </p>
                        </figcaption>
                    </figure>
                </article>

                <article class="col-10 col-sm-3">
                    <figure class="text-center">
                        <img class="icono" src={exclamacion} alt=""/>
                        <figcaption>
                            <p>
                                <strong class="mb-2 titulo-recomendacion">Disfrutálos como te gusten</strong>
                                <div class="w-100"></div>
                                Si no te gustan tan dulces, te recomiendo no ponerle el frosting
                            </p>
                        </figcaption>
                    </figure>
                </article>

                <article class="col-10 col-sm-3">
                    <figure class="text-center">
                    <img class="icono" src={regalo} alt=""/>
                        <figcaption>
                            <p>
                                <strong class="mb-2 titulo-recomendacion">Te tengo un regalo</strong>
                                <div class="w-100"></div>
                                Por cada amigo que refieras, te llevarás una bandeja de 8 rolls por el precio de la de 6
                                rolls
                            </p>
                        </figcaption>
                    </figure>
                </article>
            </div>
        </div> 
        </div>
    )
}

export default Recomendaciones
