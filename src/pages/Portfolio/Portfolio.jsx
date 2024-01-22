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


export const Portfolio = () => {



    return (
        <div className="portfolio-body">
            <div className="portfolio-title">PORTFOLIO</div>
            <div className="content-portfolio">
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