import React, { useEffect, useRef, useState } from 'react';
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
    FaAws,
    FaSymfony,
    FaAngular
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
import './Header.css';
import './Studies.css';

import image from '../../assets/vin1.png';
import github from '../../assets/github.png';
import linkedIn from '../../assets/LnkdIn.png';
import malcriada from '../../assets/malcriada.png';
import mastermind from '../../assets/mastermind.png';
import videoconsola from '../../assets/videoconsola.png';
import geekzone from '../../assets/geekzone.png';
import { useNavigate } from 'react-router-dom';
import cv from '../../assets/CV_VINCENZO_DONNARUMMA.pdf';
import certificate from '../../assets/certificate.svg';
import degree from '../../assets/degree.svg';

import geekZone from '../../assets/geekzone.png'
import diagramaGeekZone from '../../assets/diagrama-geekzone.png'
import diagramaGameRoom from '../../assets/diagrama-gameroom.jpeg'
import diagramaMalcriada from '../../assets/diagrama-malcriada.png'
import gardenButcher from '../../assets/garden-butcher.png'
import { PortfolioCardHorizontally } from '../../common/PortfolioCard/PortfolioCardHorizontally';


export const Home = () => {
    const about = useRef(null);
    const projects = useRef(null);
    const st = useRef(null);
    const navigate = useNavigate();
    const studies = useRef(null);
    const contact = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const [formData, setFormData] = useState({ email: "", message: "" });
    const [status, setStatus] = useState(""); // Estado para mostrar el mensaje de éxito/error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue

        try {
            const response = await fetch("https://formspree.io/f/mjkgqdpk", { // Replace 'yourFormID' with your actual Formspree form ID
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("✅ Mensaje enviado con éxito");
                setFormData({ email: "", message: "" }); // Limpia el formulario
            } else {
                setStatus("❌ Hubo un error al enviar el mensaje.");
            }
        } catch (error) {
            setStatus("⚠️ Error de conexión. Intenta de nuevo.");
        }

        setTimeout(() => setStatus(""), 3000); // Borra el mensaje después de 3 segundos
    };


    const handleScrollToSection = (targetRef) => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const portfolioBtn = () => {
        return navigate('/portfolio');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className='header-container'>
                    <div className='projects-header' onClick={() => handleScrollToSection(projects)}><h1>Proyectos</h1></div>
                    <div className='stack-header' onClick={() => handleScrollToSection(st)}><h1>Stack</h1></div>
                    <div className='studies-header' onClick={() => handleScrollToSection(studies)}><h1>Estudios</h1></div>
                    <div className='home-header' onClick={() => handleScrollToSection(about)}><h1>Sobre mi</h1></div>
                    <div className='contact-header' onClick={() => handleScrollToSection(contact)}><h1>Contacto</h1></div>
                </div>
            </div>
            <div className='home-body'>
                <div className='title-home'>
                    <div draggable='true'>
                        <img className='home-image' src={image} alt='home' />
                    </div>
                    <div className='title-name'>Vincenzo Donnarumma</div>
                    <div className='button-home' onClick={() => handleScrollToSection(projects)}>DESCUBRE MÁS</div>
                </div>
            </div>
            <div className='projects' ref={projects} style={{ paddingBottom: '50px' }}>
                <div className='projects-title' >Proyectos personales</div>
                <div className='project-list'>
                    <PortfolioCardHorizontally
                        cardImage={'https://raw.githubusercontent.com/vincenzo2202/libraryApp/LA-BE-001-Production/public/uploads/images/diagrama.png'}
                        cardName='Library App'
                        cardInfo='Aplicación web para gestionar una biblioteca y llevar estadísticas de valor y estado. Tecnología: PHP / Symfony.'
                        cardPreview='#'
                        cardCode='https://github.com/vincenzo2202/libraryApp'
                        cardSkills={['PHP', 'Symfony']}
                    />
                    <PortfolioCardHorizontally
                        cardImage={'https://raw.githubusercontent.com/vincenzo2202/movieFinder/refs/heads/main/public/assets/captura5.png'}
                        cardName='Movie Finder'
                        cardInfo='Aplicación web para buscar películas. Tecnología: Angular.'
                        cardPreview='https://main.d2vjyg47loas9v.amplifyapp.com/landing'
                        cardCode='https://github.com/vincenzo2202/movieFinder'
                        cardSkills={['Angular']}
                    />
                    <PortfolioCardHorizontally
                        cardImage={'https://raw.githubusercontent.com/vincenzo2202/todo-app/refs/heads/main/public/todo.png'}
                        cardName='TO DO APP'
                        cardInfo='Aplicación web para crear anotaciones. Tecnología: Angular.'
                        cardPreview='https://dev.ds9lugilmnvn7.amplifyapp.com/'
                        cardCode='https://github.com/vincenzo2202/todo-app'
                        cardSkills={['Angular']}
                    />
                    <PortfolioCardHorizontally
                        cardImage={'https://raw.githubusercontent.com/vincenzo2202/Quasar-Dynamics-Technical-Assessment/master/assets/RE.png'}
                        cardName='API NOTES'
                        cardInfo='Backend de una API para el registro de notas. Tecnología: PHP / Symfony.'
                        cardPreview='#'
                        cardCode='https://github.com/vincenzo2202/Quasar-Dynamics-Technical-Assessment?tab=readme-ov-file'
                        cardSkills={['PHP', 'Symfony']}
                    />
                    <PortfolioCardHorizontally
                        cardImage={geekZone}
                        cardName='Geek Zone Frontend'
                        cardInfo='Frontend de una red social que actúa como campus virtual para un centro educativo.Tecnología: React.'
                        cardPreview='https://views.d6m2hk6zqt0er.amplifyapp.com/'
                        cardCode='https://github.com/vincenzo2202/geek-zone-GH-frontend'
                        cardSkills={['React']}
                    />
                    <PortfolioCardHorizontally
                        cardImage={diagramaGeekZone}
                        cardName='Geek Zone Backend'
                        cardInfo='Backend completo para una red social que actúa como campus virtual educativo.Tecnología: PHP / Laravel.'
                        cardPreview='#'
                        cardCode='https://github.com/vincenzo2202/geek-zone-GH-backend'
                        cardSkills={['PHP', 'Laravel']}
                    />
                    <PortfolioCardHorizontally
                        cardImage={malcriada}
                        cardName='Malcriada Tattoo Studio Frontend'
                        cardInfo='Frontend para un tienda de tatuajes con sistema de reservas. Tecnología: React. '
                        cardPreview='https://master.d9uttmtdayy6h.amplifyapp.com/'
                        cardCode='https://github.com/vincenzo2202/Tattoo-Studio-Frontend-'
                        cardSkills={['React']}
                    />
                    <PortfolioCardHorizontally
                        cardImage={mastermind}
                        cardName='MasterMind'
                        cardInfo='Juego MasterMind es un juego de mesa de estrategia y lógica. Tecnología: JavaScript, HTML y CSS.'
                        cardPreview='https://master.d2qc8p5wt78wrx.amplifyapp.com/'
                        cardCode='https://github.com/vincenzo2202/MasterMind-GH-project2'
                        cardSkills={['JavaScript']}
                    />
                </div>
                <div className='see-more'>
                    <div class='shadow__btn' onClick={portfolioBtn} >
                        Todos los proyectos
                    </div>
                </div>
            </div>
            <div className='stack' ref={st} style={{ paddingBottom: '50px' }}>
                <div className='contentSkillsTitle'>Stack Tecnológico</div>
                <div className='stack-container'>
                    <div className='content'>
                        <div className='contentTechnologies'>
                            <div className='contentTechnologiesSection'>
                                <div className='contentTechnologiesSectionTitle'>FRONTEND</div>
                                <ul className='contentTechnologiesSectionList'>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaReact className='contentTechnologiesSectionListElementIcon' /> <span>React</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaAngular className='contentTechnologiesSectionListElementIcon' /> <span>Angular</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaHtml5 className='contentTechnologiesSectionListElementIcon' /> <span>HTML</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaCss3 className='contentTechnologiesSectionListElementIcon' /> <span>CSS</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <IoLogoJavascript className='contentTechnologiesSectionListElementIcon' /> <span>JavaScript</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <SiTypescript className='contentTechnologiesSectionListElementIcon' /> <span>TypeScript</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaBootstrap className='contentTechnologiesSectionListElementIcon' /> <span>Bootstrap</span>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div className='contentTechnologiesSection'>
                                <div className='contentTechnologiesSectionTitle'>BACKEND</div>
                                <ul className='contentTechnologiesSectionList'>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaPhp className='contentTechnologiesSectionListElementIcon' /> <span>PHP</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaLaravel className='contentTechnologiesSectionListElementIcon' /> <span>Laravel</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaSymfony className='contentTechnologiesSectionListElementIcon' /> <span>Symfony</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <FaNode className='contentTechnologiesSectionListElementIcon' /> <span>Node.js</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <SiExpress className='contentTechnologiesSectionListElementIcon' /> <span>Express</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <PiFileSqlDuotone className='contentTechnologiesSectionListElementIcon' /> <span>SQL</span>
                                    </li>
                                    <li className='contentTechnologiesSectionListElement'>
                                        <SiMongodb className='contentTechnologiesSectionListElementIcon' /> <span>MongoDB</span>
                                    </li>

                                </ul>
                            </div>
                            <hr />
                            <div className='contentTechnologiesSection'>
                                <div className='contentTechnologiesSectionTitle'>HERRAMIENTAS</div>
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
            <div className='studies' ref={studies} style={{ paddingBottom: '50px' }}>
                <div className='studies-title'>Formación académica</div>
                <div className='studies-box'>
                    <div className='studies-top'>
                        <div class="e-card playing">
                            <div class="image"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="infotop">
                                <img className='e-card-img' src={certificate} alt="certificate" /><br />
                                Full Stack Developer
                                <br />
                                <div class="name">GeekHubs Academy</div>
                                <div class="name">2024</div>
                            </div>
                        </div>
                        <div class="e-card playing">
                            <div class="image"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="infotop">
                                <img className='e-card-img' src={certificate} alt="certificate" /><br />
                                MBA Marketing Digital
                                <br />
                                <div class="name">The Power Business School</div>
                                <div class="name">2023</div>
                            </div>
                        </div>
                        <div class="e-card playing">
                            <div class="image"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="infotop">
                                <img className='e-card-img' src={degree} alt="certificate" /><br />
                                Técnico Superior en Administración y Finanzas
                                <br />
                                <div class="name">IES Conselleria</div>
                                <div class="name">2021</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-me' ref={about} style={{ paddingBottom: '50px' }}>
                <div className='left-box' >
                    <div className='title-about'>Desarrollador Full Stack</div>
                    <div className='button-about' onClick={() => handleScrollToSection(projects)}><h1>MIRA LO QUE HE HECHO</h1></div>
                </div>
                <div className='right-box'>
                    <div className='info-about'>
                        Soy Vincenzo Donnarumma y comencé mi camino como desarrollador en 2023. Tras un año de aprendizaje autodidacta, completé el bootcamp de Desarrollo Full Stack en GeeksHubs Academy en diciembre de 2023.
                        <br />
                        <br />
                        Desde entonces, he trabajado como desarrollador Full Stack, creando aplicaciones completas desde el diseño de bases de datos hasta la implementación de APIs y la integración de servicios externos. Me enfoco en desarrollar soluciones eficientes, seguras y escalables.
                        <br />
                        <br />
                        ¡Gracias por visitar mi perfil! Estoy abierto a nuevas oportunidades, colaboraciones o simplemente una buena conversación.
                    </div>
                </div>
            </div>
            <div className='contact' ref={contact} style={{ paddingBottom: '50px' }}>
                <div className='message'>¡Hagamos algo genial!</div>
                <div className='box-contact'>
                    <div className='left-contact'>
                        <div class="contact-form">
                            <span class="contact-title">CONTACTO</span>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                                <button type="submit">Submit</button>
                            </form>
                            {status && <p>{status}</p>} {/* Muestra el mensaje de éxito o error */}
                        </div>
                    </div>
                    <div className='right-contact'>
                        <div className='seguir-title'>SEGUIR</div>
                        <div className='social'>
                            <div class="container-social">
                                <a href="https://www.linkedin.com/in/vincenzo2202" target="_blank" rel="noopener noreferrer">
                                    <button >
                                        <svg className='icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                            <path d='M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm14.11 12.87h-3.56v-5.59c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.68h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24z'></path>
                                        </svg>
                                    </button>
                                </a>
                                <a href="https://github.com/vincenzo2202" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <svg className='icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                            <path d='M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.623-5.475 5.92.43.37.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z'></path>
                                        </svg>
                                    </button>
                                </a>
                                <a href="mailto:vincenzodonnarumma22@gmail.com">
                                    <button>
                                        <svg className='icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                            <path d='M12 12.713l11.985-8.713H.015L12 12.713zm0 2.574L0 7.426V18h24V7.426l-12 7.861z'></path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="Download-button">
                            <a className="Download-link" href={cv} target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16"
                                    width="20"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                                        fill="white"
                                    ></path>
                                </svg>
                                <div className="cv-text">Descargar CV</div>
                            </a>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};
