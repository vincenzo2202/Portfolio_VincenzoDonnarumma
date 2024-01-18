import React, { useEffect, useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
    FaHtml5,
    FaCss3,
    FaBootstrap,
    FaReact,
    FaNode,
    FaPhp,
    FaLaravel,
    FaGitAlt,
    FaGithub,
    FaDocker,
    FaAws
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiExpress, SiMongodb, SiPostman } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { PiFileSqlDuotone } from 'react-icons/pi';

import './Home.css';
import './About.css';
import './Project.css';
import './Contact.css';
import './Stack.css';

import image from '../../assets/vin1.png';
import github from '../../assets/github.png';
import linkedIn from '../../assets/LnkdIn.png';
import malcriada from '../../assets/malcriada.png';
import mastermind from '../../assets/mastermind.png';
import videoconsola from '../../assets/videoconsola.png';
import geekzone from '../../assets/geekzone.png'; 

export const Home = () => {

    const about = useRef(null);
    const projects = useRef(null);

    const handleScrollToSection = (targetRef) => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='home-body'>
                <div className='title-home'>
                    <div className='home-image' draggable='true'><img className='home-image' src={image} alt='home' />  </div>
                    <div className='title-name'>Vincenzo Donnarumma</div>
                    <div className='button-home' onClick={() => handleScrollToSection(about)}>DESCUBRE MÁS</div>
                </div>
            </div>
            <div className='about-me' >
                <div className='left-box'>
                    <div className='saludo-about' ref={about}>HOLA, SOY VINCENZO.</div>
                    <div className='title-about'>Programador Full Stack</div>
                    <div className='button-about' onClick={() => handleScrollToSection(projects)} >MIRA LO QUE HE HECHO</div>
                </div>
                <div className='right-box'>
                    <div className='info-about'> Soy Vincenzo Donnarumma, y comencé mi viaje en la programación en 2023. Durante el último año, me he sumergido en el aprendizaje autodidacta y para dar un impulso a mi carrera, realicé mi formación en el bootcamp de Desarrollo Full Stack en GeeksHubs Academy, graduándome en diciembre de 2023.
                        <br />
                        <br />
                        Además de mi pasión por la tecnología, también he adquirido conocimientos en marketing digital, fusionando así dos mundos afines. Disfruto de la interacción social y los desafíos emprendedores.
                        <br />
                        <br />
                        ¡Gracias por pasar por aquí! Espero que disfrutes lo que encuentres. Si tienes alguna pregunta o simplemente quieres charlar, ¡estaré encantado de escucharte! </div>

                </div>
            </div>
            <div className='projects' >
                <div className='projects-title' ref={projects}>Algunos  Proyectos</div>
                <div className='carousel-projects'>
                    <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
                        <a href='https://github.com/vincenzo2202/Tattoo-Studio-Frontend-' target='_blank' rel='noopener noreferrer'>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={malcriada} alt='home' />
                            </h3>
                        </a>
                        <a href='https://github.com/vincenzo2202/MasterMind-GH-project2' target='_blank' rel='noopener noreferrer'>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={mastermind} alt='home' />
                            </h3>
                        </a>
                        <a href='https://github.com/vincenzo2202/Proyecto2GHVideoconsola' target='_blank' rel='noopener noreferrer'>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={videoconsola} alt='home' />
                            </h3>
                        </a>
                        <a href='https://github.com/vincenzo2202/geek-zone-GH-frontend' target='_blank' rel='noopener noreferrer'>
                            <h3 className='contentStyle'>
                                <img className='project-carousel' src={geekzone} alt='home' />
                            </h3>
                        </a>
                    </Carousel>
                </div>
                <div className='see-more'>
                    <div class='shadow__btn' >
                        VER TODOS
                    </div>
                </div>
            </div>
            <div className='stack'>
                <div className='stack-container'>
                    <div className='contentSkillsTitle'>Stack Tecnológico</div>
                    <div className='content'>
                        <div className='contentTechnologies'>
                            <div className='contentTechnologiesSection'>
                                <p className='contentTechnologiesSectionTitle'>FRONTEND</p>
                                <ul className='contentTechnologiesSectionList'>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaHtml5 className='contentTechnologiesSectionListElementIcon' /> <span>HTML</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaCss3 className='contentTechnologiesSectionListElementIcon' /> <span>CSS</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaBootstrap className='contentTechnologiesSectionListElementIcon' /> <span>Bootstrap</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <IoLogoJavascript className='contentTechnologiesSectionListElementIcon' /> <span>JavaScript</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <SiTypescript className='contentTechnologiesSectionListElementIcon' /> <span>TypeScript</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaReact className='contentTechnologiesSectionListElementIcon' /> <span>React</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <SiRedux className='contentTechnologiesSectionListElementIcon' /> <span>Redux</span>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div className='contentTechnologiesSection'>
                                <p className='contentTechnologiesSectionTitle'>BACKEND</p>
                                <ul className='contentTechnologiesSectionList'>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaNode className='contentTechnologiesSectionListElementIcon' /> <span>Node.js</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <SiExpress className='contentTechnologiesSectionListElementIcon' /> <span>Express</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <SiMongodb className='contentTechnologiesSectionListElementIcon' /> <span>MongoDB</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <DiMysql className='contentTechnologiesSectionListElementIcon' /> <span>MySQL</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <PiFileSqlDuotone className='contentTechnologiesSectionListElementIcon' /> <span>SQL</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaPhp className='contentTechnologiesSectionListElementIcon' /> <span>PHP</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaLaravel className='contentTechnologiesSectionListElementIcon' /> <span>Laravel</span>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div className='contentTechnologiesSection'>
                                <p className='contentTechnologiesSectionTitle'>HERRAMIENTAS</p>
                                <ul className='contentTechnologiesSectionList'>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaGitAlt className='contentTechnologiesSectionListElementIcon' /> <span>Git</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaGithub className='contentTechnologiesSectionListElementIcon' /> <span>GitHub</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <SiPostman className='contentTechnologiesSectionListElementIcon' /> <span>Postman</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaDocker className='contentTechnologiesSectionListElementIcon' /> <span>Docker</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaAws className='contentTechnologiesSectionListElementIcon' />
                                        <span>Deploy</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <div className='message'>¡Hagamos algo genial!</div>
                <div className='box-contact'>
                    <div className='left-contact'>
                        <div className='contact-title'>CONTACTO</div>
                        <div className='email-title'>Email:</div>
                        <div className='email' draggable='false'>vincenzodonnarumma22@gmail.com</div>
                        <div className='phone-title'>Teléfono:</div>
                        <div className='phone'>+34 722-760-606</div>
                    </div>
                    <div className='right-contact'>
                        <div className='seguir-title'>SEGUIR</div>
                        <a className='github' href='https://github.com/vincenzo2202' target='_blank' rel='noopener noreferrer'>
                            <img className='github' src={github} alt='github' />
                            <div className='github-title'>GitHub</div>
                        </a>
                        <a className='linkedIn' href='https://www.linkedin.com/in/vincenzo2202' target='_blank' rel='noopener noreferrer'>
                            <img className='linkedIn' src={linkedIn} alt='linkedIn' />
                            <div className='linkedIn-title'>LinkedIn</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}; 
