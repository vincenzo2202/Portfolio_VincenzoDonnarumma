import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


import './Home.css';
import './About.css';
import './Project.css';
import './Contact.css';

import image from '../../assets/vin1.png';
import github from '../../assets/github.png';
import linkedIn from '../../assets/lnkdIn.png';



export const Home = () => {



    return (
        <>
            <div className='home-body'>
                <div className='title-home'>
                    <div className='home-image' draggable="true"><img className='home-image' src={image} alt="home" />  </div>
                    <div className='title-name'>Vincenzo Donnarumma</div>
                    <div className='button-home'>MIRA LO QUE HE HECHO</div>
                </div>
            </div>
            <div className='about-me'>
                <div className='left-box'>
                    <div className='saludo-about'>HOLA, SOY VINCENZO.</div>
                    <div className='title-about'>Programador Full Stack</div>
                </div>
                <div className='right-box'>

                    <div className='info-about'> Soy Vincenzo Donnarumma, y comencé mi viaje en la programación en 2023. Durante el último año, me he sumergido en el aprendizaje autodidacta y, para dar un impulso a mi carrera, realicé mi formación en el bootcamp de Desarrollo Full Stack en GeeksHubs Academy, graduándome en diciembre de 2023.
                        <br />
                        <br />
                        Además de mi pasión por la tecnología, también he adquirido conocimientos en marketing digital, fusionando así dos mundos afines. Disfruto de la interacción social y los desafíos emprendedores.
                        <br />
                        <br />
                        ¡Gracias por pasar por aquí! Espero que disfrutes lo que encuentres. Si tienes alguna pregunta o simplemente quieres charlar, ¡estaré encantado de escucharte! </div>
                    <div className='button-about'>MIRA LO QUE HE HECHO</div>
                </div>
            </div>
            <div className='projects'>
                <div className='projects-title'>Algunos  Proyectos</div>
                <div className='carousel-projects'>
                    <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
                        <div>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={image} alt="home" />
                            </h3>
                        </div>
                        <div>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={image} alt="home" />
                            </h3>
                        </div>
                        <div>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={image} alt="home" />
                            </h3>
                        </div>
                        <div>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={image} alt="home" />
                            </h3>
                        </div>
                        <div>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={image} alt="home" />
                            </h3>
                        </div>
                        <div>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={image} alt="home" />
                            </h3>
                        </div>
                    </Carousel>
                </div>
                <div className='see-more'>
                    <div class="shadow__btn">
                        VER TODOS
                    </div>
                </div>
            </div>
            <div className='contact'>
                <div className='message'>¡Hagamos algo genial!</div>
                <div className='box-contact'>
                    <div className='left-contact'>
                        <div className='contact-title'>CONTACTO</div>
                        <div className='email' draggable='false'>vincenzodonnarumma22@gmail.com</div>
                        <div className='phone'>+34 722-760-606</div>
                    </div>
                    <div className='right-contact'>
                        <div className='seguir-title'>SEGUIR</div>
                        <a className='github' href='https://github.com/vincenzo2202' target='_blank' rel='noopener noreferrer'>
                            <img className='github' src={github} alt="github" />
                            <div className='github-title'>GitHub</div>
                        </a>
                        <a className='linkedIn' href='https://www.linkedin.com/in/vincenzo2202' target='_blank' rel='noopener noreferrer'>
                            <img className='linkedIn' src={linkedIn} alt="linkedIn" />
                            <div className='linkedIn-title'>LinkedIn</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}; 
