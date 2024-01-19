import { PortfolioCard } from '../../common/PortfolioCard/PortfolioCard';
import './Portfolio.css'

import geekZone from '../../assets/geekzone.png'

export const Portfolio = ()=>{



    return(
      <div className="portfolio-body">
        <div className="portfolio-title">PORTFOLIO</div>
        <div className="content-portfolio">
            <PortfolioCard
                cardImage={geekZone}
                cardName='Geek Zone'
                cardInfo= 'lorem sddfgasfgasgfdsdgasdg'
                cardPreview='#'
                cardCode='#'
            />
        </div>
        </div>
    );
};