import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "./../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import CV from './../../assets/pdf/curriculum_De_Sebastian_Rosero_López.pdf';
import { useCallback } from "react";

export const BannerPrivate = () => {

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
    <section className="banner" id="Private" style={{ marginBottom: 120 }}>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {
                ({ isVisible }) =>
                <div className={ isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Politicas de Privacidad</span>
                    <h1>
                        {`Hola, Soy Sebastián`}
                        <span className="txt-rotate" data-rotate='[ "Web Developer", "Mobil Developer", "FullStack" ]'>
                        <span className="wrap">{ text }
                        </span></span>
                    </h1>
                        <h5 style={{ fontSize: 28 }} >Política de privacidad</h5>
                    <p>
                        El sitio web sebasportafolio.com es propiedad de <strong>SebCompany</strong>, que es un controlador de datos de tus datos personales. <br /> <br />

                        Hemos adoptado esta Política de privacidad, que determina cómo procesamos la información recopilada por sebasportafolio.com, que también proporciona las razones por las que debemos recopilar ciertos datos personales sobre ti. Por lo tanto, debes leer esta Política de privacidad antes de usar el sitio web de sebasportafolio.com. <br /> <br />

                        Cuidamos tus datos personales y nos comprometemos a garantizar su confidencialidad y seguridad. <br /> <br />

                        <strong>Información personal que recopilamos</strong>: <br />
                        Cuando visitas sebasportafolio.com, recopilamos automáticamente cierta información sobre tu dispositivo, incluida información sobre tu navegador web, dirección IP, zona horaria y algunas de las cookies instaladas en tu dispositivo. Además, a medida que navegas por el sitio, recopilamos información sobre las páginas web individuales o los productos que ves, qué sitios web o términos de búsqueda te remitieron al sitio y cómo interactúas con él. Nos referimos a esta información recopilada automáticamente como "Información del dispositivo". Además, podemos recopilar los datos personales que nos proporcionas (incluidos, entre otros, nombre, apellido, dirección, información de pago, etc.) durante el registro para poder cumplir con el acuerdo. <br /> <br />

                        <strong>¿Por qué procesamos tus datos?</strong> <br />
                        Nuestra máxima prioridad es la seguridad de los datos del cliente y, como tal, podemos procesar solo los datos mínimos del usuario, solo en la medida en que sea absolutamente necesario para mantener el sitio web. La información recopilada automáticamente se utiliza solo para identificar casos potenciales de abuso y establecer información estadística sobre el uso del sitio web. Esta información estadística no se agrega de tal manera que identifique a ningún usuario en particular del sistema. <br /> <br />

                        Puedes visitar el sitio sin decirnos quién eres ni revelar ninguna información por la cual alguien pueda identificarte como una persona específica. Sin embargo, si deseas utilizar algunas de las funciones del sitio web, o deseas recibir nuestro boletín informativo o proporcionar otros detalles al completar un formulario, puedes proporcionarnos datos personales, como tu correo electrónico, nombre, apellido, ciudad de residencia, organización y número de teléfono. Puedes optar por no proporcionar tus datos personales, pero es posible que no puedas aprovechar algunas de las funciones del sitio web. Por ejemplo, no podrás recibir nuestro boletín ni contactarnos directamente desde el sitio web. Los usuarios que no estén seguros de qué información es obligatoria pueden ponerse en contacto con nosotros a través de sebastian11yt@gmail.com. <br /> <br />

                        <strong>Tus derechos</strong>: <br />
                        Si eres residente Colombiano, tienes los siguientes derechos relacionados con tus datos personales: <br /> <br />

                        ° El derecho a ser informado. <br />
                        ° El derecho de acceso. <br />
                        ° El derecho a la rectificación. <br />
                        ° El derecho a borrar. <br />
                        ° El derecho a restringir el procesamiento. <br />
                        ° El derecho a la portabilidad de datos. <br />
                        ° El derecho a oponerte. <br />
                        ° Derechos en relación con la toma de decisiones automatizada y la elaboración de perfiles.
                        Si deseas ejercer este derecho, comunícate con nosotros a través de la información de contacto a continuación. <br /> <br />

                        Además, si eres residente europeo, destacamos que estamos procesando tu información para cumplir con los contratos que podríamos tener contigo (por ejemplo, si realizas un pedido a través del sitio), o de otra manera para seguir nuestros intereses comerciales legítimos enumerados anteriormente. Además, ten en cuenta que tu información puede transferirse fuera de Europa, incluidos Canadá y Estados Unidos. <br /> <br />

                        <strong>Enlaces a otros sitios web</strong>: <br />
                        Nuestro sitio puede contener enlaces a otros sitios web que no son de nuestra propiedad ni están controlados por nosotros. Ten en cuenta que no somos responsables de dichos sitios web ni de las prácticas de privacidad de terceros. Te recomendamos que estés atento cuando abandones nuestro sitio web y leas las declaraciones de privacidad de cada sitio que pueda recopilar información personal. <br /> <br />

                        <strong>Seguridad de la información</strong>: <br />
                        Aseguramos la información que proporcionas en servidores informáticos en un entorno controlado y seguro, protegido del acceso, uso o divulgación no autorizados. Mantenemos medidas de seguridad administrativas, técnicas y físicas razonables para proteger contra el acceso no autorizado, el uso, la modificación y la divulgación de datos personales bajo su control y custodia. Sin embargo, no se puede garantizar la transmisión de datos a través de Internet o redes inalámbricas. <br /> <br />

                        <strong>Divulgación legal</strong>: <br />
                        Divulgaremos cualquier información que recopilemos, usemos o recibamos si así lo requiere o lo permite la ley, como para cumplir con una citación o un proceso legal similar, y cuando creemos de buena fe que la divulgación es necesaria para proteger nuestros derechos, proteger tu seguridad o la seguridad de los demás, investigar el fraude o responder a una solicitud del gobierno. <br /> <br />

                        <strong>Información de contacto</strong>: <br />
                        Si deseas comunicarte con nosotros para comprender más sobre esta Política o deseas comunicarte con nosotros en relación con cualquier asunto sobre los derechos individuales y tu información personal, puedes enviarnos un correo electrónico a sebastian11yt@gmail.com. <br /> <br />
                    </p>
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
