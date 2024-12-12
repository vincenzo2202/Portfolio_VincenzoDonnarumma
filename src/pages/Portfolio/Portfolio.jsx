import { PortfolioCard } from '../../common/PortfolioCard/PortfolioCard';
import './Portfolio.css'

import geekZone from '../../assets/geekzone.png'
import diagramaGeekZone from '../../assets/diagrama-geekzone.png'
import diagramaGameRoom from '../../assets/diagrama-gameroom.jpeg'
import malcriada from '../../assets/malcriada.png'
import diagramaMalcriada from '../../assets/diagrama-malcriada.png'
import mastermind from '../../assets/mastermind.png'
import videoconsola from '../../assets/videoconsola.png'
import gardenButcher from '../../assets/garden-butcher.png'
import { useNavigate } from 'react-router-dom';


export const Portfolio = () => {
    const navigate = useNavigate()

    const homeBtn = () => {
        return navigate('/');
    }


    return (
        <div className="portfolio-body">
            <div className='title-box'>

                <div class="button" onClick={homeBtn}>
                    <div class="button-box">
                        <span class="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                ></path>
                            </svg>
                        </span>
                        <span class="button-elem">
                            <svg viewBox="0 0 46 40">
                                <path
                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="portfolio-title">PORTFOLIO</div>
            </div>

            <div className="content-portfolio">
                <PortfolioCard
                    cardImage={'https://raw.githubusercontent.com/vincenzo2202/movieFinder/refs/heads/main/public/assets/captura5.png'}
                    cardName='Movie Finder'
                    cardInfo='Aplicación web para buscar películas. Tecnología: Angular.'
                    cardPreview='https://main.d2vjyg47loas9v.amplifyapp.com/landing'
                    cardCode='https://github.com/vincenzo2202/movieFinder'
                />
                <PortfolioCard
                    cardImage={'https://raw.githubusercontent.com/vincenzo2202/Quasar-Dynamics-Technical-Assessment/master/assets/RE.png'}
                    cardName='API NOTES'
                    cardInfo='Backend de una API para el registro de notas. Tecnología: PHP y Symfony.'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/Quasar-Dynamics-Technical-Assessment?tab=readme-ov-file'
                />
                <PortfolioCard
                    cardImage={geekZone}
                    cardName='Geek Zone Frontend'
                    cardInfo='Frontend de una red social que actúa como campus virtual para un centro educativo.Tecnología: React.'
                    cardPreview='https://views.d6m2hk6zqt0er.amplifyapp.com/'
                    cardCode='https://github.com/vincenzo2202/geek-zone-GH-frontend'
                />
                <PortfolioCard
                    cardImage={diagramaGeekZone}
                    cardName='Geek Zone Backend'
                    cardInfo='Backend completo para una red social que actúa como campus virtual educativo.Tecnología: PHP y Laravel.'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/geek-zone-GH-backend'
                />
                <PortfolioCard
                    cardImage={diagramaGameRoom}
                    cardName='Game Room'
                    cardInfo='Backend completo para una aplicación web, que permita formar grupos. Tecnología: PHP y Laravel. '
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/Project6-GameRoom'
                />
                <PortfolioCard
                    cardImage={malcriada}
                    cardName='Malcriada Tattoo Studio Frontend'
                    cardInfo='Frontend para un tienda de tatuajes con sistema de reservas. Tecnología: React. '
                    cardPreview='https://master.d9uttmtdayy6h.amplifyapp.com/'
                    cardCode='https://github.com/vincenzo2202/Tattoo-Studio-Frontend-'
                />
                <PortfolioCard
                    cardImage={diagramaMalcriada}
                    cardName='Malcriada Tattoo Studio Backend'
                    cardInfo='Backend para un tienda de tatuajes con sistema de reservas. Tecnología: Node.js, Express.js y TypeORM.'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/Backend_tatto-studio_API_DB'
                />
                <PortfolioCard
                    cardImage={mastermind}
                    cardName='MasterMind'
                    cardInfo='Juego MasterMind es un juego de mesa de estrategia y lógica. Tecnología: JavaScript, HTML y CSS.'
                    cardPreview='https://master.d2qc8p5wt78wrx.amplifyapp.com/'
                    cardCode='https://github.com/vincenzo2202/MasterMind-GH-project2'
                />
                <PortfolioCard
                    cardImage={videoconsola}
                    cardName='PSP Videoconsola'
                    cardInfo='Representación de la mítica PlayStation PSP. Tecnología: JavaScript, HTML y CSS.'
                    cardPreview='https://master.d3tfp2is3y78wg.amplifyapp.com/'
                    cardCode='https://github.com/vincenzo2202/Proyecto2GHVideoconsola'
                />
                <PortfolioCard
                    cardImage={gardenButcher}
                    cardName='Garden Butcher'
                    cardInfo='Garden Butcher es una WEB para un restaurante Vegano. Tecnología: HTML y CSS.'
                    cardPreview='https://master.d3291ewaz7nqgw.amplifyapp.com/'
                    cardCode='https://github.com/vincenzo2202/Project1GeeksHubsGardenButcher'
                />
            </div>
        </div>
    );
};