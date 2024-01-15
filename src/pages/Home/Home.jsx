import React from 'react';
import './Home.css';
import './About.css';
import image from '../../assets/vin1.png';

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

                    <div className='info-about'> Soy un apasionado desarrollador, experto en tecnologías front-end y back-end, enfocado en crear soluciones sólidas. Busco desafíos que impulsen mis habilidades y aprendizaje constante. 
                    <br/>
                    <br/>
                    Aspiro a evolucionar hacia roles de liderazgo técnico, donde pueda aportar mi experiencia para influir estratégicamente en proyectos. Mi objetivo es no solo desarrollar código, sino también contribuir de manera significativa a la dirección técnica, promoviendo el éxito e innovación en cada iniciativa. </div>
                    <div className='button-about'>MIRA LO QUE HE HECHO</div>
                </div>
            </div>
            <div className='projects'>
                <div className='box-project p-1'></div>
                <div className='box-project p-2'></div>
                <div className='box-project p-3'></div>
                <div className='box-project p-4'></div>
                <div className='box-project p-5'></div>
                <div className='box-project p-6'></div>
                <div className='box-project p-7'></div>
                <div className='box-project p-8'></div>
                <div className='box-project p-9'></div>
                <div className='box-project p-10'></div>
            </div>
            <div className='contact'>

            </div>

        </>
    );
};