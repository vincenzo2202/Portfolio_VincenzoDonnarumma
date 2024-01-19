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
                    cardInfo='lorem sddfgasfgasgfdsdgasdg'
                    cardPreview='https://views.d6m2hk6zqt0er.amplifyapp.com/'
                    cardCode='https://github.com/vincenzo2202/geek-zone-GH-frontend'
                />
                <PortfolioCard
                    cardImage={diagramaGeekZone}
                    cardName='Geek Zone Backend'
                    cardInfo='lorem sddfgasfgasgfdsdgasdg'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/geek-zone-GH-backend'
                />
                <PortfolioCard
                    cardImage={diagramaGameRoom}
                    cardName='Game Room'
                    cardInfo='lorem sddfgasfgasgfdsdgasdg'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/Project6-GameRoom'
                />
                <PortfolioCard
                    cardImage={malcriada}
                    cardName='Malcriada Tattoo Studio Frontend'
                    cardInfo='lorem sddfgasfgasgfdsdgasdg'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/Tattoo-Studio-Frontend-'
                />
                <PortfolioCard
                    cardImage={diagramaMalcriada}
                    cardName='Malcriada Tattoo Studio Backend'
                    cardInfo='lorem sddfgasfgasgfdsdgasdg'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/Backend_tatto-studio_API_DB'
                />
                <PortfolioCard
                    cardImage={mastermind}
                    cardName='MasterMind'
                    cardInfo='lorem sddfgasfgasgfdsdgasdg'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/MasterMind-GH-project2'
                />
                <PortfolioCard
                    cardImage={videoconsola}
                    cardName='PSP Videoconsola'
                    cardInfo='lorem sddfgasfgasgfdsdgasdg'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/Proyecto2GHVideoconsola'
                />
                <PortfolioCard
                    cardImage={gardenButcher}
                    cardName='Garden Butcher'
                    cardInfo='lorem sddfgasfgasgfdsdgasdg'
                    cardPreview='#'
                    cardCode='https://github.com/vincenzo2202/Project1GeeksHubsGardenButcher'
                />
            </div>
        </div>
    );
};