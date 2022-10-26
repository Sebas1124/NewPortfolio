import React from "../assets/img/react.png";
import NextLogo from "../assets/img/NextLogo.png";
import TSJS from "../assets/img/TSJS.png";
import RN from "../assets/img/RN.png";
import Nodejs from "../assets/img/nodejs.png";
import PHP from "../assets/img/php.png";
import Laravel from "../assets/img/laravel.png";
import Socketio from "../assets/img/socketio.svg";
import MongoDB from "../assets/img/mongodb.svg";
import MySql from "../assets/img/mysql.svg";
import github from "../assets/img/github.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="Habilidades">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Conocimientos Adquiridos durante mi experiencia Laboral<br></br>Tecnólogo en Analisis y desarrollo en sistemas de la información.</p>
                        <Carousel 
                         responsive={ responsive } 
                         infinite={true} 
                         className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div>
                                    <img src={ React } alt="ReactJS" />
                                </div>
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ RN } alt="React Native" />
                                </div>
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ NextLogo } alt="Next JS" />
                                </div>
                                <h5>Next JS</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ TSJS } alt="JavaScript/TypeScript" />
                                </div>
                                <h5>JavaScript / TypeScript</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ Nodejs } alt="Nodejs" />
                                </div>
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ PHP } alt="Php" />
                                </div>
                                <h5>PhP</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ Laravel } alt="Laravel" />
                                </div>
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ Socketio } alt="Sockets" />
                                </div>
                                <h5>Socket.IO</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ MongoDB } alt="MongoDB" />
                                </div>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ MySql } alt="MySQl" />
                                </div>
                                <h5>MySQl</h5>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={ github } alt="Git/GitHub" />
                                </div>
                                <h5>Git | GitHub</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={ colorSharp } alt="Bg" />
    </section>
  )
}
