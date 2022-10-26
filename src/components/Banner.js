import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import CV from '../assets/pdf/curriculum_De_Sebastian_Rosero_López.pdf';
import { useCallback } from "react";

export const Banner = () => {

  const [ loopNum, setLoopNum ] =       useState(0);
  const [ isDeleting, setIsDeleting ] = useState(false);
  const [ text, setText ] =             useState('');
  const [ delta, setDelta ] =           useState(300 - Math.random() * 100);
  const [ , setIndex ] =           useState(1);
  const period = 2000;
  
  const tick = useCallback(
    () => {
    const toRotate = [ " Web Developer", " Mobil Developer", " FullStack" ];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
    },
    [ isDeleting, loopNum, text ],
  )
  

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [ text, delta, tick ])

  return (
    <section className="banner" id="Inicio">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {
                ({ isVisible }) =>
                <div className={ isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Bienvenido a mi Portafolio</span>
                    <h1>
                        {`Hola, Soy Sebastián`}
                        <span className="txt-rotate" data-rotate='[ "Web Developer", "Mobil Developer", "FullStack" ]'>
                        <span className="wrap">{ text }
                        </span></span>
                    </h1>
                    <p>Hola, Bienvenido a mi portafolio, Soy Sebastian Rosero, Desarrollador de software FullStack, Mira todos mis proyectos y experiencia en cuanto al desarrollo de software, Just Be Fun :)!</p>
                    <a style={{ textDecoration: 'none' }} href={ CV } rel='noreferrer' target="_blank" download="curriculum_De_Sebastian_Rosero_López.pdf"> 
                        <button
                        >Descarga mi CV <ArrowRightCircle size={25} />
                        </button>
                    </a>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={ 12 } md={ 6 } xl={ 5 }>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={ isVisible ? "animate__animated animate__zoomIn" : "" }>
                  <img src={ headerImg } alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
